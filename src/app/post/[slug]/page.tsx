"use client";

import { Container } from "./style";
import { posts } from "@/mock"; 
import { useParams } from 'next/navigation';
import React, { useEffect } from "react";
import 'prismjs/themes/prism.css'; 


interface Post {
  title: string;
  body: string;
  category: string;
  author?: string; 
  image?: string; 
  slug: string; 
}

interface PostPageProps {
  params: {
    slug: string;
  };
}


const fetchPostBySlug = (slug: string): Post => {
  
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


const PostPage: React.FC<PostPageProps> = ({ params }) => {
  
  const { slug } = React.use(params);

  
  const post = fetchPostBySlug(slug);

  useEffect(() => {
    
    import("prismjs").then((Prism) => {
      Prism.highlightAll(); 
    });
  }, [post]);

  return (
    <Container>
      <div className="post-container mx-auto mt-6 mb-4">
        {post.image && (
          <img id="post-img" className="rounded-lg w-full max-w-2xl mx-auto" src={post.image} alt={post.title} />
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
