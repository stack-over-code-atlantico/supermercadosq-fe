import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header"
import Page404 from "./components/Page404/Page404";

function App() {

  return (
    <>
      <Page404 />
      {/* <Header />*/}
      <GlobalStyle /> 
    </>
  )
}

export default App
