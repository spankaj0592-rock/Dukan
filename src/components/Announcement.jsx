import React from 'react'
import styled from 'styled-components'

function Announcement() {
  return (
  <Container>
  Super Deal ! Free Shipping  ✈  Order Above 499 Rs.
  </Container>
  )
}

export default Announcement

const Container=styled.div`
height:30px;
background-color:teal;
color:white;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:500;
`