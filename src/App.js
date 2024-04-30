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

import LogonUser from './context/Context';



import {Route, Routes} from 'react-router-dom';
import React, { useEffect, useState } from "react";




function App() {

  console.log("App");




  //사용자가 클릭한 상품의 prodNo. (상품상세보기, 구매 등에 활용)
  const [prodNo, setProdNo] = useState({prodNo:0});

  const setChangProdNo = (value)=>{
    console.log(value);
    setProdNo({prodNo:value});
  }

  

/*
  const [logon, setLogon] = useState({userId:null});

  const setChangLogon = (value)=>{
    console.log(value);
    setLogon({userId:value});
  }

  const [logon, setLogon] = useState({
                              userId:null,
                              role:null});

 
  const setChangLogon = (userInfo)=>{
    console.log(userInfo);
    setLogon({userId:userInfo.userId,
              role:userInfo.role});
  }

  //logon state와 변경 가능한 function을 갖는 object.
  const content = {...logon, changeLogon:setChangLogon};
  console.log(content);
*/


  
  return (

    <div className="App">
     
     {/** 
      <LogonUser.Provider value={logon}>

        <Routes>       리액트버전6부터는 Switch대신 Routes. exact도 없다. /를 쓰면 exact인 거고, 뒤에 뭔가 오는 걸 처리하고싶다면 /* 를 써줘라 
          <Route path='/' element={<Main /> }/>
          <Route path='/main' element={<Main /> }/>
          <Route path='/logon' element={<LogonUser.Provider value={content}><Logon/></LogonUser.Provider>}/>  로그인정보 & 로그인 정보를 변경하는 Function전달해줌. 이 컴포넌트에만. 나머지는 로그인 정보만 갖고있다. 
          <Route path='/logon/:userId/:role' element={<LogonUser.Provider value={content}><Logon/></LogonUser.Provider>}/> 

          <Route path='/user/*' element={<User />}/>
          <Route path='/product/*' element={<Product />}/>
          <Route path='/purchase/*' element={<Purchase />}/>

          <Route path="/*" element={<NotFound />} />
        </Routes>

      </LogonUser.Provider>
    */}

       <Navbar/>

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

        <Footer/>

        

    </div>
  );
}

export default App;
