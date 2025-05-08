"use client";

import { useRouter } from "next/navigation";

const Login = () => {

  const router = useRouter();
  
  const handleLogin = () => {

    localStorage.setItem("token", "123");
    router.push("/start_screen");
  
  }

  return (
    <section>
      <div className="flex flex-col h-1/2 max-sm:w-[90%] w-[500px] items-center justify-center p-6 gap-6 bg-second rounded-xl">
        <h1>Login</h1>
        <label htmlFor="user" className="flex flex-col w-full">
          E-mail
          <input name="user" type="email" className="border-b" />
        </label>
        <label htmlFor="user" className="flex flex-col w-full">
          Senha
          <input name="user" type="password" className="border-b" />
        </label>
        <button className="w-full bg-main-blue"
          onClick={handleLogin}
        >
          Entrar
        </button>
        <button className="w-full bg-main-orange">Cadastrar</button>
        <small className="underline">Esqueci minha senha</small>
      </div>
    </section>
  );
};

export default Login;
