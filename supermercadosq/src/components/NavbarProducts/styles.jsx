import styled from "styled-components";

export const DivNavbarProducts = styled.div`
    background-color: var(--color-blue-light);
    padding: 20px 250px;
    margin-bottom: 40px;
`;
export const NavbarList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    gap: 50px;
    align-items: center;
    padding: 0px 54px;
`;
export const ProductListItem = styled.li`

    position: relative;

    a{
        text-decoration: none;
        color: var(--color-white);
    }

    a:hover {
        color: var(--color-white);
    }

    a::after {
        content: "";
        width: 0%;
        height: 2px;
        background: var(--color-white);
        left: 0;
        position: absolute;
        bottom: -0.5rem;

        transition: width 0.2s;
    }

    a:hover::after {
        width: 100%;
    }
`;
