import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Spaceman Tech",
  description: "Thoughts on software development, AI, and building products.",
};

export const revalidate = 300; // revalidate every 5 minutes

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  visibility: string;
  has_article: boolean;
  url: string;
  created_at: string;
  updated_at: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${process.env.DAYBY_API_URL}/posts?per_page=50`, {
    headers: {
      Authorization: `Bearer ${process.env.DAYBY_API_KEY}`,
    },
    next: { revalidate: 300 },
  });

  if (!res.ok) return [];

  const data = await res.json();
  return (data.posts as Post[]).filter((p) => p.visibility === "publik");
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function excerpt(content: string, max = 160) {
  const stripped = content.replace(/[#*`>\-_]/g, "").trim();
  return stripped.length > max ? stripped.slice(0, max).trimEnd() + "…" : stripped;
}

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-dark text-paper-white">
      <Navbar />
      <section className="mx-auto max-w-3xl px-6 py-32">
        <h1 className="mb-2 text-4xl font-black tracking-tight">Blog</h1>
        <p className="mb-16 text-paper-white/40">
          Notes on building software, AI, and running a dev firm.
        </p>

        {posts.length === 0 ? (
          <p className="text-paper-white/40">No posts yet.</p>
        ) : (
          <ul className="space-y-12">
            {posts.map((post) => (
              <li key={post.id} className="border-b border-paper-white/10 pb-12 last:border-0">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <p className="mb-2 text-xs uppercase tracking-wider text-paper-white/30">
                    {formatDate(post.created_at)}
                  </p>
                  <h2 className="mb-3 text-2xl font-bold text-paper-white transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="text-paper-white/50 leading-relaxed">
                    {excerpt(post.content)}
                  </p>
                  <span className="mt-4 inline-block text-sm text-accent">
                    Read more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
      <Footer />
    </main>
  );
}
