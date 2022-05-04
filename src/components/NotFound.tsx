import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Other = styled.h4`
  font-size: 1.5em;
  color: #2f2fa2;
  margin-top: 0;
`;

const ToOther = styled(Link)`
  color: #2f2fa2;
  margin: 280px;
  font-size: 1.6em;
`;

const NotFound = () => {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" alt="sea" />
      <Title>404 Error</Title>
      <Other>Page Not Found.</Other>
      <ToOther to="/">Go Home</ToOther>
    </div>
  );
};

export default NotFound;
