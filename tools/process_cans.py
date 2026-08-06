"""SPARK — can polish pipeline.

The phase-one renders already ship with real alpha, but carry a green
chroma-key fringe along the silhouette and generous transparent
margins. For every can:

  1. Crop to the silhouette bounding box (+ small pad).
  2. Green despill inside a narrow band along the cut edge — pixels
     where green dominates red/blue are pulled back to neutral.
     Label artwork, colours and proportions stay untouched.

Originals live in /can-originals and are never modified.
"""

from pathlib import Path

import numpy as np
from PIL import Image

SRC = Path(__file__).parent.parent / "can-originals"
OUT = Path(__file__).parent.parent / "src" / "assets" / "flavours"

DESPILL_BAND_PX = 5        # how far inside the edge despill may reach
DESPILL_DOMINANCE = 8      # how much greener than R/B a pixel must be
PAD = 14                   # transparent padding around the crop


def dilate(mask: np.ndarray, px: int) -> np.ndarray:
    """Cheap square dilation via repeated rolls."""
    out = mask.copy()
    for _ in range(px):
        grown = out.copy()
        grown[1:, :] |= out[:-1, :]
        grown[:-1, :] |= out[1:, :]
        grown[:, 1:] |= out[:, :-1]
        grown[:, :-1] |= out[:, 1:]
        out = grown
    return out


def process(name: str) -> None:
    im = Image.open(SRC / name).convert("RGBA")
    arr = np.asarray(im).astype(np.uint8)
    rgb = arr[..., :3].astype(np.int16)
    alpha = arr[..., 3]

    # 1 — despill: narrow band just inside the silhouette edge
    solid = alpha > 8
    band = dilate(~solid, DESPILL_BAND_PX) & solid
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    greenish = (g > r + DESPILL_DOMINANCE) & (g > b + DESPILL_DOMINANCE)
    spill = band & greenish
    g_new = g.copy()
    g_new[spill] = ((r[spill] + b[spill]) // 2 + 4).clip(0, 255)
    arr[..., 1] = g_new.astype(np.uint8)

    # 2 — crop to silhouette with pad
    ys, xs = np.where(solid)
    y0, y1 = max(ys.min() - PAD, 0), min(ys.max() + PAD, alpha.shape[0])
    x0, x1 = max(xs.min() - PAD, 0), min(xs.max() + PAD, alpha.shape[1])
    out = Image.fromarray(arr[y0:y1, x0:x1], "RGBA")

    OUT.mkdir(parents=True, exist_ok=True)
    out.save(OUT / name, optimize=True)
    print(f"{name}: {im.size} -> {out.size}, despilled {int(spill.sum())} px")


if __name__ == "__main__":
    for png in sorted(SRC.glob("*.png")):
        process(png.name)
