'use client'

import Image from "next/image";
import Link from "next/link";
import { posts } from "@/mock";
import { HomeContainer } from "@/styles/style";
import "prismjs";
import "prismjs/themes/prism.css"; // Escolha um tema
import { Typography } from "@mui/material";

const CodeBlock = ({ children }) => (
  <pre className="language-js">
    <code>{children}</code>
  </pre>
);

type Post = {
  slug: string;
  image: string;
  title: string;
  created_at: string; // ISO 8601 format
};

type Props = {
  posts: Post[];
};

export default function Home() {

  return (
    <HomeContainer className="m-4 mt-24">
 

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:m-4">
        {posts.map((post) => (
          <div className="card border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl flex flex-col p-4" key={post.slug}>
            <Link legacyBehavior href={`/post/${post.slug}`}>
              <a>
                <img
                  src={post.image}
                  className="w-full h-48 object-cover rounded-lg"
                  alt={post.title}
                  width={400}
                  height={200}
                
                />
                <div className="flex-1 mt-4">
                  <p className="card-title text-xl font-black ">{post.title}</p>
                </div>
              </a>
            </Link>
            <small className="text-gray-500 text-sm">
              {new Date(post.created_at).toLocaleString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link legacyBehavior href="/page/2">
          <a className="btn btn-primary px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
            Próxima Página
          </a>
        </Link>
      </div>

    </HomeContainer>
  );
}

