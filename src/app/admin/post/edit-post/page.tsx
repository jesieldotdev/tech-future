"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface User {
  id: number;
  username: string;
}

interface Post {
  id: number;
  title: string;
  slug: string;
  body: string;
  author: {
    id: number;
  };
  image: string;
}

const EditPostPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const postId = Number(searchParams.get("id")); // Obtém o ID da query string.

  const [post, setPost] = useState<Post | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    body: "",
    author_id: 0,
    image: "",
  });

  // Funções para carregar dados
  const fetchPost = async (id: number) => {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`);
    if (response.ok) {
      const data = await response.json();
      setPost(data);
      setFormData({
        title: data.title,
        slug: data.slug,
        body: data.body,
        author_id: data.author.id,
        image: data.image,
      });
    }
  };

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:3000/api/users");
    if (response.ok) {
      const data = await response.json();
      setUsers(data);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchPost(postId);
      fetchUsers();
    }
  }, [postId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;

    await fetch(`http://localhost:3000/api/update-post/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    router.push(`/post/${post.id}`);
  };

  const handleDiscard = () => {
    if (post) {
      router.push(`/discard-changes/${post.id}`);
    }
  };

  const handleSaveAndAddAnother = async () => {
    if (!post) return;

    await fetch(`http://localhost:3000/api/update-post/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    router.push("/create-post");
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="m-8">
      <h6 className="text-xl font-semibold mb-5 mt-8">MODIFICAR POSTAGEM</h6>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            className="form-input block w-full border border-gray-300 rounded-md p-2 mb-3"
            name="title"
            placeholder="Título"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-input block w-full border border-gray-300 rounded-md p-2 mb-3"
            name="slug"
            placeholder="Slug"
            value={formData.slug}
            onChange={handleChange}
          />
          <textarea
            className="form-textarea block w-full border border-gray-300 rounded-md p-2 mb-3"
            name="body"
            rows={8}
            placeholder="Conteúdo do post"
            value={formData.body}
            onChange={handleChange}
          />
          <label htmlFor="author_id" className="form-label block mb-2">
            Autor
          </label>
          <select
            className="form-select block w-full border border-gray-300 rounded-md p-2 mb-3"
            name="author_id"
            value={formData.author_id}
            onChange={handleChange}
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </select>
          <label htmlFor="image" className="form-label block mb-2">
            Imagem
          </label>
          <input
            type="url"
            className="form-input block w-full border border-gray-300 rounded-md p-2 mb-3"
            name="image"
            placeholder="https://github.com/image.png"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <button
              type="submit"
              className="p-2 bg-green-500 text-white rounded-md mr-2"
            >
              Salvar Alterações
            </button>
            <button
              type="button"
              onClick={handleDiscard}
              className="p-2 bg-red-500 text-white rounded-md"
            >
              Descartar
            </button>
          </div>
          <button
            type="button"
            onClick={handleSaveAndAddAnother}
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            Salvar e Modificar Outro
          </button>
        </div>
      </form>
    </div>
  );
};

const SuspendedEditPostPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <EditPostPage />
  </Suspense>
);

export default SuspendedEditPostPage;
