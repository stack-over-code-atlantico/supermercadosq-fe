import { GlobalStyle } from "./styles/global";
import { Navbar } from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About/about";
import Signin from "./pages/SignIn/Signin";
import Login from "./pages/Login/Login";
import {Product}  from "./pages/Products/product";
import Page404 from "./pages/Page404/Page404"


function App() {
  return (
  <>
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Signin/>} />
            <Route path="/product" element={<Product/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/*" element={<Page404 />} />
        </Routes>
      </Router>
    <GlobalStyle />
  </>
  )
}

export default App
