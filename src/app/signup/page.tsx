"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    // Armazenar os dados no localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password); // *Cuidado: nunca salve senha real assim em apps de produção*
    localStorage.setItem("xp", "0");

    alert("Cadastro realizado com sucesso!");
    router.push("/levels");
    
  };

  return (
    <section>
      <div className="flex flex-col h-max max-sm:w-[90%] w-[500px] items-center justify-center p-6 gap-6 bg-second rounded-xl">
        <h1>Cadastrar</h1>

        <label className="flex flex-col w-full">
          Nome
          <input
            type="text"
            className="border-b"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="flex flex-col w-full">
          E-mail
          <input
            type="email"
            className="border-b"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="flex flex-col w-full">
          Senha
          <input
            type="password"
            className="border-b"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label className="flex flex-col w-full">
          Confirme a Senha
          <input
            type="password"
            className="border-b"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <button onClick={handleSignUp} className="w-full bg-main-blue text-white ">
          Cadastrar
        </button>
        <button className="w-full bg-main-orange text-white " onClick={() => router.push("/login")}>Login</button>
      </div>
    </section>
  );
};

export default SignUp;
