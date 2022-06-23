import styled from "styled-components";

export const CardDashboard = styled.div`
  height: ${props => props.height ? props.height : '250px'};
  width: ${props => props.width ? props.width : 'auto'};
  min-width: ${props => props.minWidth ? props.minWidth : '200px'};
  background-color: #fff;
  box-shadow: 1px 4px 4px #d2d2d2;
  border-radius: 20px;
  margin: 20px 0 0 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const CardSection= styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: calc(100% - 200px);
`;
