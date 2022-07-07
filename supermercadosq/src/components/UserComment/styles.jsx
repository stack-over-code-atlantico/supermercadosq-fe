import styled from "styled-components";

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: white;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const UserAvatar = styled.figure`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: crimson;
`;

export const UserName = styled.div`
  font-weight: 600;
  h1 {
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
  }
  h2 {
    font-style: normal;
    font-size: 12px;
    line-height: 18px;
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
      #denounce {
        transition: all 0.6s ease-out;
        color: var(--color-red);
      }

      #trash {
        transition: all 0.6s ease-out;
        color: var(--color-black);
      }

      #edit {
        transition: all 0.6s ease-out;
        color: var(--color-blue-light);
      }
    }
  }
`;

export const IconNotVisible = styled.a`
  display: none;
`;
