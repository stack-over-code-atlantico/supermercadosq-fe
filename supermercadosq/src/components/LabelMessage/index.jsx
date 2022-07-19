import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { LabelComment } from "./style";
import useAuth from "../../services/useAuth";

const LabelMessage = ({
  executeFunction,
  mensagem,
  id_item,
  typeHandleCreate,
  color,
}) => {
  const [messageComment, setMessageComment] = useState("");
  const {userLevel} = useAuth();
  function handleCreateComment() {
    executeFunction((mensagem = messageComment), id_item);
    setMessageComment("");
  }

  function handleEditComment() {
    executeFunction((mensagem = messageComment), id_item);
    setMessageComment(mensagem);
  }

  return (
    <>
      {userLevel() ? (
        <LabelComment color={color}>
          <input
            type="text"
            placeholder="Adicionar Comentário"
            value={messageComment}
            onChange={(e) => setMessageComment(e.target.value)}
            onKeyPress={(e) => {
              if (messageComment.length > 3 && e.key === "Enter") {
                return typeHandleCreate
                  ? handleCreateComment()
                  : handleEditComment();
              }
            }}
          />
          <button
            onClick={typeHandleCreate ? handleCreateComment : handleEditComment}
          >
            <AiOutlineSend />
          </button>
        </LabelComment>
      ) : (
        <></>
      )}
    </>
  );
};
export default LabelMessage;
