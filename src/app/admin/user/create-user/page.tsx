"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateUser() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: "false",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push("/admin/user");
      } else {
        alert("Erro ao criar usuário.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  };

  return (
    <div className="container mx-auto my-6">
      <h1 className="text-2xl font-semibold mb-4">Criar Usuário</h1>
      <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-md">
        <div className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Nome de Usuário"
            value={formData.username}
            onChange={handleChange}
            className="form-control border rounded-md p-2 w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control border rounded-md p-2 w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            className="form-control border rounded-md p-2 w-full"
            required
          />
          <select
            name="isAdmin"
            value={formData.isAdmin}
            onChange={handleChange}
            className="form-select border rounded-md p-2 w-full"
          >
            <option value="false">Não</option>
            <option value="true">Sim</option>
          </select>
        </div>
        <div className="mt-4 flex space-x-2">
          <button
            type="submit"
            className="btn bg-green-500 text-white rounded-md px-4 py-2"
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/user")}
            className="btn bg-red-500 text-white rounded-md px-4 py-2"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
