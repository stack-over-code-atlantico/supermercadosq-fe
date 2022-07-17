import React, { useState } from "react";
import { Image, FieldPassword } from "./styles";
import Imagevisible from "../../assets/icons/visible.png";
import ImagenotVisible from "../../assets/icons/notVisible.png";

const InputPassword = ({ setValue, value }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <FieldPassword>
      <input
        type={isVisible ? "text" : "password"}
        name="password"
        id="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            return document.getElementById("password").focus();
          }
        }}
      />

      <Image
        src={isVisible ? ImagenotVisible : Imagevisible}
        onClick={handleVisible}
      />
    </FieldPassword>
  );
};

export default InputPassword;
