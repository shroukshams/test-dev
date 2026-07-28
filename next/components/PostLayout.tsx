"use client";
import { notFound } from "next/navigation";
import authStore from "@/store/authStore";

const PostLayout = ({ post }: { post: Post }) => {
  const loginInfo = authStore((state) => state.loginInfo);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <time className="my-4 block text-sm text-zinc-400" dateTime={post.date}>
        {post.date}
      </time>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{
          __html: post.body ?? "Yazı bulunamadı",
        }}
      />
      <div>
        likes {post.likes}
        <button>like</button>/ <button>dislike</button>
      </div>
      {
        //comments here
        post.comments ? (
          post.comments.map((comment) => (
            <div className="my-4" key={comment.id}>
              <h3 className="text-lg">{comment.user}</h3>
              <time
                className="block text-sm text-zinc-400"
                dateTime={comment.date}
              >
                {comment.date}
              </time>
              <p>{comment.message}</p>
            </div>
          ))
        ) : (
          <div>Yorum bulunamadı</div>
        )
      }
      {loginInfo ? (
        <div>
          <h2>Yorum yap</h2>
          <form className="flex flex-col">
            <textarea placeholder="Yorum" className={"border border-black rounded-md p-2"} />
            <div>
              <button className={"bg-blue-500 text-white px-4 py-2 rounded-md mt-2"}>Yorumu Gönder</button>
            </div>
          </form>
        </div>
      ) : (
        <div>Yorum yapmak için giriş yapmalısınız</div>
      )}
    </div>
  );
};

export default PostLayout;
