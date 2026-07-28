"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function EditPost() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    if (id) {
      fetch(`/api/post/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  return (
    <div>
      <h1>Edit Post</h1>
      <form>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" defaultValue={post?.title} />
        <label htmlFor="description">Description</label>
        <input id="description" type="text" defaultValue={post?.description} />
        <button className={"bg-blue-500 text-white px-4 py-2 rounded-md mt-2"}>Yazı Düzenle</button>
      </form>
    </div>
  );
}

export default EditPost;
