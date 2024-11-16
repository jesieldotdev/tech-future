// pages/users/index.tsx
"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          alert("Erro ao carregar usuários.");
        }
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        alert("Erro ao processar a solicitação.");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto my-6 mt-8">
      <h1 className="text-2xl font-semibold mb-4">Lista de Usuários</h1>
      <div className="mb-4">
        <Link legacyBehavior href="/users/create">
          <a className="btn btn-info bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Novo Usuário
          </a>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Nome</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left hidden md:table-cell">Senha</th>
              <th className="py-3 px-6 text-left hidden md:table-cell">Admin</th>
              <th className="py-3 px-6 text-left">Ações</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-gray-100 flex flex-col md:table-row"
              >
                <td className="py-3 px-6">{user.id}</td>
                <td className="py-3 px-6">{user.username}</td>
                <td className="py-3 px-6">{user.email}</td>
                <td className="py-3 px-6 hidden md:table-cell">{user.password}</td>
                <td className="py-3 px-6 hidden md:table-cell">
                  {user.isAdmin ? "Sim" : "Não"}
                </td>
                <td className="py-3 px-6 flex md:table-cell">
                  <Link legacyBehavior href={`/users/edit/${user.id}`}>
                    <a className="btn btn-warning bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 mr-2">
                      Editar
                    </a>
                  </Link>
                  <button
                    onClick={async () => {
                      const confirmDelete = confirm(
                        `Tem certeza que deseja excluir o usuário ${user.username}?`
                      );
                      if (confirmDelete) {
                        try {
                          const response = await fetch(`/api/users/${user.id}`, {
                            method: "DELETE",
                          });
                          if (response.ok) {
                            setUsers(users.filter((u) => u.id !== user.id));
                            alert("Usuário excluído com sucesso!");
                          } else {
                            alert("Erro ao excluir usuário.");
                          }
                        } catch (error) {
                          console.error("Erro ao excluir usuário:", error);
                          alert("Erro ao processar a solicitação.");
                        }
                      }
                    }}
                    className="btn bg-red-500 text-white rounded-md px-2 py-1"
                  >
                    Descartar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
