import React, { useState, useCallback } from 'react';

import {
  StyledTable,
  TBody,
  TH,
  THead,
  TR,
  TD,
  Div,
  Action,
  Complaint,
  SpanText
} from './style';
import {
  BsHandThumbsUp,
  BsHandThumbsDown,
  BsHandThumbsUpFill,
  BsHandThumbsDownFill,
  BsCursorFill,
  BsFillFilePostFill,
  BsCheckCircle
} from "react-icons/bs";
import { FaComments } from "react-icons/fa";

export function TableDashboard({ data, update }) {
  const [, setUpdatedStatus] = useState(null);

  const handleApprove = async (item) => {
    setUpdatedStatus({...item, status: 'APROVADO'});
    item.status = 'APROVADO';
  };

  const handleDisapprove = (item) => {
    setUpdatedStatus({...item, status: 'REPROVADO'});
    item.status = 'REPROVADO';
  };

  const compareComplaint = (type) => {
    if (type['id_comentario'] !== null && type['id_comentario'] !== undefined) return (<FaComments />);
    return (<BsFillFilePostFill />);
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
            <TH></TH>
          </TR>
        </THead>
        <TBody>
          {
            data
              ? data.map((item, index) => (
                <TR key={index}>
                  <TD>
                    <Complaint>
                      {compareComplaint(item)}
                    </Complaint>
                  </TD>
                  <TD>{item.nome ?? 'COMENTÁRIO'}</TD>
                  <TD>
                    <SpanText>{item.descricao ?? `"${item.mensagem}"`}</SpanText>
                  </TD>
                  <TD>
                    <Action onClick={() => handleApprove(item)}>
                      {

                        item.status === 'APROVADO' ? <BsHandThumbsUpFill /> : <BsHandThumbsUp />
                      }
                    </Action>
                    <Action onClick={() => handleDisapprove(item)} style={{transform: 'rotatey(180deg)'}}>
                      {
                        item.status === 'REPROVADO' ? <BsHandThumbsDownFill  /> : <BsHandThumbsDown/>
                      }
                    </Action>
                  </TD>
                  <TD>
                    <Action>
                      {
                        item.status === 'REPROVADO' || item.status === 'APROVADO'
                          ? (<BsCursorFill onClick={() => update(item)} style={{transform: 'rotate(45deg)'}} />)
                          : (<BsCursorFill disabled style={{transform: 'rotate(45deg)'}} />)
                      }
                    </Action>
                  </TD>
                </TR>
              )) : null
          }
        </TBody>
      </StyledTable>
    </Div>
  );
};
