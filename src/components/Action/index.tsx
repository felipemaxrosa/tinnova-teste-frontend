import React, { MouseEvent } from "react";
import { FiDelete } from "react-icons/fi";
import "./styles.css";

interface ActionProps {
  type: string;
  cpf: string;
  onUpdate: any;
}

const Action: React.SFC<ActionProps> = ({ type, cpf, onUpdate }) => {
  const handleDeleteClick = () => {
    localStorage.removeItem(cpf);
    onUpdate();
  };
  const handleEditClick = () => {};

  return (
    <a className="button-delete" onClick={handleDeleteClick}>
      <FiDelete size="30px" />
    </a>
  );
};

export default Action;
