import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const plants = await getCollection('plants');

  const data = plants
    .sort((a, b) => {
      if (a.data.is_common !== b.data.is_common) return a.data.is_common ? -1 : 1;
      return a.data.name.localeCompare(b.data.name);
    })
    .map((plant) => ({
      slug: plant.id,
      url: `/crops/${plant.id}/`,
      name: plant.data.name,
      scientific_name: plant.data.scientific_name,
      category: plant.data.category,
      days_min: plant.data.days_min,
      days_max: plant.data.days_max,
      avg_yield_lb: plant.data.avg_yield_lb,
      avg_price_lb: plant.data.avg_price_lb,
      seed_cost: plant.data.seed_cost,
      is_common: plant.data.is_common,
      watering: plant.data.watering,
      sunlight: plant.data.sunlight,
      companion_plants: plant.data.companion_plants,
    }));

  return new Response(JSON.stringify({ plants: data }, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
