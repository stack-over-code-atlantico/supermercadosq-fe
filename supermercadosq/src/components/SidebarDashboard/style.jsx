import styled from 'styled-components';

export const Sidebar = styled.aside`
  height: 100vh;
  width: 300px;
  background-color: #3EBCD3;
  box-shadow: 4px 0 10px #d2d2d2;
  border-radius: 0 15px 15px 0;
`;


export const SidebarName = styled.h2`
  max-width: 220px;
  font-size: 20px;
  color: #fff;
  position: relative;
  top: 100px;
  left: 40px;
`;

export const SidebarEmail = styled.h3`
  font-size: 16px;
  color: #fff;
  position: relative;
  top: 90px;
  left: 40px;
  font-weight: 400;
`;

export const SidebarIcon = styled.img`
  width: 60px;
  position: relative;
  left: 10px;
  top: 8px;
`;

export const SidebarButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: transparent;
  position: relative;
  top: 180px;
  border: transparent;
  color: #fff;

  &:hover {
    left: 20px;
    border: 0.2px solid #fff;
    font-weight: 400;
  }
`;

