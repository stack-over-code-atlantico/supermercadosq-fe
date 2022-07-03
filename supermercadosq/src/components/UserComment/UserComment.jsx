import React from "react";
import { UserAvatar, User, UserDetails, UserName, UserIcons } from "./styles";
import { FiAlertTriangle, FiEdit2, FiTrash } from "react-icons/fi";
import { userLevel } from "../../services/useAuth";
import { useState } from "react";
import { useEffect } from "react";

const UserComment = ({ userOwner, dataPublicacao, userIdOwner }) => {
  if (dataPublicacao) {
    dataPublicacao = dataPublicacao.slice(0, 10).split("-").reverse().join("/");
  }
  const [usuario, setUsuario] = useState({});
  const [usuarioId, setUsuarioId] = useState("");
  const [usuarioNivel, setUsuarioNivel] = useState("");
  const [displayIconDenounce, setDisplayIconDenounce] = useState("inline");
  const [displayIconDelete, setDisplayIconDelete] = useState("inline");
  const [displayIconEdit, setDisplayIconEdit] = useState("inline");

  useEffect(() => {
    setUsuario(userLevel);
    setUsuarioId(usuario.id_usuario);
    setUsuarioNivel(usuario.nivel);
  }, []);

  const validIcon = () => {
    if (usuario.id_usuario == userIdOwner || usuarioId == userIdOwner) {
      setDisplayIconDenounce("none");
      console.log("ok 1");
    } else if (
      usuario.nivel === "ADMINISTRADOR" ||
      usuarioNivel == "ADMINISTRADOR"
    ) {
      setDisplayIconEdit("none");
      setDisplayIconDenounce("none");
      console.log("ok 2");
    } else if (
      usuario.nivel === "CLIENTE" ||
      (usuario.nivel === "FORNECEDOR" && usuario.id_usuario != userIdOwner)
    ) {
      setDisplayIconEdit("none");
      setDisplayIconDelete("none");
      console.log("ok 3");
    }
  };
  useEffect(() => {
    validIcon();
  }, [usuarioId, usuarioNivel]);

  return (
    <User>
      <UserDetails>
        <UserAvatar></UserAvatar>
        <UserName>
          <h1>{userOwner}</h1>
          <h2>{dataPublicacao}</h2>
        </UserName>
      </UserDetails>
      <UserIcons>
        <a>
          <FiAlertTriangle id="denounce" display={displayIconDenounce} />
        </a>
        <a>
          <FiEdit2 id="edit" display={displayIconEdit} />
        </a>
        <a>
          <FiTrash id="trash" display={displayIconDelete} />
        </a>
      </UserIcons>
    </User>
  );
};

export default UserComment;
