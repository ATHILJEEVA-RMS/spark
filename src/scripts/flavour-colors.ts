export type FlavourColors = { primary: string; deep: string; soft: string };

type Hsl = { hue: number; saturation: number; lightness: number };
export type HslPalette = Record<keyof FlavourColors, Hsl>;

function hexToHsl(hex: string): Hsl {
  const [red, green, blue] = [1, 3, 5].map((start) =>
    Number.parseInt(hex.slice(start, start + 2), 16) / 255
  );
  const high = Math.max(red, green, blue);
  const low = Math.min(red, green, blue);
  const range = high - low;
  const lightness = (high + low) / 2;
  if (range === 0) return { hue: 0, saturation: 0, lightness: lightness * 100 };

  let hue = high === red
    ? ((green - blue) / range) % 6
    : high === green
      ? (blue - red) / range + 2
      : (red - green) / range + 4;
  hue = (hue * 60 + 360) % 360;
  const saturation = range / (1 - Math.abs(2 * lightness - 1));
  return { hue, saturation: saturation * 100, lightness: lightness * 100 };
}

export function toHslPalette(colors: FlavourColors): HslPalette {
  return {
    primary: hexToHsl(colors.primary),
    deep: hexToHsl(colors.deep),
    soft: hexToHsl(colors.soft),
  };
}

export function mixHslPalette(from: HslPalette, to: HslPalette, progress: number): HslPalette {
  if (progress <= 0) return from;
  if (progress >= 1) return to;
  const mix = (key: keyof FlavourColors): Hsl => {
    const start = from[key];
    const end = to[key];
    // Interpolate hue on the color wheel so opposite flavours stay colorful.
    const hueDistance = ((end.hue - start.hue + 540) % 360) - 180;
    return {
      hue: (start.hue + hueDistance * progress + 360) % 360,
      saturation: start.saturation + (end.saturation - start.saturation) * progress,
      lightness: start.lightness + (end.lightness - start.lightness) * progress,
    };
  };
  return { primary: mix('primary'), deep: mix('deep'), soft: mix('soft') };
}

export function formatHslPalette(colors: HslPalette): FlavourColors {
  const format = (key: keyof FlavourColors) => {
    const { hue, saturation, lightness } = colors[key];
    return `hsl(${hue.toFixed(2)} ${saturation.toFixed(2)}% ${lightness.toFixed(2)}%)`;
  };
  return { primary: format('primary'), deep: format('deep'), soft: format('soft') };
}
