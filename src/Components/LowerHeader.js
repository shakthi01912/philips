import React from 'react';
import styled from "styled-components";

function LowerHeader() {
  return (
      <Container>
          
        <Search>
            <SearchIcon>
                <img src="../images/searchicon.png" />
            </SearchIcon>

            <SearchText>
                <input   placeholder="Address,  City,  Neiborhood"/> 
            </SearchText>
        </Search>
        <ForSale>
            toggle
        </ForSale>

        <LowerNav>
            <ul>Any price </ul>
            <ul>0+ Beds </ul>
            <ul> 0+ Baths </ul>
            <ul>Any property Types </ul>
            <ul> More Filters</ul>
        </LowerNav>

        <Notification>
            <img src='../images/notify.png'/>
        </Notification>
    
        </Container>
  )
}

export default LowerHeader

const Container = styled.div`
    height: 50px;
    background-color : white;
    position: fixed;
    top:70px;
    left:0;
    right:0;
    display: flex;
    align-items: center;
    font-size:13px;
    font-weight: 100;
    font-family: sans-serif;
    justify-content: center;
   
`

const Search = styled.div`
display:flex;
flex-grow: 1.5;
padding: 7px;
align-items: center;
/* background-color : yellow; */
margin-left:20px;

`

const SearchIcon = styled.div`

& > img {
    height: 20px;
    width :20px;

}

`

const SearchText = styled.div`

& > input{
    width:250px;
    height:30px;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    margin-left:20px;
 
}

`

const ForSale = styled.div`
    flex-grow: 1;
    height: 50px;
    border: solid;
   
    border-top-style: none;
    border-right-style: medium;
    border-bottom-style: none;
    border-top-color: currentcolor;
    border-right-color: #D6D4D3 ;
    border-bottom-color: currentcolor;
    border-left-color: #D6D4D3 ;
    align-items: center;

`
const LowerNav = styled.div`
    justify-content: space-evenly;
    flex-grow: 2;
    display: flex;
    align-items: center;

`
const Notification = styled.div`
    height: 50px;
    border: solid ;
    align-items: center;
    border-top-style: none;
    border-right-style: medium;
    border-bottom-style: none;
    border-left-style: medium;
    border-top-color: currentcolor;
    border-right-color: #D6D4D3 ;
    border-bottom-color: currentcolor;
    border-left-color: #D6D4D3 ;
    padding-bottom: 0;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 0;
    justify-content: center;
    
    
  

    & > img {
    height: 30px;
    width :30px;
`