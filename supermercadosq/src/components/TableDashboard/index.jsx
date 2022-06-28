
import React  from 'react';
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
    {
      tipoDenuncia: "postagem",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "postagem",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "postagem",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "postagem",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "postagem",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "postagem",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "postagem",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "postagem",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "postagem",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "postagem",
      nome: "Emanuel",
      conteudo: "lorem ipsuim lorem ipsum"
    },
    {
      tipoDenuncia: "postagem",
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
    if (type['id_comentario'] !== null && type['id_comentario'] !== undefined) return commentIcon;
    return postIcon;
  };

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
            data
              ? data.map((item, index) => (
              <TR key={index}>
                <TD>
                  <Complaint>
                    <Icon src={compareComplaint(item)} />
                  </Complaint>
                </TD>
                <TD>{item.nome ?? 'COMENTÁRIO'}</TD>
                <TD>{item.descricao ?? `"${item.mensagem}"`}</TD>
                <TD>
                  <Action />
                </TD>
              </TR>
            )) : null
          }
        </TBody>
      </StyledTable>
    </Div>
  );
};
