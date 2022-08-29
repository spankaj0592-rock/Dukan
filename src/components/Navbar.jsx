
import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'






function Navbar() {
  return (
    <Container>
<Wrapper>
<Left>
<Language>EN</Language>
<SearchContainer>
<Input/>
<Search  style={{color:"gray",fontSize:16}}/>
</SearchContainer>


</Left>
<Center><Logo>DUKAN</Logo></Center>
<Right>
<MenuItem>Register</MenuItem>
<MenuItem>SignIn</MenuItem>
<MenuItem>
<Badge badgeContent={4} color="secondary">
    <ShoppingCartOutlined/>
  </Badge>

</MenuItem>
</Right>
</Wrapper>

    </Container>



  )
}

export default Navbar

const Container =styled.div`

height:60px;
background-color:lightblue;
`

const Wrapper =styled.div`
display:flex;
padding:10px 20px;
justify-content:space-between;

`
const Left =styled.div`
flex:1;
display:flex;
align-items:center;
`
const Center =styled.div`
flex:1;
text-align:center;
`
const Logo =styled.h1`
font-weight:bold;
`

const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`

const Language =styled.span`
font-size:20px;
cursor:pointer;
`


const SearchContainer =styled.div`
border:0.5px solid black;
display:flex;
align-items:center;
margin-left:20px;
padding:5px; 
`
const Input =styled.input`
border:none;
`

const MenuItem =styled.div`
font-size:14px;
cursor:pointer;
margin-left:20px;
`