"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { posts } from "@/mock";

const ListPosts = () => {

  const router = useRouter();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await fetch("/api/posts");
//       const data = await response.json();
//       setPosts(data);
//     };

//     fetchPosts();
//   }, []);

  const handleDelete = async (postId) => {
    // const confirmation = confirm("Tem certeza que deseja excluir?");
    // if (confirmation) {
    //   await fetch(`/api/posts/${postId}`, {
    //     method: "DELETE",
    //   });
    //   router.refresh(); // Atualiza a página após a exclusão
    // }
  };

  return (
    <div className="container mx-auto my-6 mt-24">
      <h1 className="text-2xl font-semibold mb-4">Listar Postagens</h1>
      <div className="mb-4">
        <Link
          href="/admin/create-post"
          className="btn btn-info bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Novo Post
        </Link>
      </div>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Título</th>
            <th className="py-3 px-6 text-left">Autor</th>
            <th className="py-3 px-6 text-left">Ações</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {posts.map((post) => (
            <tr className="border-b border-gray-200 hover:bg-gray-100" key={post.id}>
              <td className="py-3 px-6">{post.id}</td>
              <td className="py-3 px-6">
                <Link href={`/post/${post.slug}`} className="text-blue-500 hover:underline">
                  {post.title}
                </Link>
              </td>
              <td className="py-3 px-6">{post.author.username}</td>
              <td className="py-3 px-6">
                <Link
                  href={`/edit-post/${post.id}`}
                  className="btn btn-warning bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="btn btn-danger bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Descartar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPosts;
