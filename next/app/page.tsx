"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [allPosts, setAllPosts] = useState<Array<Post>>([
    {
      id: "1",
      title: "Post 1",
      slug: "post-1",
      description: "This is post 1",
    },
    {
      id: "2",
      title: "Post 2",
      slug: "post-2",
      description: "This is post 2",
    },
  ]);

  return (
    <div className="prose dark:prose-invert">
      <h2>Blog</h2>
      <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        {allPosts.map((post) => (
          <article key={post.id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </div>
  );
}
