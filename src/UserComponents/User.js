
import React, {useEffect, useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import AddUser from './AddUser';
import NotFound from '../CommonComponents/NotFound';


const User = () => {

  console.log("User");

  return (

    <div className="User">

      <Routes>   
        <Route path='addUser' element={<AddUser />}/>
        
        <Route path="/*" element={<NotFound />} />
      </Routes>

    </div>
    
  );
};

export default User;