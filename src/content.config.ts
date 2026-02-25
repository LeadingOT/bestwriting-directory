import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const listings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/listings' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.string(),
    subcategory: z.string().optional(),
    url: z.string().url(),
    logo: z.string().optional(),
    pricing: z.object({
      model: z.enum(['free', 'freemium', 'paid', 'enterprise', 'open-source']),
      startingPrice: z.string().optional(),
    }),
    features: z.array(z.string()),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    rating: z.number().min(0).max(5).optional(),
    lastUpdated: z.string(),
    tags: z.array(z.string()),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    author: z.string().default('BestWriting.tools Team'),
    category: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = { listings, blog };
