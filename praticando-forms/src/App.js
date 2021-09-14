import "./App.css";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Card from "./components/Card";

function App() {
  const [cardHandler, setCardHandler] = useState(false);
  const [cardObject, setCardObject] = useState({});

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-Mail obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password"), null], "Senhas diferentes!"),
    adress: yup.string().required("Endereço obrigatório"),
    cellphone: yup.string().required("Telefone obrigatório"),
    age: yup
      .string()
      .required("Idade obrigatória")
      .matches("^[0-9]+$", "Inserir apenas números"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(data) {
    setCardHandler(true);
    setCardObject(data);
    console.log(data);
  }

  return (
    <div className="App" onSubmit={handleSubmit(onSubmitFunction)}>
      <h1>Formulário</h1>
      <form className="form">
        <input placeholder="nome" {...register("name")} />
        {errors.name?.message}
        <input placeholder="email" {...register("email")} />
        {errors.email?.message}
        <div className="formPassword">
          <div className="password">
            <input placeholder="senha" {...register("password")} />
            {errors.password?.message}
          </div>
          <div className="password">
            <input
              placeholder="confirmar senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message}
          </div>
        </div>
        <input placeholder="endereço" {...register("adress")} />
        {errors.adress?.message}
        <input placeholder="telefone" {...register("cellphone")} />
        {errors.cellphone?.message}
        <input placeholder="idade" {...register("age")} />
        {errors.age?.message}
        <button type="submit">Criar Perfil</button>
      </form>
      {cardHandler && <Card {...cardObject} />}
    </div>
  );
}

export default App;
