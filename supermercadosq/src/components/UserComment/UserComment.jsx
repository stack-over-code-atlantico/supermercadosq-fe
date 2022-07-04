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

  const [displayIconDenounce, setDisplayIconDenounce] = useState("inline");
  const [displayIconDelete, setDisplayIconDelete] = useState("inline");
  const [displayIconEdit, setDisplayIconEdit] = useState("inline");

  useEffect(() => {
    validIcon();
  }, [userIdOwner]);

  const validIcon = () => {
    if (userLevel().id_usuario == userIdOwner) {
      setDisplayIconDenounce("none");
      setDisplayIconEdit("inline");
      setDisplayIconDelete("inline");
      console.log("ok");
      return;
    } else if (userLevel().nivel === "ADMINISTRADOR") {
      console.log("ok2");
      setDisplayIconEdit("none");
      setDisplayIconDenounce("none");
      setDisplayIconDelete("inline");
    } else {
      console.log("ok3");
      setDisplayIconDenounce("inline");
      setDisplayIconEdit("none");
      setDisplayIconDelete("none");
    }
  };

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
