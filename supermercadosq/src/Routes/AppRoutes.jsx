import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login';
import SignIn from '../pages/SignIn/Signin';
import Product from '../pages/Product/Product';
import About from '../pages/About/about';
import Page404 from '../pages/Page404/Page404';
// import ProductDetails from '../pages/ProductDetails/ProductDetails'; Para fins de desenvolvimento
import Dashboard from '../pages/Dashboard/dashboard';
import { userLevel } from '../services/useAuth';
import Cookies from 'js-cookie';
import ProductRegister from '../components/ProductRegister';
import Profile from '../pages/Profile/Profile';

const AppRoutes = () => {
  let level = 'CLIENTE';
  if(Cookies.get('token') ){
    level = userLevel();
  }

  return (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignIn/>}/>
        <Route path="/product" element={<Product/>}/>
        {/* <Route path='/productdetails' element={<ProductDetails/>}/> */}
        <Route path="/dashboard" element={ level.nivel === 'ADMINISTRADOR' ? <Dashboard/> : <Page404 /> }/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<Page404/>} />
        <Route path="/ProductRegister" element={<ProductRegister/>} />
        <Route path="/login/profile" element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes
