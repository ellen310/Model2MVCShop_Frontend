import '../App.css';

import React from 'react';

import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NotFound = () => {

  console.log("NotFound");

  /*
    >> 확인 : http://localhost:3000/abc
    - www.reactrouter.com : No Match(404) 참조함.
  */
  const location = useLocation();

  return (


    <Container>

      <h3>
        요청하신 Page 존재하지 않습니다. <code>{location.pathname}</code>
      </h3>

    </Container>
  );
};

export default NotFound;