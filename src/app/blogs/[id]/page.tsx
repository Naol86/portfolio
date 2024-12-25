import { BlogType } from "@/components/Blogs/Blogs";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const response = await fetch(`${process.env.NEXT_URL}/api/blogs/${id}`);
  const data = await response.json();
  const blog: BlogType = data.data;
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <p>{blog.content}</p>
    </div>
  );
}
