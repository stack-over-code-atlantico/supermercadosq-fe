import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideLink = styled(Link)`
  text-decoration: none;
  margin-top: 1%;
  color: rgba(144, 144, 144, 1);
  &:hover {
    font-weight: bold;
  }
`;