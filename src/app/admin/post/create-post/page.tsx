"use client";

import { useState } from "react";
import Link from "next/link";
import { User } from "@/models/Post";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    body: "",
    author_id: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para envio do formulário
    // Você pode fazer uma requisição para sua API ou backend aqui
  };

  const users: User[] = [];

  return (
    <div className="p-8">
      <div className="label mb-5 mt-8">
        <h6 className="text-xl font-semibold">ADICIONAR POSTAGEM</h6>
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
              placeholder="Escreva o conteúdo aqui..."
              value={formData.body}
              onChange={handleChange}
            ></textarea>
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
              Salvar
            </button>
            <Link href="/" passHref>
              <button type="button" className="btn btn-danger p-2 bg-red-500 text-white rounded-md">
                Descartar
              </button>
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary p-2 bg-blue-500 text-white rounded-md"
            >
              Salvar e Adicionar Outro
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
