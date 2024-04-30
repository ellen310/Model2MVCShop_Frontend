import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogonUser from '../context/Context';

const Navbar = () => {

    const logonUser = (JSON.parse(window.sessionStorage.getItem("logonUser")) || {userId:null,role:null});
    console.log("이건 navbar에서 확인한 세션: "+logonUser.userId);

    /* sessionStorage대신 context를 사용했었을 때.
    const logonUser = useContext(LogonUser);
    console.log(logonUser);
    */

    const Signout = () => {
        window.sessionStorage.setItem("logonUser", null);
    }

    function CheckRole() {
        if ( logonUser.role=="user" ) {
          return  <div><li><Link to='/user/updateUser'>개인정보수정</Link></li>  <li><Link to='/purchase/listPurchase'>구매이력조회</Link></li></div>;
        } else if(logonUser.role=="admin") {
          return <div> <li><Link to='/user/listUser'>회원목록조회</Link></li>  <li><Link to='/product/listProduct'>상품관리</Link></li>  </div>;
        }
      } 

    return (
        <div>            
            <div className="collapse navbar-collapse custom-navmenu" id="main-navbar">
                <div className="container py-2 py-md-5">
                <div className="row align-items-start">
                    <div className="col-md-2">
                    <ul className="custom-menu">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><Link to='/product/listProduct'>상품목록</Link></li>
                        <CheckRole/>
                        <li>
                        { !logonUser.userId ? (<Link to='/Logon'>Sign in</Link>):(<a href='/' onClick={Signout}>Sign out</a>) }
                        </li>
                        
                    </ul>
                    </div>
                    <div className="col-md-6 d-none d-md-block  mr-auto">
                    <div className="tweet d-flex">
                        <span className="bi bi-twitter text-white mt-2 mr-3"></span>
                        <div>
                        <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore. <br/> <a href="#">t.co/v82jsk</a></em></p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                    <h3>Hire Me</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiisexplicabo inventore. <br/> <a href="#">myemail@gmail.com</a></p>
                    </div>
                </div>

                </div>
            </div>

            <nav className="navbar navbar-light custom-navbar">
                <div className="container">
                <Link to='/' className='navbar-brand'>MVC2Shop.</Link>
                <a href="#" className="burger" data-bs-toggle="collapse" data-bs-target="#main-navbar">
                    <span></span>
                </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;