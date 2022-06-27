import styled from "styled-components";

export const LoadingScreen = styled.div`
  height: ${props => props.size ? props.size : '100px' };
  width: ${props => props.size ? props.size : '100px' };
  background: ${props => props.background ? props.background : '#9cdd6e' };
  border-radius: 50%;
  position: absolute;
  left: ${props => props.left ? props.left : '100px' };
  top: ${props => props.top ? props.top : '100px' };
  display: flex;
  justify-content: center;
  align-items: center;
  &::before{
    content:  '${props => props.text ? props.text : '' }';
    text-align: center;
    color: #fff;
    font-size: 2.1rem;
  }
`;
