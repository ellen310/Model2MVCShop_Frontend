import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'
import {Container} from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import LogonUser from '../context/Context';
import Navbar from '../CommonComponents/Navbar';

const Logon = () => {

  console.log("Logon");

  const logonUser = useContext(LogonUser);
  console.log(logonUser);


  const [user, setUser] = useState(null);

  let navigate = useNavigate();
 
  const logon = async() =>{
    console.log("Logon arrow function");

    let userId = $('input:text').val();
    let password = $('input:password').val();

    console.log(userId,password);

    axios.post('http://192.168.0.56:8080/user/json/login',{userId:userId, password:password}).then((response)=>{
      console.log(response.data);
      console.log(response.data.active);

      if(response.data.active){
        console.log("로그인 성공");
        logonUser.changeLogon(response.data.userId);
        navigate('/Main');
      }else{
        alert("ID, PW를 확인하시고 다시 시도해주세요!");
      }
    });
  }

  const signUp = async() =>{
    console.log("signUp arrow function");

    navigate('/user/addUser');
  }


  $( function() {
				
      $("#loginWithKakao").on("click", function(){

        axios.get('https://kauth.kakao.com/oauth/authorize?client_id=	e63e290b8b7712c5d19b6279f529cacf&redirect_uri=http://192.168.0.56:8080/user/login/kakao/authorization&response_type=code').then((response)=>{
        console.log(response.data);
        console.log(response.data.active);

        if(response.data.active){
          console.log("카카오로 가입한 정보 있음. 메인으로..");
          logonUser.changeLogon(response.data.userId);
          navigate('/Main');
        }else{
          //유저 아이디를 함께 넘긴다. 
          alert("카카오로 가입한 정보가 없습니다. 가입페이지로 이동합니다..");
          navigate('/AddUser', {state : {userInfo: response.data}});
        }
      });

      document.location = "https://kauth.kakao.com/oauth/authorize?client_id=	e63e290b8b7712c5d19b6279f529cacf&redirect_uri=http://192.168.0.56:8080/user/login/kakao/authorization&response_type=code";
    });
    
  });	

  return (

    <Container>
      
      <Navbar/>
      

      <section class="section pb-5">
        <div class="container">

          <div class="row mb-5 align-items-end">
            <div class="col-md-6" data-aos="fade-up">
              <h2>Login</h2>
              <p class="mb-0">Welcome to Yeji's ALDI!
              </p>
            </div>

          </div>

          <div class="row">
            <div class="col-md-6 mb-5 mb-md-0" data-aos="fade-up">

              <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="row gy-3">
                  <div class="col-md-6 form-group">
                    <label for="userId">ID</label>
                    <input type="text" name="userId" class="form-control" id="userId" required/>
                  </div>
                  <div class="col-md-6 form-group">
                    <label for="password">PASSWORD</label>
                    <input type="password" class="form-control" name="password" id="email" required/>
                  </div>

                  <div class="col-md-12 my-3">
                  </div>

                  <div class="col-md-6 mt-0 form-group">
                    <input type="button" onClick={logon} class="readmore d-block w-100" value="Login"/>
                  </div>
                  <div class="col-md-6 mt-0 form-group">
                    <input type="button" onClick={signUp} class="readmore d-block w-100" value="Sign up"/>
                  </div>
                  
                  <div class="col-md-12 my-3">
                  </div>

                  <div class="col-md-6 mt-0 form-group" >
                    <img id="loginWithKakao"  src= "images/kakao_login_medium_narrow.png"/>          
                  </div>


                 
                </div>
              </form>

            </div>
            
            </div>

          </div>

        </section>


    </Container>


  );
};

export default Logon;