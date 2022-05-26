import { GlobalStyle } from "./styles/global";
import { Navbar } from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { About } from "./pages/about";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Product } from "./pages/product";

function App() {
  return (
  <>
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    <GlobalStyle />
  </>
  )
}

export default App
