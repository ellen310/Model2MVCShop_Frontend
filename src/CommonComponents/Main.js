import Navbar from './Navbar';
import ClientSection from './ClientSection';
import Footer from './Footer';
import TestimonialsSection from './TestimonialsSection';
import WorkSection from './WorkSection';
import NotFound from './NotFound';


//import Logon from './Logon';
import LogonUser from '../context/Context';

import {Route, Routes} from 'react-router-dom';
import React, { useEffect, useState } from "react";
const Main = () => {

    console.log(useState(LogonUser));

    return (
        <div>

            <Navbar/>
            <WorkSection/>
            <TestimonialsSection/>
            <ClientSection/>
            <Footer/>

        </div>
    );
};

export default Main;