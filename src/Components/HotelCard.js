import React, { useState } from 'react';
import styled from "styled-components";
import axios from "axios"



function HotelCard() {

    // const [price , setPrice]  = useState('');
    // const [price , setPrice]  = useState('');
    // const [price , setPrice]  = useState('');
    // const [price , setPrice]  = useState('');
    // const [price , setPrice]  = useState('');


    // const sdk = require('api')('@repliers/v1.0#la7fnenl73v17yz');

    // sdk.auth('taecHelmCkhO5q9QdKZYFmNcCh6YeQ');
    // sdk.gettingStartedWithYourApi({
    //   balcony: '',
    //   listings: 'true',
    //   operator: 'AND',
    //   sortBy: 'updatedOnDesc',
    //   status: 'A'
    // })
    //   .then(({ data }) => console.log(data))
    //   .catch(err => console.error(err));


    const hotelDetails = () => {
        
        axios.get("https://sandbox.repliers.io/listings",{
            headers:{
                
                'Authorization': 'Bearer '+ "taecHelmCkhO5q9QdKZYFmNcCh6YeQ"
            },
        })
       
        .then(
        (response) => {
            console.log(response)
        }
        )

    }

  return (
    <Container>

    <Image>
        <img src="../images/noti.png"  alt="image"/>
    </Image>
    
        <Details>
            <Price>
            <h1>price</h1>
         

            <button onClick={hotelDetails} />
            </Price>
                
                <Room>
                <Bed>
                <p>Beds</p>
                </Bed>
                <Baths>
                <p>Baths</p>
                </Baths>
                <Feet>
                <p>ft'2</p>
                </Feet>
                </Room>
        
        </Details>

    <Address>
        <p>Address</p>
    </Address>

    <Third>

        <Status>
            <p>status</p>
        </Status>

        <RegNo>
            register number
        </RegNo>

    </Third>

    <Logo>
    <img src=""  alt="logo"/>
    </Logo>

    </Container>
  )
}

export default HotelCard

const Container = styled.div`
 
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 10px;
  width: 100%;
  max-height: 300px;
  min-width: 100px; 
  background-color:white;
  z-index: 3; 

`

const Address = styled.div`


`
const Status = styled.div`


`
const RegNo = styled.div`


`
const Third = styled.div`
    


`
const Image = styled.div`

    & > img{
        height:50%;
        width:30%;

    }


`

const Details = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-around;

    



`
const Price = styled.div`
   /* flex-grow: 1.5; */
   flex-grow: 2;



`
const Room = styled.div`
    display:flex;
    justify-content: start;
    flex-grow:1;
    font-size: 13px;
    font-weight: 100;
    
   


`


const Bed = styled.div`
 flex-grow: 0.5;




`
const Baths = styled.div`
 flex-grow: 0.5;



`
const Feet = styled.div`
 flex-grow: 0.5;



`

const Logo = styled.div`
float: right;
    
   




`


