
import './App.css';
import About from './Components/About/About';
import AddProduct from './Components/AddProduct/AddProduct';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { PrivateRoutes } from './Components/PrivateRoute/PrivateRoute';
import ShowProduct from './Components/Showproduct/ShowProduct';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SingleProduct from './Components/SingleProduct/SingleProduct';
import EditProduct from './Components/EditProduct/EditProduct';
import Profile from './Components/Profile/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
       <Routes>
       <Route  path='/reg' element={<Signup/>}/>
       <Route  path='/login' element={<Signin/>}/>
       <Route element={<PrivateRoutes/>}>
       <Route  path='/' element={<Home/>}/>
       <Route  path='/prod' element={<ShowProduct/>}/>
       <Route path='/add' element={<AddProduct/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/prod/:id' element={<SingleProduct/>}/>
       <Route path='/edit/:id' element={<EditProduct/>}/>
       <Route path="/profile" element={<Profile/>}/>
       </Route>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
