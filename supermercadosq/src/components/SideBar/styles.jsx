import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarContainer = styled.div`
  padding:  1rem 0 0 1rem;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  background-color: red;
`;

export const SideItem = styled.div`

`

export const SideLink = styled(Link)`
  text-decoration: none;
  color: rgba(144, 144, 144, 1);
  align-items: center;

  &:hover {
    font-size: 1.115rem;
  }

  .icone {
    font-size: 2rem;
  }

  .sidelink-margin{
    margin: '1rem 0';
  }
`;
