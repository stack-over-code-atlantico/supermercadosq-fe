import styled from "styled-components";

export const DivNavbarProducts = styled.div`
  background-color: var(--color-blue-light);
  padding: 20px 250px;
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavbarList = styled.ul`
  list-style: none;
  gap: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProductListItem = styled.li`
  padding: 0px;
  position: relative;

  a {
    text-decoration: none;
    cursor: pointer;
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
