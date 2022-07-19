import React, { useState } from 'react';
import {
  DialogBox,
  DialogSection,
  DialogText,
  DialogButton,
  DialogButtonDiv
} from './styles';

const ErrorDialog = ({}) => {

  return (
    <>
      <DialogSection>
        <DialogBox>
        <DialogText> Tem certeza que deseja sair? </DialogText>
        <DialogButtonDiv>
          <DialogButton
          onClick={logout}
          onMouseEnter={() => setCryIcon(true)}
          onMouseLeave={() => setCryIcon(false)}
          >
            Sim
          </DialogButton>
          <DialogButton
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

export default ErrorDialog;
