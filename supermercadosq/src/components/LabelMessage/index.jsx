import React from "react";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { LabelComment } from "./style";

const LabelMessage = ({executeFunction, mensagem, id_item, typeHandleCreate}) => {
  const[messageComment, setMessageComment] = useState('')

  function handleCreateComment(){
    executeFunction(mensagem=messageComment,id_item)
    setMessageComment("");
    console.log(mensagem)
  }
  function handleEditComment(){
    
    console.log('mensagem')
  }

  return (
    <LabelComment>
      <input
        type="text"
        placeholder="Adicionar Comentário"
        value={messageComment}
        onChange={(e) => setMessageComment(e.target.value)}
      />
      <button onClick={typeHandleCreate?handleCreateComment:handleEditComment}>
        <AiOutlineSend />
      </button>
    </LabelComment>
  );
};
export default LabelMessage;
