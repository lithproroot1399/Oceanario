// biome-ignore assist/source/organizeImports: <explanation>
import { signIn } from "@/auth"
import { FaGithub, FaGoogle } from "react-icons/fa"

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4">
      {/* Botões OAuth */}
      <form
        action={async () => {
          "use server"
          await signIn("google")
        }}
      >
        {/** biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button className="flex items-center gap-2 border p-2 rounded">
          <FaGoogle /> Entrar com Google
        </button>
      </form>

      <form
        action={async () => {
          "use server"
          await signIn("github")
        }}
      >
        {/** biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button className="flex items-center gap-2 border p-2 rounded">
          <FaGithub /> Entrar com GitHub
        </button>
      </form>

      <hr />

      {/* Formulário de Registo/Login Manual (Simplificado) */}
      <form
        action={async (formData) => {
          "use server"
          await signIn("credentials", formData)
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Entrar
        </button>
      </form>
    </div>
  )
}
