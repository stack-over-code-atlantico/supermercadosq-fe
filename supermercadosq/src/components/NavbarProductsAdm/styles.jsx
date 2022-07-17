import styled from "styled-components";

export const DivNavbarAdm = styled.div`
  background-color: var(--color-blue-light);
  padding: 20px;
  margin-bottom: 40px;
`;
export const NavbarListAdm = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  align-items: center;
  gap: 50px;
  padding: 0px 54px;
`;
export const ProductListItemAdm = styled.li`
  position: relative;

  a {
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

  img {
    margin-left: 5px;
    width: 12px;
  }
`;
