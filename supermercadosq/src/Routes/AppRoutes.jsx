import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login';
import SignIn from '../pages/SignIn/Signin';
import Product from '../pages/Product/Product';
import About from '../pages/About/About';
import Page404 from '../pages/Page404/Page404';


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignIn/>} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<Page404 />} />
    </Routes>
  )
}

export default AppRoutes