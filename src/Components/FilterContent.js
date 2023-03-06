import React from 'react'
;import styled from "styled-components";
import HotelCard from './HotelCard';

function Filter() {
  return (
    <Container>

      <Section>
        <Select>
        <input  placeholder="select"/>
        </Select>

        <Text>
        <p> 1000 results</p>
        </Text>
      </Section>

      <HotelCardSection>
        <CardRow>
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </CardRow>

      <CardRow>
      <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </CardRow>

        </HotelCardSection>



    </Container>
  )
}

export default Filter


const Section = styled.div`
    display : flex;
    position: fixed;
    top:130px;
    justify-content: space-between;
    width:100%;
    align-items:center;
    
  
    
   
`

const Select = styled.div`
margin-left:30px;

& > input{
    width:180px;
    height:50px;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    margin-left:20px;
}  
   
`
const Text = styled.div`
  margin-right:30px;
    
   
`

const Container = styled.div`
  max-width: 1500px;
  margin-right:10px;
   margin-left:10px;
  
    
   
`

const HotelCardSection = styled.div`
    display : flex;
    flex-direction: column;
    position: fixed;
    top:200px;
  
    justify-content: space-around;
    width:100%;

   
`
const CardRow = styled.div`
  display:flex;
  /* flex-direction: column; */
 
    
   
`
