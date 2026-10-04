import assert from 'node:assert/strict';
import test from 'node:test';
import { mixHslPalette, toHslPalette } from '../src/scripts/flavour-colors.ts';

test('opposite flavour colors stay saturated throughout the transition', () => {
  const orange = toHslPalette({ primary: '#f47b00', deep: '#cf4b00', soft: '#fde4cb' });
  const blueberry = toHslPalette({ primary: '#1b9be0', deep: '#0a5ca8', soft: '#ddeef9' });
  for (const progress of [0, 0.25, 0.5, 0.75, 1]) {
    const palette = mixHslPalette(orange, blueberry, progress);
    assert.ok(palette.primary.saturation > 70);
    assert.ok(palette.deep.saturation > 70);
    assert.ok(palette.soft.saturation > 60);
  }
});

test('a transition can restart from its current interpolated color', () => {
  const red = toHslPalette({ primary: '#f26076', deep: '#c22840', soft: '#fbdfe3' });
  const orange = toHslPalette({ primary: '#f47b00', deep: '#cf4b00', soft: '#fde4cb' });
  const midpoint = mixHslPalette(red, orange, 0.5);
  assert.deepEqual(mixHslPalette(midpoint, red, 0), midpoint);
  assert.deepEqual(mixHslPalette(midpoint, red, 1), red);
});
