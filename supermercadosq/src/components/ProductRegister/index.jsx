import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import {
  Buttons,
  ImageUpload,
  RegisterContainer,
  RegisterForm,
} from "./styles";

const ProductRegister = () => {
  return (
    <RegisterContainer>
      <ImageUpload>
        <BsPlusCircle />
      </ImageUpload>
      <RegisterForm>
        <h2>Crie sua postagem sobre algum produto</h2>
        <div className="ProductInitial">
          <label>
            <span>Nome</span>
            <input type="text" placeholder="Nome" />
          </label>
          <label>
            <span>Tipos de alergia</span>
            <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
          </label>
        </div>
        <div className="ProductMiddle">
          <label>
            <span>Descrição</span>
            <input type="text" placeholder="Descrição" />
          </label>
        </div>
        <div className="ProductFinal">
          <label>
            <span>Ingredientes</span>
            <textarea />
          </label>
        </div>
        <Buttons>
          <button>Voltar</button>
          <button type="submit">Finalizar</button>
        </Buttons>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default ProductRegister;
