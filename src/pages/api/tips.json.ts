import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const sectionMap: Record<string, string> = {
  roi: 'roi',
  homestead: 'homestead',
  care: 'guides',
  planning: 'guides',
};

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles');

  const data = articles
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())
    .map((article) => ({
      slug: article.id,
      url: `/${sectionMap[article.data.category]}/${article.id}/`,
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
