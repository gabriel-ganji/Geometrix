"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("token", email+password); // ou você pode armazenar outro dado de identificação
      router.push("/start_screen");
    } else {
      alert("E-mail ou senha incorretos!");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col h-1/2 max-sm:w-[90%] w-[500px] items-center justify-center p-6 gap-6 bg-second rounded-xl">
        <h1>Login</h1>

        <label className="flex flex-col w-full">
          E-mail
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b bg-transparent outline-none"
          />
        </label>

        <label className="flex flex-col w-full">
          Senha
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-b bg-transparent outline-none"
          />
        </label>

        <button
          className="w-full bg-main-blue text-white py-2 rounded disabled:opacity-50"
          onClick={handleLogin}
          disabled={!email || !password}
        >
          Entrar
        </button>

        <button
          className="w-full bg-main-orange text-white py-2 rounded"
          onClick={() => router.push("/signup")} // redireciona para a tela de cadastro
        >
          Cadastrar
        </button>

        {/* <small className="underline cursor-pointer">Esqueci minha senha</small> */}
      </div>
    </section>
  );
};

export default Login;
