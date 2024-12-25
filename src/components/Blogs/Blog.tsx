import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { BlogType } from "./Blogs";
import { Card, CardContent, CardHeader } from "../ui/card";
import Tag from "../Tag";

export default function Blog({ post }: { post: BlogType }) {
  const date = new Date(post.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <Card className="overflow-hidden group p-2 bg-blue-400 bg-opacity-5 border-white/10 backdrop-blur-[2px] rounded-[10px]">
      <Link href={`/blogs/${post.id}`} className="flex flex-col h-full">
        <div className="relative h-48 overflow-hidden rounded-[10px]">
          <img
            src={post.image}
            alt={post.title}
            // fill
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col grow">
          <CardHeader className="p-2">
            <div className="w-full">
              <Tag title={post.category.name} />
            </div>
            <h3 className="text-lg font-semibold text-white/80 mb-2 line-clamp-2 group-hover:text-white transition-all duration-200">
              {post.title}
            </h3>
          </CardHeader>
          <CardContent className="px-3 py-1 grow flex items-center justify-between text-sm text-gray-100">
            <span>Naol.k</span>
            <span>{formattedDate}</span>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}
