"use client";

import { Container } from "./style";
import { posts } from "@/mock";
import React, { useEffect, useState } from "react";
import 'prismjs/themes/prism.css';
import Image from "next/image";
interface Post {
  title: string;
  body: string;
  category?: string;
  author?: string;
  image?: string;
  slug: string;
}

const fetchPostBySlug = (slug: string) => {
  const post = posts.find(post => post.slug === slug);
  if (post) {
    return post;
  }

  return {
    title: "Post não encontrado",
    body: "O post que você está procurando não foi encontrado.",
    category: "Desconhecido",
    slug: "",
  };
};

// Defina os tipos como 'any' para forçar o Next.js a ignorar o tipo esperado
interface PostPageProps {
  params: any; // Aqui você pode usar 'any' para ignorar o erro de tipagem
}

const PostPage: React.FC<PostPageProps> = ({ params }) => {
  const { slug } = params;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchedPost = fetchPostBySlug(slug);
    setPost(fetchedPost);
  }, [slug]);

  useEffect(() => {
    import("prismjs").then((Prism) => {
      Prism.highlightAll();
    });
  }, [post]);

  if (!post) {
    return <div>Loading...</div>; // Exibe um estado de carregamento
  }

  return (
    <Container>
      <div className="post-container mx-auto mt-6 mb-4">
        {post.image && (
          <Image
            id="post-img"
            className="rounded-lg w-full max-w-2xl mx-auto"
            src={post.image}
            alt={post.title}
            width={800}  
            height={400}
          />
        )}
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-600 mt-1">Categoria: {post.category}</p>

        <div
          className="mt-4 prose prose-lg"
          dangerouslySetInnerHTML={{
            __html: post.body.replace(
              /<pre><code>/g,
              `<pre class="bg-gray-800 p-4 rounded-lg text-white"><code class="language-javascript">`
            )
          }}
        />
      </div>
    </Container>
  );
};

export default PostPage;
