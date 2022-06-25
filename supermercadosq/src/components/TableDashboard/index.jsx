
import React, { useContext } from 'react';
import { StyledTable, TBody, TH, THead, TR, TD, Div, Action, Complaint, Icon } from './style';
import postIcon from '../../assets/icons/post-icon.png';
import userIcon from '../../assets/icons/user-icon.png';
import commentIcon from '../../assets/icons/comment-icon.png';

export function TableDashboard({ data }) {
  const arrayTeste = [
    {
      tipoDenuncia: "comentario",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "postagem",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "usuario",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "comentario",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "comentario",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "postagem",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
  ];

  const compareComplaint = (type) => {
    console.log(type)
    if(type === 'comentario') return commentIcon;
    if(type === 'postagem') return postIcon;
    if(type === 'usuario') return userIcon;
  }

  return (
    <Div>
      <StyledTable>
        <THead>
          <TR>
            <TH>Tipo de denúncia</TH>
            <TH>Nome</TH>
            <TH>Conteúdo</TH>
            <TH>Ação</TH>
          </TR>
        </THead>
        <TBody>
          {
            arrayTeste.map((item, index) => (
              <TR key={index}>
                <TD>
                  <Complaint>
                    <Icon src={compareComplaint(item.tipoDenuncia)} />
                  </Complaint>
                </TD>
                <TD>{item.nome}</TD>
                <TD>{item.conteudo}</TD>
                <TD>
                  <Action />
                </TD>
              </TR>
            ))
          }
        </TBody>
      </StyledTable>
    </Div>
  )
}
