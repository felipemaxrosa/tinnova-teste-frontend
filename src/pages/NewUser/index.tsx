import React, { useState, ChangeEvent, FormEvent } from "react";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import "./styles.css";

const NewUser = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [validated, setValidated] = useState(null);

  const history = useHistory();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      name,
      email,
      cpf,
      phone,
    };

    localStorage.setItem(`${cpf}`, JSON.stringify(data));

    alert("Usuário cadastrado com sucesso!");
    history.push("/");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "name") {
      setName(value);

      if (
        value.length > 2 &&
        cpf.length > 2 &&
        email.length > 2 &&
        phone.length > 2
      ) {
        setIsEnabled(true);
      } else {
        setIsEnabled(false);
      }
    } else if (name === "cpf") {
      setCpf(value);

      if (
        name.length > 2 &&
        value.length > 2 &&
        email.length > 2 &&
        phone.length > 2
      ) {
        setIsEnabled(true);
      } else {
        setIsEnabled(false);
      }
    } else if (name === "email") {
      setEmail(value);

      if (
        name.length > 2 &&
        cpf.length > 2 &&
        value.length > 2 &&
        phone.length > 2
      ) {
        setIsEnabled(true);
      } else {
        setIsEnabled(false);
      }
    } else if (name === "phone") {
      setPhone(value);

      if (
        name.length > 2 &&
        cpf.length > 2 &&
        email.length > 2 &&
        value.length > 2
      ) {
        setIsEnabled(true);
      } else {
        setIsEnabled(false);
      }
    }
  };

  return (
    <div id="page-new-user">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <header>
            <h2>Cadastro de Usuário</h2>
          </header>

          <div className="field">
            <label htmlFor="name">Nome do usuário</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="name"
              id="name"
              value={name}
            />
            <span
              style={styles.spanStyle}
              hidden={name.length < 3 && name.length > 0 ? false : true}
            >
              Campo deve conter 3 caracteres ou mais
            </span>
          </div>

          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              onChange={handleInputChange}
              type="email"
              name="email"
              id="email"
              value={email}
            />
            <span
              style={styles.spanStyle}
              hidden={email.length < 3 && email.length > 0 ? false : true}
            >
              Campo deve conter 3 caracteres ou mais
            </span>
          </div>

          <div className="field">
            <label htmlFor="cpf">CPF</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="cpf"
              id="cpf"
              value={cpf}
            />
            <span
              style={styles.spanStyle}
              hidden={cpf.length < 3 && cpf.length > 0 ? false : true}
            >
              Campo deve conter 3 caracteres ou mais
            </span>
          </div>

          <div className="field">
            <label htmlFor="phone">Telefone</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="phone"
              id="phone"
              value={phone}
            />
            <span
              style={styles.spanStyle}
              hidden={phone.length < 3 && phone.length > 0 ? false : true}
            >
              Campo deve conter 3 caracteres ou mais
            </span>
          </div>
        </fieldset>

        <button
          type="submit"
          disabled={!isEnabled}
          style={isEnabled == false ? styles.buttonStyle : {}}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

const styles = {
  buttonStyle: {
    color: "#dddcdc",
    backgroundColor: "#f6f6f6",
  },
  spanStyle: {
    color: "#eb4a46",
  },
};

export default NewUser;
