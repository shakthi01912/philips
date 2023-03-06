import React from 'react';
import Login from "./Login"
import styled from "styled-components";

function Header() {
  return (
    <Container>
        
        <Logo>
            <img src="../images/philipslogo.jpg"/>
        </Logo>
       

        <Nav>
        
            <ul>NEW YORK  </ul>
            
            <ul>FLORIDA</ul>
            <ul>CONTACT US </ul>
            <ul>(917) 446-0523</ul>
            <ul><Login /> </ul>
        </Nav>



    </Container>

  )
}

export default Header

const Container = styled.div`
    height: 70px;
    background-color : black;
    margin: 0;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    color: #D0D0CF ;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    
`


const Nav = styled.nav`
    justify-content: space-between;
    display: flex;
    width:50%;


    & > ul{
    font-size:13px;
    font-weight: 100;
    font-family: sans-serif;
    }
   


`

const Logo = styled.div`
    width: 50%;
    margin: 30px;   


&  > img{
    height: 50px;
    width:50px;

}


`

