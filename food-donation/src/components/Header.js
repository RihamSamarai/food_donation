import React from "react";
import styled from "styled-components";


const HeaderWrapper = styled.header`
  background-color: #4caf50;
  padding: 20px;
  color: white;
  text-align: center;

`;


const Header = () => {
    return <HeaderWrapper>
        Food Donation Platform
    </HeaderWrapper>
};

export default Header;



