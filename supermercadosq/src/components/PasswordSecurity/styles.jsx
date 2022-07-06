import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideLink = styled(Link)`
  text-decoration: none;
  color: rgba(144, 144, 144, 1);
  margin-top: 1%;
  &:hover {
    font-weight: bold;
  }
`;