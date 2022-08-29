import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };

  return (

    <Container>

 <Carousel {...settings}>

 <Wrap>
 <Title>
 <h1>SUMMER SALE </h1>
    <p>DON'S MISS THE SALE FLAT 30 % OFF ON CLOTHING</p>
    <button>SHOP NOW</button>
 </Title>
<img alt='no' src='https://media.istockphoto.com/photos/
shopping-woman-picture-id1199014988?b=1&k=20&m=1199014988&s=612x612&w=0&h=EXfJHx3r9H9d5QDTYctD3YK-6Hwtat1aR3Y_hxP6ADs='/>

    </Wrap>

    <Wrap>
    <Title>
    <h1>SUMMER SALE </h1>
    <p>DON'S MISS THE SALE FLAT 30 % OFF ON CLOTHING</p>
    <button>SHOP NOW</button>
    </Title>
<img alt='no' src='https://media.istockphoto.com/photos/
shopping-woman-picture-id1199014988?b=1&k=20&m=1199014988&s=612x612&w=0&h=EXfJHx3r9H9d5QDTYctD3YK-6Hwtat1aR3Y_hxP6ADs='/>
 
    </Wrap>

   </Carousel>

    </Container>
  
  )
}

export default ImageSlider
const Container =styled.div`
 position: relative;

`

const Title =styled.div` 
z-index:2;
position: absolute;
margin-top:200px;
margin-left:100px;
padding:10px;
&: h1 {
text-align: center;
font-weight: bold;
}
   
&: p {
letter-speed:5px;
}
&: button {
    border:1px solid;
    padding:10px;
}

`

const Carousel = styled(Slider)`



ul li button{
    &:before{
        font-size:10px;
        color:red;
    }
}

li.slick-active button:before{
    color:red;
}

.slick-list{
    overflow:visible;

}

button{
    z-index:1;
}
`

const Wrap =styled.div`
 position: relative;


cursor:pointer;
img{
    position: relative;
  height:500px;
    border:4px solid transparent;
    border-radius:4px;
    z-index:-1;
    object-fit:cover ;
width:100%;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition:300ms;


}
`