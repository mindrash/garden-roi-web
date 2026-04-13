import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const plants = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/plants' }),
  schema: z.object({
    name: z.string(),
    scientific_name: z.string(),
    category: z.enum(['Vegetable', 'Herb', 'Fruit']),
    days_min: z.number().int().positive(),
    days_max: z.number().int().positive(),
    avg_yield_lb: z.number().positive(),
    avg_price_lb: z.number().positive(),
    seed_cost: z.number().positive(),
    start_cost_label: z.string().optional().default('Seed packet'),
    is_common: z.boolean().default(true),
    watering: z.string(),
    sunlight: z.string(),
    companion_plants: z.array(z.string()).default([]),
    direct_sow_ok: z.boolean().default(true),
    indoor_weeks_needed: z.number().int().min(0).default(0),
    hero_image: z.string().optional(),
    description: z.string().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['homestead', 'roi', 'care', 'planning']),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
    hero_image: z.string().optional(),
  }),
});

export const collections = { plants, articles };
