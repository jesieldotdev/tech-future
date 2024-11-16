import Link from 'next/link';

const AdminPanel = () => {
  const username = "Admin"; // Substitua com o nome do usuário em sua aplicação
  const logoutUrl = "/logout"; // URL para logout

  return (
    <div>
      <header className="pt-5" id="painel-header">
        <h4 className="text-center text-2xl font-bold">Painel de Administração</h4>
        <div className="text-center mt-2">
          <span>
            Bem-vindo(a), {username}{" "}
            <Link href="/" className="text-blue-500 hover:underline">
              VER SITE
            </Link>{" "}
            /{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              ALTERAR SENHA
            </Link>{" "}
            /{" "}
            <Link href={logoutUrl} className="text-blue-500 hover:underline">
              ENCERRAR SEÇÃO
            </Link>
          </span>
        </div>
      </header>

      <main id="painel-main" className="max-w-4xl mx-auto mt-8 px-4">
        <h5 className="text-xl font-semibold mb-4">Administração do Blog</h5>

        <div className="mb-6">
          <div className="label">
            <h6 className="text-lg font-semibold">AUTORIZAÇÃO E AUTENTICAÇÃO</h6>
          </div>
          <div className="dt bg-gray-100 rounded-lg p-4">
            <div className="dt-row flex justify-between items-center mb-4">
              <Link href="#" className="type text-blue-600 hover:underline">
                Grupos
              </Link>
              <div className="action">
                <Link href="#" className="text-blue-500 hover:underline">
                  +Adicionar
                </Link>
                <Link href="#" className="text-blue-500 hover:underline">
                  Modificar
                </Link>
              </div>
            </div>
            <hr />
            <div className="dt-row flex justify-between items-center mb-4">
              <Link href="/admin/user/users-list" className="type text-blue-600 hover:underline">
                Usuários
              </Link>
              <div className="action">
                <Link href="/admin/user/create-user" className="text-blue-500 hover:underline">
                  +Adicionar
                </Link>
                <Link href="#" className="text-blue-500 hover:underline">
                  Modificar
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="label">
            <h6 className="text-lg font-semibold">Blog</h6>
          </div>
          <div className="dt bg-gray-100 rounded-lg p-4">
            <div className="dt-row flex justify-between items-center mb-4">
              <Link href="#" className="type text-blue-600 hover:underline">
                Categorias
              </Link>
              <div className="action">
                <Link href="#" className="text-blue-500 hover:underline">
                  +Adicionar
                </Link>
                <Link href="#" className="text-blue-500 hover:underline">
                  Modificar
                </Link>
              </div>
            </div>
            <hr />
            <div className="dt-row flex justify-between items-center mb-4">
              <Link href="/admin/post/post-list" className="type text-blue-600 hover:underline">
                Posts
              </Link>
              <div className="action">
                <Link href="/admin/post/create-post" className="text-blue-500 hover:underline">
                  +Adicionar
                </Link>
                <Link href="#" className="text-blue-500 hover:underline">
                  Modificar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
