"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ModifyPost = ({ post, users }) => {
  const [formData, setFormData] = useState({
    title: post.title,
    slug: post.slug,
    body: post.body,
    author_id: post.author.id,
    image: post.image,
  });

  const router = useRouter();

  useEffect(() => {
    setFormData({
      title: post.title,
      slug: post.slug,
      body: post.body,
      author_id: post.author.id,
      image: post.image,
    });
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário via API (POST ou PUT)
    await fetch(`/api/update-post/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // Após salvar, redireciona ou atualiza a página
    router.push(`/post/${post.id}`);
  };

  const handleDiscard = () => {
    router.push(`/discard-changes/${post.id}`);
  };

  const handleSaveAndAddAnother = async () => {
    await fetch(`/api/update-post/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    router.push("/create-post"); // Redireciona para a página de criação de novo post
  };

  return (
    <div className="m-8">
      <div className="label mb-5 mt-8">
        <h6 className="text-xl font-semibold">MODIFICAR POSTAGEM</h6>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div id="criar-post">
          <div className="mb-3">
            <input
              type="text"
              className="form-input block w-full border border-gray-300 rounded-md p-2"
              id="title"
              name="title"
              placeholder="Título"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-input block w-full border border-gray-300 rounded-md p-2"
              id="slug"
              name="slug"
              placeholder="Slug"
              value={formData.slug}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-textarea block w-full border border-gray-300 rounded-md p-2"
              id="body"
              name="body"
              rows={8}
              value={formData.body}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author_id" className="form-label block mb-2">
              Autor
            </label>
            <select
              className="form-select block w-full border border-gray-300 rounded-md p-2"
              id="author_id"
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
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label block mb-2">
              Imagem
            </label>
            <input
              type="url"
              className="form-input block w-full border border-gray-300 rounded-md p-2"
              id="image"
              name="image"
              placeholder="https://github.com/image.png"
              value={formData.image}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <button
              type="submit"
              className="btn btn-success p-2 bg-green-500 text-white rounded-md"
            >
              Salvar Alterações
            </button>
            <button
              type="button"
              onClick={handleDiscard}
              className="btn btn-danger p-2 bg-red-500 text-white rounded-md"
            >
              Descartar
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleSaveAndAddAnother}
              className="btn btn-primary p-2 bg-blue-500 text-white rounded-md"
            >
              Salvar e Modificar Outro
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModifyPost;
