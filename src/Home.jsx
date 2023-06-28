import React, { Fragment } from 'react'
import Navbar from './Navbar.jsx'
import Banner from './Banner.jsx'
import { Box, styled } from '@mui/material'

const Container = styled(Box)`
  padding:10px;
  background: #F2F2F2;
`

const Home = () => {
  return ( 
    <>
      <Navbar/>
      <Container>
        <Banner/>
      </Container>
    </>
  )
}

export default Home;