import React, { useState } from 'react';
import {
  DialogBox,
  DialogSection,
  DialogText,
  DialogButton,
  DialogButtonDiv
} from './styles';

const Dialog = ({logout, close, color}) => {
  const [happyIcon, setHappyIcon] = useState(false);
  const [cryIcon, setCryIcon] = useState(false);

  return (
    <>
      <DialogSection>
        <DialogBox>
        <>
          {happyIcon
            ? (<img src="https://img.icons8.com/color/68/000000/happy--v3.png"/>)
            : (cryIcon ? (<img src="https://img.icons8.com/color/68/000000/crying--v1.png"/>) : (<img src="https://img.icons8.com/color/68/000000/sad--v1.png"/>))
            }
        </>
        <DialogText> Tem certeza que deseja sair? </DialogText>
        <DialogButtonDiv>
          <DialogButton
          color={color}
          onClick={logout}
          onMouseEnter={() => setCryIcon(true)}
          onMouseLeave={() => setCryIcon(false)}
          >
            Sim
          </DialogButton>
          <DialogButton
            color={color}
            onMouseEnter={() => setHappyIcon(true)}
            onMouseLeave={() => setHappyIcon(false)}
            onClick={close}
          >
            Não
          </DialogButton>
        </DialogButtonDiv>
        </DialogBox>
      </DialogSection>
    </>
  );
};

export default Dialog;
