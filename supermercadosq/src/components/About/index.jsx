import React, { useContext, useState } from 'react';
import { AboutSection, AboutText, AboutParagraph, ContainerBody, CardBody } from './styles';
import { BsGithub } from 'react-icons/bs';
import { Img, AboutDiv, AboutContainer, Button, LoadingScreen, LoadingContainer } from './styles';
import  AboutImg  from "../../assets/images/imagemsobre.png";


export function AboutComponent() {
  const [isSubscribed, setIsSubscribed] = useState('option3');
  const handleChange = event => {
    setIsSubscribed(event.target.value);
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
        <LoadingContainer>
          <LoadingScreen className="loading-screen" size='140px' background='#F59E1D' text='União' />
          <LoadingScreen className="loading-screen" size='140px' background='#76BC44' text='Missão' />
          <LoadingScreen className="loading-screen" size='140px' background='#3EBCD3' text='Visão'/>
          <LoadingScreen className="loading-screen" size='140px' background='#f66a69' text='Valores'/>
          <LoadingScreen className="loading-screen" size='140px' background='#9cdbe7' text='Foco'/>
        </LoadingContainer>

      </AboutSection>

      <ContainerBody>
        <input type="radio"
          id="subscribe"
          name="subscribe"
          value="option1"
          onChange={handleChange}
          checked={isSubscribed == 'option1'}
          className="position"
        />
        <input type="radio"
          id="subscribe"
          name="subscribe"
          value="option2"
          onChange={handleChange}
          checked={isSubscribed == 'option2'}
          className="position"
        />
        <input type="radio"
          id="subscribe"
          name="subscribe"
          value="option3"
          onChange={handleChange}
          checked={isSubscribed == 'option3'}

          className="position"
        />
        <input type="radio"
          id="subscribe"
          name="subscribe"
          value="option4"
          onChange={handleChange}
          checked={isSubscribed == 'option4'}
          className="position"
        />
        <input type="radio"
          id="subscribe"
          name="subscribe"
          value="option5"
          onChange={handleChange}
          checked={isSubscribed == 'option5'}
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
