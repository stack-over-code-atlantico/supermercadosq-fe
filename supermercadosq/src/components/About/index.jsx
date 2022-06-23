import React, { useContext, useState } from 'react';
import { AboutSection, AboutText, AboutParagraph, ContainerBody, CardBody } from './styles';
import { LoadingScreen } from '../LoadingScreen/styles';
import { BsGithub } from 'react-icons/bs';
import { Img, AboutDiv, AboutContainer, Button } from './styles';
import  AboutImg  from "../../assets/images/imagemsobre.png";


export function AboutComponent() {
  const [isSubscribed, setIsSubscribed] = useState(true);
  const handleChange = event => {
    setIsSubscribed(event.target.checked);
  }

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
        <LoadingScreen size='140px' background='#F59E1D' left='5%' top='80%' text='União' />
        <LoadingScreen size='140px' background='#76BC44' left='25%' top='80%' text='Missão' />
        <LoadingScreen size='140px' background='#3EBCD3' left='45%' top='80%' text='Visão'/>
        <LoadingScreen size='140px' background='#f66a69' left='65%' top='80%' text='Valores'/>
        <LoadingScreen size='140px' background='#9cdbe7' left='85%' top='80%' text='Foco'/>
      </AboutSection>

      <ContainerBody>
        <input type="radio"
          id="subscribe"
          name="subscribe"
          onChange={handleChange}
          checked={isSubscribed}
          className="position"
        />
        <input type="radio"
          id="subscribe"
          name="subscribe"
          onChange={handleChange}
          checked={isSubscribed}
          className="position"
        />
        <input type="radio"
          id="subscribe"
          name="subscribe"
          onChange={handleChange}

          checked={isSubscribed}
          className="position"
        />
        <input type="radio"
          id="subscribe"
          name="subscribe"
          onChange={handleChange}
          checked={isSubscribed}
          className="position"
        />
        <input type="radio"
          id="subscribe"
          name="subscribe"
          onChange={handleChange}
          checked={isSubscribed}
          className="position"
        />

        <CardBody id="carousel">
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
        </CardBody>
      </ContainerBody>

      <AboutContainer>
          <Img src={AboutImg} alt="about image"/>
        <AboutDiv>
          <AboutParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa fugit mollitia doloribus? Rerum optio molestiae
              itaque eveniet tempore provident ullam,
              reprehenderit aut qui, voluptatum vero eaque obcaecati ipsum mollitia eius.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa fugit mollitia doloribus? Rerum optio molestiae
              itaque eveniet tempore provident ullam,
              reprehenderit aut qui, voluptatum vero eaque obcaecati ipsum mollitia eius.
          </AboutParagraph>
          <Button>Github <BsGithub/></Button>
        </AboutDiv>
      </AboutContainer>

    </>
  );
};
