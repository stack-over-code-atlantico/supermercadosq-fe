import { GlobalStyle } from "./styles/global";
import { Navbar } from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { About } from "./pages/about";

function App() {
  return (
  <>
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" exact element={<About/>}/>
        </Routes>
      </Router>
    <GlobalStyle />
  </>
  )
}

export default App
