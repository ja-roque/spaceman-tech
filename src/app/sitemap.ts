import { MetadataRoute } from "next";

export const revalidate = 300;

interface Post {
  slug: string;
  updated_at: string;
}

async function getBlogPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${process.env.DAYBY_API_URL}/posts?per_page=50`, {
      headers: {
        Authorization: `Bearer ${process.env.DAYBY_API_KEY}`,
      },
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.posts as Array<Post & { visibility: string }>).filter(
      (p) => p.visibility === "publik"
    );
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://spacemantech.ai",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://spacemantech.ai/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://spacemantech.ai/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://spacemantech.ai/terms",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://spacemantech.ai/blog/${post.slug}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
