import axios from 'axios';
import LogonUser from '../context/Context';
import React, { useState, useContext, Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Navbar from '../CommonComponents/Navbar';
import WorkSection from '../CommonComponents/WorkSection';
import NotFound from '../CommonComponents/NotFound';
import ListProduct from './ListProduct';

const Product = () => {
    return (

        <div className="Product">

        <Routes>   
            <Route path='listProduct' element={<ListProduct />}/>
            
            <Route path="/*" element={<NotFound />} />
        </Routes>

        </div>


    );
};

export default Product;