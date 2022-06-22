import styled from "styled-components";

export const CardDashboard = styled.div`
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.width ? props.width : 'auto'};
  background-color: #fff;
  box-shadow: 1px 4px 4px #d2d2d2;
  border-radius: 20px;
`;
