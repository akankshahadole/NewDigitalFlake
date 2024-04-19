import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Newpassword from './component/Newpassword';
import Dashboard from './component/Dashboard';
import Logout from './component/Logout';
import Category from './component/Category';
import Product from './component/Product';
import Addcategory from './component/Addcategory';
import Addproduct from './component/Addproduct';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/newpass" exact element={<Newpassword/>} />
        <Route path="/home" exact element={<Dashboard/>} />
        <Route path="/logout" exact element={<Logout/>} />
        <Route path="/category" exact element={<Category/>} />
        <Route path="/product" exact element={<Product/>} />
        <Route path="/addcategory" exact element={<Addcategory/>} />
        <Route path="/addproduct" exact element={<Addproduct/>} />
      </Routes>
    </Router>
  );
}

export default App;
