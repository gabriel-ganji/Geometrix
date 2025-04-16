const SignUp = () => {
  return (
    <section>
      <div className="flex flex-col h-max max-sm:w-[90%] w-[500px] items-center justify-center p-6 gap-6 bg-second rounded-xl">
        <h1>Cadastrar</h1>
        <label htmlFor="user" className="flex flex-col w-full">
          Nome
          <input name="user" type="text" className="border-b" />
        </label>
        <label htmlFor="user" className="flex flex-col w-full">
          E-mail
          <input name="user" type="email" className="border-b" />
        </label>
        <label htmlFor="user" className="flex flex-col w-full">
          Senha
          <input name="user" type="password" className="border-b" />
        </label>
        <label htmlFor="user" className="flex flex-col w-full">
          Confirme a Senha
          <input name="user" type="password" className="border-b" />
        </label>
        <button className="w-full bg-main-blue">Cadastrar</button>
        <button className="w-full bg-main-orange">Login</button>
      </div>
    </section>
  );
};

export default SignUp;
