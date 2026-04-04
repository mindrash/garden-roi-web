import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles');

  const data = articles
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())
    .map((article) => ({
      slug: article.id,
      url: `/tips/${article.id}/`,
      title: article.data.title,
      description: article.data.description,
      category: article.data.category,
      publishDate: article.data.publishDate.toISOString().split('T')[0],
      featured: article.data.featured,
    }));

  return new Response(JSON.stringify({ tips: data }, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
