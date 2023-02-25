//import { Button } from '@chakra-ui/button'
import { Box, Divider, Image, SimpleGrid } from '@chakra-ui/react'
import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/popover'
import React from 'react'
import { shopbycatboy,shopbycalboy, fashion, footware, shopbyage, shopbyprice, shopbybrands } from './Navbar2'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BoysFashion = () => {
  return (
    <BoysFashionWrapper>
    <Popover
    trigger="hover"
    isLazy
    placement="bottom"
    >
    <PopoverTrigger>
      <Link to="/products" state={{ query: '?catagory=boystshirt' }}><p>BOY FASHION</p></Link>
    </PopoverTrigger>

    <PopoverContent borderRadius="none"  height={"60vh"} width={"98vw"}>
    <Addcartscroll>
      <PopoverBody padding={"20px 50px"}>

      <SimpleGrid minChildWidth='220px' spacing='10px'>
        <Box maxWidth={"220px"} >
            <h1>SHOP BY CATEGORY</h1>
            <ul>
                {
                    shopbycatboy.map((data, index)=>{
                        return <li key={index+1}>{data}</li>
                    })
                }
            </ul>
            <Divider border={"1px solid lightgray"} maxWidth={"180px"} margin={"20px 0px"}/>
        </Box>
        <Box >
            <h1>SHOP BY COLLECTION</h1>
            <ul>
                {
                    shopbycalboy.map((data, index)=>{
                        return <li key={index+2}>{data}</li>
                    })
                }
            </ul>
            <Divider border={"1px solid lightgray"} maxWidth={"180px"} margin={"20px 0px"}/>
            <h1>FASHION ACCESSORIES</h1>
            <ul>
                {
                    fashion.map((data, index)=>{
                        return <li key={index+2}>{data}</li>
                    })
                }
            </ul>
            <Divider border={"1px solid lightgray"} maxWidth={"180px"} margin={"20px 0px"}/>
            <h1>FOOTWEAR</h1>
            <ul>
                {
                    footware.map((data, index)=>{
                        return <li key={index+2}>{data}</li>
                    })
                }
            </ul>
            <Divider border={"1px solid lightgray"} maxWidth={"180px"} margin={"20px 0px"}/>
        </Box>
        <Box >
        <h1>SHOP BY AGE</h1>
            <ul>
                {
                    shopbyage.map((data, index)=>{
                        return <li key={index+3}>{data}</li>
                    })
                }
            </ul>
            <Divider border={"1px solid lightgray"} maxWidth={"180px"} margin={"20px 0px"}/>
            <h1>SHOP BY PRICE</h1>
            <ul>
                {
                    shopbyprice.map((data, index)=>{
                        return <li key={index+3}>{data}</li>
                    })
                }
            </ul>
            <Divider border={"1px solid lightgray"} maxWidth={"180px"} margin={"20px 0px"}/>
        </Box>
        <Box  >
        <h1>SHOP BY BRANDS</h1>
            <ul>
                {
                    shopbybrands.map((data, index)=>{
                        return <li key={index+4}>{data}</li>
                    })
                }
            </ul>
            <Divider border={"1px solid lightgray"} maxWidth={"180px"} margin={"20px 0px"}/>
        </Box>
        <Box maxWidth={"350px"} >
                <Image  src="https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_boy_sio_060123.jpg" alt="Boys fashion"/>
        </Box>
    </SimpleGrid>

      </PopoverBody>
    </Addcartscroll>
    </PopoverContent>
  </Popover></BoysFashionWrapper>
  )
}

export default BoysFashion

const BoysFashionWrapper = styled.div`
h1{
    font-weight: bolder;
    text-align: left;
}
li{
    list-style-type: none;
    cursor : pointer;
    font-size: 13px;
    color: #757575;
    line-height: 18px;
    margin: 5px ;
    :hover{
        font-weight: 400;
        color: black;
        font-size: 14px;
    }
    text-align:left;
}
`
const Addcartscroll = styled.div`
    ${'' /* max-height: 580px; */}

    overflow: auto;
    border-bottom: 0px solid black;
::-webkit-scrollbar {
    width: 3px;
  }
::-webkit-scrollbar-track {
    background-color: rgb(209, 209, 209);
  }
::-webkit-scrollbar-thumb {
    background-color: rgb(40, 39, 39);
  }
`