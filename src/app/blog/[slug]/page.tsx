import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

export const revalidate = 300;

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

async function getPost(slug: string): Promise<Post | null> {
  const res = await fetch(`${process.env.DAYBY_API_URL}/posts/${slug}`, {
    headers: {
      Authorization: `Bearer ${process.env.DAYBY_API_KEY}`,
    },
    next: { revalidate: 300 },
  });

  if (!res.ok) return null;

  const data = await res.json();
  const post = data.post as Post;

  if (post.visibility !== "publik") return null;

  return post;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found | Spaceman Tech" };

  return {
    title: `${post.title} | Spaceman Tech`,
    description: post.content.replace(/[#*`>\-_]/g, "").slice(0, 160),
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderContent(content: string) {
  // Basic markdown-like rendering
  const lines = content.split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("# ")) return <h1 key={i} className="mt-8 mb-4 text-3xl font-black text-paper-white">{line.slice(2)}</h1>;
    if (line.startsWith("## ")) return <h2 key={i} className="mt-8 mb-3 text-2xl font-bold text-paper-white">{line.slice(3)}</h2>;
    if (line.startsWith("### ")) return <h3 key={i} className="mt-6 mb-2 text-xl font-bold text-paper-white">{line.slice(4)}</h3>;
    if (line.startsWith("- ") || line.startsWith("* ")) return <li key={i} className="ml-4 list-disc text-paper-white/70">{line.slice(2)}</li>;
    if (line.trim() === "") return <div key={i} className="h-4" />;
    return <p key={i} className="text-paper-white/70 leading-relaxed">{line}</p>;
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-dark text-paper-white">
      <Navbar />
      <article className="mx-auto max-w-3xl px-6 py-32">
        <Link
          href="/blog"
          className="mb-12 inline-block text-sm text-paper-white/40 transition-colors hover:text-paper-white/80"
        >
          ← Back to Blog
        </Link>

        <p className="mb-3 text-xs uppercase tracking-wider text-paper-white/30">
          {formatDate(post.created_at)}
        </p>
        <h1 className="mb-12 text-4xl font-black tracking-tight">{post.title}</h1>

        <div className="space-y-1">
          {renderContent(post.content)}
        </div>

        <div className="mt-16 border-t border-paper-white/10 pt-8">
          <p className="text-sm text-paper-white/30">
            Originally published on{" "}
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              dayby.dev
            </a>
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
