import Blog from "./Blog";

export interface BlogType {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  categoryId: string;
  category: {
    id: string;
    name: string;
  };
  createdAt: string;
}

export default async function BlogSection() {
  const res = await fetch("http://localhost:3000/api/blogs");
  const { data } = await res.json();
  const blogPosts: BlogType[] = data;
  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 text-teal-400">
            Welcome to My Blog
          </h2>
          <p className="text-gray-600">
            Dive into my thoughts, ideas, and experiences. Explore topics that
            inspire, educate, and spark curiosity!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Blog key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
