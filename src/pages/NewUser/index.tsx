import React, { useState, ChangeEvent, FormEvent } from "react";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";

const NewUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
  });

  const history = useHistory();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newId = localStorage.length + 1;
    console.log(newId);
    localStorage.setItem(`${formData.cpf}`, JSON.stringify(formData));

    alert("Usuário cadastrado com sucesso!");
    history.push("/");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const newData = { ...formData, [name]: value };

    setFormData(newData);
  };

  return (
    <div id="page-new-user">
      <Header />

      <form onSubmit={handleSubmit}>
        <h2>Cadastro de Usuário</h2>

        <fieldset>
          <legend>
            <h3>Dados</h3>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome do usuário</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              onChange={handleInputChange}
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="field">
            <label htmlFor="cpf">CPF</label>
            <input
              onChange={handleInputChange}
              type="cpf"
              name="cpf"
              id="cpf"
            />
          </div>

          <div className="field">
            <label htmlFor="phone">Telefone</label>
            <input
              onChange={handleInputChange}
              type="phone"
              name="phone"
              id="phone"
            />
          </div>
        </fieldset>

        <button type="submit">Cadastrar usuário</button>
      </form>
    </div>
  );
};

export default NewUser;
