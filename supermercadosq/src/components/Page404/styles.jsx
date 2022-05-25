import styled from 'styled-components'
import BgError404 from '../../assets/errors/Background-erro404.png'

export const Style404 = styled.div`
  position: relative;
  font-family: 'Poppins', sans-serif;
  height: 100%;
  width: 100%;
`

export const BigBlue404 = styled.div`
  width: 1176px;
  height: 1176px;
  right: -159px;
  top: -749px;
  position: absolute;
  border-radius: 50%;
  background-color: var(--color-green);
`

export const Home404 = styled.div`
  width: 125px;
  height: 125px;
  position: absolute;
  top: 20px;
  left: 70px;
  border-radius: 50%;
  background-color: var(--color-green);

  h1 {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: none;
      color: white;
      &:hover {
        color: #101010;
      }
    }
  }
`
export const Error404 = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 258px;
  left: 483px;
  border-radius: 50%;
  background-color: var(--color-blue-ciel);

  h2 {
    font-size: 50px;
    font-weight: 400;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
`
export const Text404 = styled.div`
  position: absolute;
  bottom: 147px;
  right: 547px;
  h1 {
    font-size: 349px;
    font-weight: 400;
    color: white;
    text-shadow: 20px 0 0 #9edde9, -2px 0 0 #9edde9, 0 2px 0 #9edde9,
      0 -2px 0 #9edde9, 1px 1px #9edde9, -1px -1px 0 #9edde9, 1px -1px 0 #9edde9,
      -1px 1px 0 #9edde9;
  }
`
