
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const User02 = () => {

  console.log("User02")

  const [user, setUser] = useState(null);

  useEffect( ()=>{
    console.log("User02.useEffet");
    if(!user){
      axiosGet();
    }
  });
  //},[]); first Rendering때에만 호출하려면 []필요. 안그럼 화면렌더링시 매번호출. ==> user가 true가 되면 무한 렌더링됨


  const axiosGet = async ()=>{
    try{
      axios.get("http://192.168.0.3:8080/Spring15/user/getUser?name=홍길동&age=111").then((response)=>{
        console.log(response);
        console.log(response.data);
        setUser(response.data);
      });
    }catch(e){
      console.log(e);
    }
  }

  if(!user){
    return null;
  }

  const userView = <li>{user.userId}{user.userName}{user.age}</li>

  return (

    <div className="ViewGood">
      <h2>User02</h2>    
      {userView}
    </div>
    
  );
};

export default User02;