import { Link } from 'react-router-dom';
import axios from 'axios';
import LogonUser from '../context/Context';
import React, { useState, useContext, Component } from 'react';

import Navbar from '../CommonComponents/Navbar';
import WorkSection from '../CommonComponents/WorkSection';

const ListProduct = () => {
    return (
        <div>    
            <WorkSection/>
        </div>
    );
};

export default ListProduct;