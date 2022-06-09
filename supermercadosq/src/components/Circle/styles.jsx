/* Circulo Verde */
import styled from "styled-components";

export const ImgCircle = styled.section`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: var(--color-green-light);
    clip-path: circle(50% at top -25% right 30%);
    z-index: -1;
`;