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
          Sobre Nós
        </AboutText>
        <AboutParagraph>
          Somos o <span>SuperMercadoSQ</span>! O Super Mercado que trabalha pensando em você!
          Sabemos o quão difícil é passar, por muitas vezes, por problemas ao procurar um produto livre de um componente que possa ser passivo de restrições alimentícias e é pensando em você que agimos!
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
          <div className="item">
            <p>Para nós é essencial manter a união entre <span>empresa</span> e <span>usuário</span> prezando sempre pela qualidade de nossas soluções de forma a trabalhar sempre de forma positiva na vida daqueles que usufruem de nossa aplicação, como motivar nossa equipe de trabalho unindo sempre os interesses da empresa aos do usuário e quadro de colaboradores.</p>
          </div>
          <div className="item">
            <p>Traçamos como missão, ajudar as pessoas a encontrarem o produto que precisam e promover a interação entre os membros da comunidade através de discussões a respeito das receitas e dos componentes do produto em questão, bem como a possibilidade de compartilhamento de algum produto do qual tenhas interesse.</p>
          </div>
          <div className="item">
            <p>Ser reconhecida como uma empresa de excelência no mercado nacional e internacional, por aproximar pessoas - ajudando-as através da conexão feita por comentários e compartilhamento de posts -, proporcionar uma experiência de qualidade ao buscar por itens com igredientes passivos de restrições alimentícias.</p>
          </div>
          <div className="item">
            <p>Sustentamos como pilares de valores a <span>Satisfação do Usuário</span>, pois ele é o motivo de estarmos aqui, a <span>Responsabilidade Social</span>, pois destaca-se como a única forma de evoluirmos e tornarmos nossa sociedade mais justa e <span>Respeito ao Meio Ambiente</span>, pois é através do cuidado para com ele que teremos uma perspectiva do amanhã.</p>
          </div>
          <div className="item">
            <p>Nosso foco sempre será o <span>Usuário</span> de nossa aplicação. Decimdimos optar por essa metodologia de trabalho inteiramente direcionada ao atendimento das necessidades dos clientes para que possamos surpreendê-los de forma positiva, superando sempre suas expectativas.</p>
          </div>
        </CardBody>
      </ContainerBody>
      <AboutContainer>
          <Img src={AboutImg} alt="about image"/>
        <AboutDiv>
          <AboutParagraph>
            <span>SuperMercadoSQ</span> é um projeto desenvolvido por um grupo de estudantes, denomidado <span>StackOverCode</span>, os quais fazem parte do Curso FullStack do Academy Bootcamp proporcionado pelo @InstitutoAtlântico, que tem como propósito ajudar as pessoas a encontrarem os produtos que precisam, bem como ter conhecimento dos igredientes que podem ser passivos de participarem de restrições alimentícias. Clique no botão abaixo para acessar nossa organização no Github, onde estão localizados os repositórios do projeto, divididos nas categorias: <span>Banco de Dados</span>, <span>Frontend</span> e <span>Backend</span>.
          </AboutParagraph>
          <Button><a href="https://github.com/stack-over-code-atlantico" target="_blank">Github</a> <BsGithub/></Button>
        </AboutDiv>
      </AboutContainer>
    </>
  );
};
