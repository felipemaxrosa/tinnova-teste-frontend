import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Action from "../Action";
import api from "../../services/api";
import "./styles.css";

interface User {
  name: string;
  cpf: string;
  phone: string;
  email: string;
}

interface UsersProps {
  users: User[];
}

const Users = () => {
  const initialUsers = [
    {
      name: "Joao da Silva",
      cpf: "26899337649",
      phone: "4233335555",
      email: "joao@joaosilva.com.br",
    },
    {
      name: "Maria Antonieta",
      cpf: "65138896180",
      phone: "1255553333",
      email: "maria@mariaantonieta.com.br",
    },
    {
      name: "Luiz Souza",
      cpf: "32420496329",
      phone: "1144446666",
      email: "luiz@luizsouza.com.br",
    },
  ];
  const [users, setUsers] = useState<User[]>(initialUsers);

  useEffect(() => {
    const getUsers = async () => {
      if (localStorage.length === 0) {
        const usersApi = await api.get("users");
        let allUsers = usersApi.data;

        allUsers.map((user: User, index: number) => {
          localStorage.setItem(`${user.cpf}`, JSON.stringify(user));
        });

        setUsers(allUsers);
      } else {
        const usersLocal = allStorage();
        setUsers(usersLocal);
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    setUsersAndFillTable();
  }, [localStorage.length]);

  const allStorage = () => {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i]) || "{}"));
    }

    return values;
  };

  const setUsersAndFillTable = () => {
    const allUsers = allStorage();
    setUsers(allUsers);
  };

  const handleClick = () => {
    alert("Voce clicou");
  };

  return (
    <div>
      <table className="users-table">
        <thead>
          <tr>
            <th style={{ width: "40%" }}>Nome</th>
            <th style={{ width: "15%" }}>CPF</th>
            <th style={{ width: "15%" }}>Telefone</th>
            <th style={{ width: "15%" }}>E-mail</th>
            <th style={{ width: "15%" }}>Ações</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user: User, index: number) => {
            const { name, cpf, email, phone } = user;
            return (
              <tr key={index + 1}>
                <td>{name}</td>
                <td>{cpf}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <th>
                  <Action
                    type="delete"
                    cpf={cpf}
                    onUpdate={setUsersAndFillTable}
                  />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flexEnd">
        <Link id="btn" to="/newuser" style={{ width: "300px" }}>
          Novo Usuário
        </Link>
      </div>
    </div>
  );
};

export default Users;
