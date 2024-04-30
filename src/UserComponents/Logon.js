import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import $, { data } from 'jquery'
import {Container} from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {useCookies} from 'react-cookie'

import LogonUser from '../context/Context';
import Navbar from '../CommonComponents/Navbar';

const Logon = () => {

  console.log("Logon");

  //url파라미터로 /userId/role 넘어온다. {userId:user09,role:user}
  const params = useParams();

  //sessionStorage에서 로그인정보 받아옴. userId와 role이 함께 담겨있다.
  const sessionLogonUser = window.sessionStorage.getItem("logonUser");

  // JS에서 || 연산자는 왼->오 순서로 보면서 먼저 참이 나오는 쪽을 적용함. 즉, 왼쪽이 trusy이면 왼쪽이 적용되고 falsy이면 오른쪽을 반환
  const [ logonUser, setlogon ] = useState(sessionLogonUser || null);
      

  //로그온 상태값 바꾸는 함수
  const setChangLogon = (userInfo)=>{
      console.log(userInfo);
      setlogon({userId:userInfo.userId,
                role:userInfo.role});
    }

  // 로그인 정보를 받아와소 logonUserId 값이 바뀌면 sessionStorage의 logonUser도 변경하기 (= 로그인시 세션스토리지에 저장)
  useEffect(() => {
      console.log("logon.useEffect");

      if(params.userId!=null){
        console.log("userKakao.useEffect");
        console.log("logonUserId: "+params.userId);
        console.log("logonRole: "+params.role);
       
        //세션스토리지는 아이템을 string형식으로 저장하기 때문에, object를 스트링화해서 저장하고, 받아올때는 JSON.parse를 통해 오브젝트화하여 받아온다.
        window.sessionStorage.setItem("logonUser", JSON.stringify(params));
        console.log( JSON.parse(window.sessionStorage.getItem("logonUser")).userId );

        document.location = "/";
      }

  }, []);



/* 세션 스토리지 쓰기 전.
  const logonUser = useContext(LogonUser);
  console.log(logonUser);
*/


  const [user, setUser] = useState(null);

  let navigate = useNavigate();
 
  const singIn = async() =>{
    console.log("singIn arrow function");

    let userId = $('input:text').val();
    let password = $('input:password').val();

    console.log(userId,password);

    axios.post('http://192.168.0.56:8080/user/json/login',{userId:userId, password:password}).then((response)=>{
      console.log(response.data);
      console.log(response.data.active);

      if(response.data.active){
        console.log("로그인 성공");
       // logonUser.changeLogon({userId:response.data.userId,role:response.data.role});
       window.sessionStorage.setItem("logonUser", JSON.stringify({userId:response.data.userId,role:response.data.role}));
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

       
        axios.get('https://kauth.kakao.com/oauth/authorize?client_id=	e63e290b8b7712c5d19b6279f529cacf&redirect_uri=http://localhost:8080/user/login/kakao/authorization&response_type=code').then((response)=>{
       
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

    });
    
  });	

  return (

    <Container>
      

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
                    <input type="button" onClick={singIn} class="readmore d-block w-100" value="sign In"/>
                  </div>
                  <div class="col-md-6 mt-0 form-group">
                    <input type="button" onClick={signUp} class="readmore d-block w-100" value="Sign up"/>
                  </div>
                  
                  <div class="col-md-12 my-3">
                  </div>

                  <div class="col-md-6 mt-0 form-group" >
                    <a href="https://kauth.kakao.com/oauth/authorize?client_id=	e63e290b8b7712c5d19b6279f529cacf&redirect_uri=http://localhost:8080/user/login/kakao/authorization&response_type=code"><img src= "images/kakao_login_medium_narrow.png"></img></a>
                    {/* <img id="loginWithKakao"  src= "images/kakao_login_medium_narrow.png"/> */} 
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