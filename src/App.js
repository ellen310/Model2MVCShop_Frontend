import './App.css';

//import Navbar from './CommonComponents/Navbar';
//import ClientSection from './CommonComponents/ClientSection';
//import Footer from './CommonComponents/Footer';
//import TestimonialsSection from './CommonComponents/TestimonialsSection';
//import WorkSection from './CommonComponents/WorkSection';

import Main from './CommonComponents/Main';
import NotFound from './CommonComponents/NotFound';
import Logon from './UserComponents/Logon';
import Footer from './CommonComponents/Footer';
import Navbar from './CommonComponents/Navbar';


import User from './UserComponents/User';
import Product from './ProductComponents/Product';
import Purchase from './PurchaseComponents/Purchase';

import ProdNoContext from './context/ProdNoContext';

import {Route, Routes} from 'react-router-dom';
import React, { useEffect, useState, useContext } from "react";




function App() {

  console.log("App");

 const [product, setProduct ] = useState({prodNo:0});

  const setChangeProduct = (value) =>{
    console.log("prodNo를 다음 값으로 update: "+value);
    setProduct({prodNo:value});
  }

  const ProductContent = {...product, changeProduct:setChangeProduct};
  console.log(ProductContent);
  
  return (

    <div className="App">
     

       <Navbar/>

        <ProdNoContext.Provider value={ProductContent}>
          <Routes>   
              <Route path='/' element={<Main /> }/>
              <Route path='/main' element={<Main /> }/>
              <Route path='/logon' element={<Logon />}/>  
              <Route path='/logon/:userId/:role' element={<Logon />}/> 

              <Route path='/user/*' element={<User />}/>
              <Route path='/product/*' element={<Product />}/>
              <Route path='/purchase/*' element={<Purchase />}/>

              <Route path="/*" element={<NotFound />} />
          </Routes>
        </ProdNoContext.Provider>
        <Footer/>
        
        

    </div>
  );
}

export default App;
