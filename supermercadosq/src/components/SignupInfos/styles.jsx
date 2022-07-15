import styled from 'styled-components'

export const CheckType = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  label,
  .checkBox {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 5px;
    align-items: center;
    justify-content: center;
    input {
      margin: 0px;
    }
  }
`

export const ProfileAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
        background: var(--color-blue-light);
        color: var(--color-white);
        border-radius: 5px;
        cursor: pointer;
        transition: filter 0.3s;
        &:hover {
          filter: brightness(0.7);
        }
      }
`;
