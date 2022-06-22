import styled from 'styled-components';

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: wheat;
  border-radius: 0 20px 0 0;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const UserAvatar = styled.figure`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-color: crimson;
`;

export const UserName = styled.div`
  h1 {
    font-size: 16px;
  }
  h2 {
    font-size: 10px;
  }
`;

export const UserIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    cursor: pointer;
    margin: 3px;

    &:hover {
      color: crimson;
    }
  }
`;
