import Layout from "@components/layout";
import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";
import { NextPage } from "next";

interface Post {
  title: string;
  date: string;
  category: string;
}

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout title="Blog" seoTitle="Blog">
      <h1 className="font-semibold text-center text-lg mt-5 mb-10">
        Latest Posts: dd
      </h1>
      <ul>
        {posts.map((post, index) => (
          <div key={index} className="mb-5">
            <span className="text-lg text-red-500">{post.title}</span>
            <div>
              <span>
                {post.date} / {post.category}
              </span>
            </div>
          </div>
        ))}
      </ul>
    </Layout>
  );
};

export async function getStaticProps() {
  const blogPost = readdirSync("./posts").map((file) => {
    const content = readFileSync(`./post/${file}`, "utf-8");
    return matter(content).data;
  });
  return {
    props: blogPost,
  };
}

export default Blog;
