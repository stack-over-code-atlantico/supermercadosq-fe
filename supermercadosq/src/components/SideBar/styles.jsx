import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarContainer = styled.div`
  padding:  1rem 0 0 1.4rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: auto;
  margin-top: 7vh;
  border-right: 1px solid #959695;

  @media (max-width: 1300px) {
    padding-left: 0.5rem 0 0 0.7rem;
    margin-right: 0.5rem;
  }

  @media (max-width: 800px) {
    padding-left: 0.2rem 0 0 0.2rem;
    font-size: 0.8rem;
    margin-right: 0;

  }

`;

export const SideItem = styled.div`
  margin-top: 10px;
`

export const SideLink = styled.button`
  text-decoration: none;
  align-items: center;
  border: none;
  background-color: transparent;
  color: rgba(144, 144, 144, 1);
  font-size: 16px;

  &:hover {
    font-size: 1rem;
    font-weight: bold;
  }

  &:focus {
    font-weight: bold;
    color: rgba(144, 144, 144, 1);
  }


  .sidelink-margin{
    margin: '1rem 0';
  }
`;
