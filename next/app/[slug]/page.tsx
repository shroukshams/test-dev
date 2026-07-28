import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostLayout from "@/components/PostLayout";

const allPosts: Post[] = [
  {
    id: "1",
    title: "Post 1",
    slug: "post-1",
    likes: 24,
    date: "10.11.2023 11:43",
    description: "This is post 1",
    user: {
        id: 1,
        name: "Umut Korkmaz",
        email: "info@umutkorkmaz.net"
    },
    body: "<h1>This is post 1</h1><p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam</p>",
    comments: [
      {
        id: "1",
        user: "user1",
        date: "10.11.2023 11:43",
        message: "This is comment 1",
      },
      {
        id: "2",
        user: "user2",
        date: "10.11.2023 11:43",
        message: "This is comment 2",
      },
    ],
  },
  {
    id: "2",
    title: "Post 2",
    slug: "post-2",
    likes: -4,
    date: "10.11.2023 17:22",
    description: "This is post 2",
    user: {
      id: 2,
      name: "Ufuk Korkmaz",
      email: "info@ufukkorkmaz.com"
    },
    body: "<h1>This is post 2</h1><p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam</p>",
    comments: [
      {
        id: "3",
        user: "user3",
        date: "10.11.2023 11:43",
        message: "This is comment 3",
      },
      {
        id: "4",
        user: "user4",
        date: "10.11.2023 11:43",
        message: "This is comment 4",
      },
    ],
  },
];

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, description, date, slug } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `${process.env.WEBSITE_HOST_URL}/posts/${slug}`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${process.env.WEBSITE_HOST_URL}/posts/${slug}`,
    },
  };
}

const PostList = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <PostLayout post={post} />;
};

export default PostList;
