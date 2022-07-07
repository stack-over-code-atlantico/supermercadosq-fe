import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarContainer = styled.div`
  margin: 4% 3%;
  display: flex;
  flex-direction: column;



`;


export const SideLink = styled(Link)`
  text-decoration: none;
  color: rgba(144, 144, 144, 1);
  font-weight: bold;
   &:hover {
    font-size: 1.115rem;
   }

  .icone {
    font-size: 2rem;

  }
`;

