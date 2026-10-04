import { getCollection } from 'astro:content';

/** Keep collection order consistent wherever flavours are rendered. */
export async function getFlavours() {
  const flavours = await getCollection('flavours');
  return flavours.sort((a, b) => a.data.order - b.data.order);
}
