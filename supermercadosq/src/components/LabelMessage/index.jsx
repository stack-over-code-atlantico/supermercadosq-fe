import React from "react";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { LabelComment } from "./style";

const LabelMessage = (executeFunction) => {
  const[messageComment, setMessageComment] = useState('')

  function handleFunction(){
    executeFunction()
  }

  return (
    <LabelComment>
      <input
        type="text"
        placeholder="Adicionar Comentário"
        value={messageComment}
        onChange={(e) => setMessageComment(e.target.value)}
      />
      <button onClick={handleFunction}>
        <AiOutlineSend />
      </button>
    </LabelComment>
  );
};

export default LabelMessage;
