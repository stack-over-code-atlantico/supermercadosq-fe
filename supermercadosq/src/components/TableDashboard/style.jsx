import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  max-height: 270px;
  overflow-y: auto;
  overflow-x: hidden;
`;


export const TableDiv = styled.div`
  height: 100vh;
  width: 100%;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  max-height: 480px;

  tbody tr {
    height: 80px;
  }
`;

export const THead = styled.thead``;

export const TFoot = styled.tfoot``;

export const TBody = styled.tbody``;

export const TR = styled.tr`
  max-height: 50px;
  width: 100%;
  color: #000;
  border-bottom: 2px solid #f6f6f6;
`;

export const TH = styled.th`
  height: 50px;
  position: sticky;
  top: 0;
  background: #fff;
  border: transparent;
  z-index: 2;

  &:nth-child(3) {
      max-width: 50%;
  }

  &:nth-child(4), &:nth-child(5){
    width: 100px;
  }
`;

export const TD = styled.td`
    padding: 5px;
`;

export const Action = styled.button`
  width: 25px;
  height: 25px;
  font-size: 20px;
  background: transparent;
  border: transparent;
  border-radius: 50%;
  color: #692ABA;
  transform: rotate(${props => props.rotatex ? (props.rotatex) + 'deg' : '0'});

  &:hover{
    > * {
      transform: scale(1.4);
      transition: 300ms ease all;
    }
  }
`;

export const Complaint = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background: #f3f3f3;
  margin-left: calc(50% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    > * {
      transition: 200ms all ease;
      transform: scale(1.2);
    }
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const SpanText = styled.span`
  display: block;
  height: 60px;
  max-height: 50px;
  overflow: hidden;
  text-overflow: clip;
  white-space: wrap;
`;
