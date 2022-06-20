
import React, { useContext } from 'react';
import { AboutSection, AboutText, AboutParagraph } from './styles';
import { LoadingScreen } from '../LoadingScreen/styles';


export function AboutComponent() {

  return (
    <>
      <AboutSection>
        <AboutText>
          Sobre
        </AboutText>
        <AboutParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit mollitia doloribus? Rerum optio molestiae
          itaque eveniet tempore provident ullam, reprehenderit aut qui, voluptatum vero eaque obcaecati ipsum mollitia eius.
        </AboutParagraph>
        <LoadingScreen size='150px' background='#76BC44' left='15%' top='80%' text='Missão' />
        <LoadingScreen size='150px' background='#3EBCD3' left='45%' top='80%' text='Visão'/>
        <LoadingScreen size='150px' background='#f66a69' left='75%' top='80%' text='Valores'/>
      </AboutSection>
    </>
  );
};
