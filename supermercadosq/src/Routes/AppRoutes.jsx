import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login';
import SignIn from '../pages/SignIn/Signin';
import Product from '../pages/Product/Product';
import About from '../pages/About/about';
import Page404 from '../pages/Page404/Page404';
import ProductDetails from '../pages/ProductDetails/ProductDetails';


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignIn/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path='/productdetails' element={<ProductDetails/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<Page404/>} />
    </Routes>
  )
}

export default AppRoutes
