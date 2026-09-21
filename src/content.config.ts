import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    summary: z.string().default(''),
    tags: z.array(z.string()).default([]),
    category: z.string().default('未分类'),
    cover: z.string().optional(),
  }),
});

export const collections = { posts };
