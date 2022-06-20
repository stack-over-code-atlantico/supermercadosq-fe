/* Circulo Verde */
import styled from "styled-components";

export const ImgCircle = styled.section`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: ${props => props.color };
    clip-path: circle(52% at top -25% right 23%);
    z-index: -1;
    transition: 500ms ease;
`;
