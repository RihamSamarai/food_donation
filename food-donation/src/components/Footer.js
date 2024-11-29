import React from "react";
import styled from "styled-components";


const FootWrapper = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;


const Footer = () => {
    return <FootWrapper>
     
    &copy; 2024 Food Donation Platform

    </FootWrapper>

};


export default Footer;