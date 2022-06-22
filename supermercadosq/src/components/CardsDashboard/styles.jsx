import styled from "styled-components";

export const CardDashboard = styled.div`
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.width ? props.width : 'auto'};
  background-color: #fff;
  box-shadow: 1px 4px 4px #d2d2d2;
  border-radius: 20px;
  margin: 20px 0 0 20px;
  padding: 60px 20px 20px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  position: absolute;
  top: 40px;
  left: 60px;
`;
