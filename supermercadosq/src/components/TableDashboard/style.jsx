import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  max-height: 270px;
  overflow-y: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  max-height: 280px;

  tbody tr {
    height: 60px;
  }
`;

export const THead = styled.thead``;

export const TFoot = styled.tfoot``;

export const TBody = styled.tbody``;

export const TR = styled.tr`
  color: #000;
  width: 25%;
  border-bottom: 2px solid #f6f6f6;
`;

export const TH = styled.th`
  width: 25%;
  position: sticky;
  top:0;
  background: #fff;
  z-index: 2;
`;

export const TD = styled.td``;


export const Action = styled.button`
  width: 25px;
  height: 25px;
  background: #b996e8;
  border: transparent;
  border-radius: 50%;
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
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
