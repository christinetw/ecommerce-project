import React from 'react';
import { useState } from 'react';
import Carousel from 'styled-components'
import styled from 'styled-components';
import ArrowLeftOutlined from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlined from '@material-ui/icons/ArrowRightOutlined';
const Container = styled.div`
weight :100%;
height :100vh;
display:flex;

position:relative;
`
const Arrow=styled.div`
width:50px;
height:50px;
background-color:white;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top: 0;
bottom: 0;
left:${props=>props.direction==='left'&&'10px'};
right:${props=>props.direction==='right'&&'10px'};
margin: auto;
cursor:pointer;
opacity:0.5;
`
const Wrapper =styled.div`
height=100%;
`
const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;`
const ImageContainer=styled.div`
height:100%;
flex:1;`
const Image=styled.img`
height:80%;
`
const InfoContainer=styled.div`
flex:1;
padding:50px;`
const Title=styled.h1`
`
const Desc=styled.p`
`
const Button=styled.button`
`
export const Slider = () => {
  return (
    <Container>
      <Arrow direction='left'>
<ArrowLeftOutlined/>
      </Arrow>
      <Wrapper> 
        <Slide>
        <ImageContainer>
<Image src='https://static.zara.net/photos///2022/V/0/1/p/4360/045/802/3/w/1126/4360045802_1_1_1.jpg?ts=1641308957450'/>
        </ImageContainer>
        <InfoContainer>
<Title>Winter Sale</Title>
<Desc> Latest trends in clothing for women, men & kids </Desc>
<Button>SHOW NOW</Button>
        </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction='right'>
  <ArrowRightOutlined/>   
      </Arrow>
    </Container>
  )
}
