/* Circulo Verde */
import styled from "styled-components";

export const ImgCircle = styled.section`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: var(--color-green-light);
    clip-path: circle(80% at top -60% right 22%);
    z-index: -1;
`;