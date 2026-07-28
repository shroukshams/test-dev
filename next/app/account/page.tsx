"use client";
import Link from "next/link";
import { useState } from "react";

export default function Account() {
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
      <div className="flex justify-between">
        <h2>Posts</h2>
        <div className={"flex items-center justify-center gap-4"}>
          <Link
            href="/account/post"
            className="text-blue-600 dark:text-blue-400"
          >
            New Post
          </Link>
          <Link
            href={"/account/profile"}
            className="text-blue-600 dark:text-blue-400"
          >
            Profile
          </Link>
        </div>
      </div>
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
