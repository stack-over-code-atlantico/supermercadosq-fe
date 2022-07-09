import React from "react";
import { UserAvatar, User, UserDetails, UserName, UserIcons } from "./styles";
import { FiAlertTriangle, FiEdit2, FiTrash } from "react-icons/fi";
import { userLevel } from "../../services/useAuth";
import { useState } from "react";
import { useEffect } from "react";

const UserComment = ({
  id_item,
  userOwner,
  dataPublicacao,
  userIdOwner,
  typeItem,
  onDeleteItem,
  onReportItem,
  onEditItem,
  messageComment
}) => {
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
      return;
    } else if (userLevel().nivel === "ADMINISTRADOR") {
      setDisplayIconEdit("none");
      setDisplayIconDenounce("none");
      setDisplayIconDelete("inline");
    } else {
      setDisplayIconDenounce("inline");
      setDisplayIconEdit("none");
      setDisplayIconDelete("none");
    }
  };

  function handleDelete() {
    onDeleteItem(id_item, typeItem);
  }

  function handleNewReport() {
    onReportItem(id_item, typeItem);
  }

  function handleEdit() {
    onEditItem(messageComment, id_item);
  }

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
          <FiAlertTriangle
            onClick={handleNewReport}
            id="denounce"
            display={displayIconDenounce}
          />
        </a>
        <a>
          <FiEdit2
            onClick={handleEdit}
            id="edit"
            display={displayIconEdit}
          />
        </a>
        <a>
          <FiTrash
            onClick={handleDelete}
            id="trash"
            display={displayIconDelete}
          />
        </a>
      </UserIcons>
    </User>
  );
};

export default UserComment;
