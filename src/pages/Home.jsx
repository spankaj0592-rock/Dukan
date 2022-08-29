import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import ImageSlider from '../components/ImageSlider'
import  styled from 'styled-components'

function Home() {
  return (
  
     <Container>

      <Announcement/>
<Navbar/>
<ImageSlider/>
</Container>
  

 

  )
}

export default Home
const Container =styled.main`

overflow-x:hidden;
  min-height: calc(100vh - 70px);
  padding: 2px;
    position: relative;
  &:before{
    background:url("/home-background.png") center center/cover
    no-repeat  fixed;
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

  }
  
  `