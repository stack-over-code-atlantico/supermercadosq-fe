import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header"

import { Circle } from "./components/Circle"

import { TextoBlog } from './components/TextoBlog'

function App() {

  return (
    <>
      <Header />
      <GlobalStyle />
      <Circle />
      <TextoBlog />
    </>
  )
}

export default App
