import React, { useEffect, useState } from "react";
import { useToast } from '@chakra-ui/react';
import { BiRupee } from "react-icons/bi";
import { Box, Flex, Text, Button, Image, SimpleGrid} from '@chakra-ui/react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Sidebar } from "./sidebar";
import axios from "axios"
import { useLocation, useParams } from "react-router-dom";


let four = [<BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStar size='13px' />]
let fournhalf = [<BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarHalf size='13px' />]
let two = [<BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStar size='13px' />, <BsStar size='13px' />, <BsStar size='13px' />]
let one = [<BsStarFill size='13px' />, <BsStar size='13px' />, <BsStar size='13px' />, <BsStar size='13px' />, <BsStar size='13px' />]
let three = [<BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStar size='13px' />, <BsStar size='13px' />]
let threenhalf = [<BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarHalf size='13px' />, <BsStar size='13px' />]

const ProductsPage = () => {
  
  const [loading, setLoading] = useState(true)
  const [ProdArr, setProdArr] = useState([])
  const location = useLocation()
  console.log(location.search)
  const toast = useToast()
  const params = useParams()
  


  const AddtoCart = (payload) => {

    let data = {
      title: payload.title,
      thumbnail: payload.thumbnail,
      mrp: payload.mrp,
      Cart_quantity: 1,
      discount: payload.discount
    }

    if(!localStorage.getItem('token')){
         return(
          toast({
            title: 'User Needs to Login First !',
            position: "bottom",
            isClosable: true,
            status: 'warning'
          })
         ) 
    }

    fetch('http://localhost:7300/cart/addtocart', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "authorization": localStorage.getItem('token')
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => {
        {
          // alert(res.msg)
          toast({
            title: res.msg,
            position: "bottom",
            isClosable: true,
            status: 'warning'
          })
        }
      }

      )
      .catch(err => console.log(err))
  }


  const getAllProducts = async () => {

    if (location) {
      await axios.get(`https://lonely-long-johns-fish.cyclic.app/products/get/${location.search}`).then((res) => {
        // console.log(res.data)
        setLoading(false)
        setProdArr(res.data)
      })
    }
    else {
      await axios.get(`https://lonely-long-johns-fish.cyclic.app/products/get`).then((res) => {
        // console.log(res.data)
        setLoading(false)
        setProdArr(res.data)
      })
    }

  }

  useEffect(() => {
    getAllProducts()
  }, [location])

  

 if(loading === true)(
    <Box p='20px' mt='30px' mb='50px' w='80%' m='auto' textAlign='center'>
      <Image m='auto' src='https://cdn.dribbble.com/users/1293970/screenshots/3166571/media/c1fbfcab6c55fd5444aaa573c749bd79.gif' alt='Loaging.....' />
      <Text fontSize='18px' fontWeight='bold'>Loading .....</Text>
    </Box>
 )

  return (
    <Box bg='#ffffff' mt='20px' mb='30px'>
      <Flex w='95%' m='auto' gap='20px' flexDirection={{ base: 'column', md: 'row' }}>
        <Box w='20%' display={{ base: 'none', md: 'block' }}>
          <Text p='10px' fontWeight='bold' bg='#eeeeee'>FILTER BY</Text>
          <Sidebar />
        </Box>

        <Box w={{ base: '95%', md: '80%' }} >
          {ProdArr.length === 0 ? (
            <Box p='20px' mt='30px' mb='50px' w='80%' m='auto' textAlign='center'>
              <Image m='auto' src='https://www.aamtrading.com/assets/img/nproduct.png ' alt='cart_is_empty' />

            </Box>
          ) : <SimpleGrid m='auto' columns={{ base: 2, md: 4 }} spacing='5px'>

            {ProdArr && ProdArr.map((ele) => (
              <Box  key={ele._id} p='10px' _hover={{ boxShadow: 'base', rounded: 'md', border: '1px solid gray' }}>
                <Image w='100%' src={ele.thumbnail} alt={ele.title} />
                <Text lineHeight='15px' fontSize='14px'>{ele.title}</Text>
                <Text mt='5px' fontSize='12px' lineHeight='13px'>{ele.description}</Text>

                <Flex gap='3px' pt='5px' mt='10px' pb='5px' color='#f39019' borderTop='1px solid gray' borderBottom='1px solid gray'>
                  {ele.rating === 1 ? one : '' || ele.rating === 2 ? two : '' || ele.rating === 3 ? three : '' || ele.rating >= 3.1 && ele.rating < 4 ? threenhalf : '' || ele.rating === 4 ? four : '' || ele.rating >= 4.1 ? fournhalf : ''}
                </Flex>

                <Flex gap='5px' mt='10px' fontSize={{ base: '12px', md: '15px' }}>
                  <Flex alignItems='center' as='b' color='#282828'><BiRupee /><Text>{ele.mrp}</Text></Flex>
                  <Flex as='del' alignItems='center'><BiRupee />{Math.floor(ele.mrp + ((ele.mrp * ele.discount) / 100))}</Flex>
                  <Flex color='#e53935'>({ele.discount}% Off)</Flex>
                </Flex>

                <Flex alignItems='center' gap='5px' flexDirection={{ base: 'column', md: 'row' }}>
                  <Text fontSize='12'>Get it by</Text>
                  <Text as='b' fontSize='12'>Wednesday, Mar 1</Text>
                </Flex>

                <Flex mt='12px' gap='5px'>
                  <Button onClick={() => AddtoCart(ele)} colorScheme='orange'>ADD TO CART</Button>
                  <Button display={{ base: 'none', md: 'block' }}>SHORTLIST</Button>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>

          }
        </Box>

      </Flex>
    </Box>




  );
};

export default ProductsPage;
