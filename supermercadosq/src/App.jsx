import { GlobalStyle } from "./styles/global";
import { Navbar } from "./components/Navbar"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <GlobalStyle />
    </Router>
  )
}

export default App
