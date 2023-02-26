import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text, Divider, Button, Radio } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { BiRupee } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiCardPickup } from "react-icons/gi";
import { MdRecycling } from "react-icons/md";
import { useNavigate } from "react-router-dom"
// let pro = [
// {
//     name:"Battery Operated Three Wheel Ride-on Bike -  Green BlueBattery Operated Three Wheel Ride-on Bike - Green Blue",
//     price:6196.90,
//     quantity:1,
//     img:"https://cdn.fcglcdn.com/brainbees/images/products/thumb/10307320a.webp",
//     discount:35
// },
// {
//     name:"Battery Operated Three Wheel Ride-on Bike -  Green BlueBattery Operated Three Wheel Ride-on Bike - Green Blue",
//     price:6196.90,
//     quantity:1,
//     img:"https://cdn.fcglcdn.com/brainbees/images/products/thumb/10307320a.webp",
//     discount:35
// }
// ]



export const Cart = () => {

   const [pro, setPro] = useState([])
   const [total, setTotal] = useState(0)
   const [count, setCount] = useState(true)
   const [price, setPrice] = useState(0)
   const [discount, setdiscount] = useState(0)
   const toast = useToast()
   const navigate = useNavigate()

   const payment = () => {
      toast({
         title: 'Order Placed successful !',
         position: "top",
         isClosable: true,
         status: 'success'
      })
      return navigate("/")
   }

   const handelQuantity = (x, id) => {
      console.log(id)
   };


   const handelDelete = (id) => {
      console.log(id)
      fetch('http://localhost:7300/cart/cartdelete/' + id, {
         method: 'DELETE',
         headers: {
            "authorization": localStorage.getItem('token') //***To varify token*** */
         }
      })
         .then(res => res.text())
         .then(res => {
            console.log(res)
            toast({
               title: 'Product Removed From Cart !',
               position: "top",
               isClosable: true,
               status: 'warning'
            })
         })
   };


   const GetCart = () => {
      fetch('http://localhost:7300/cart/', {
         headers: {
            "authorization": localStorage.getItem('token') //***To varify token*** */
         },
         body: JSON.stringify()
      }).then(res => res.json())
         .then(res => {
            console.log(res)
            setTotal(res.total)
            setPro(res.data)
            setPrice(res.price)
            setdiscount(res.discount)
         })
         .catch(err => console.log(err))
   }


   useEffect(() => {
      GetCart()

   }, [])


   if (pro.length === 0) {
      return (
         <Box p='20px' mt='30px' mb='50px' w='80%' m='auto' textAlign='center'>
            <Image m='auto' src='https://bakestudio.in/assets/images/cart/empty-cart.gif' alt='cart_is_empty' />
            <Text fontSize='30px'>Hey! No items in your cart</Text>
         </Box>
      )
   }


   return (
      <Box bg='#f3f3f3' pb='30px' pt='40px'>

         <Flex w='90%' m='auto' justifyContent='space-around' flexDirection={{ base: 'column', md: 'row' }} >
            <Box w={{ base: '100%', md: '60%' }} m='auto' p='10px' boxShadow='xs' rounded='md' bg='white'>
               {pro && pro.map((ele) => (

                  <Box key={ele._id} mb='20px'>

                     <Flex gap='20px' p='10px' flexDirection={{ base: 'column', md: 'row' }} borderBottom='1px solid gray' borderTop='1px solid gray' >
                        <Box w={{ base: '90%', md: '18%' }} p='10px'>
                           <Image m='auto' w='100%' src={ele.thumbnail} alt={ele.title} />
                        </Box>

                        <Box w={{ base: '100%', md: '60%' }}>
                           <Text as='b'>{ele.title}</Text>
                           <Flex alignItems='center' gap='5px'><CiDeliveryTruck /> <Text>Get it by</Text>   <Text>{'Wednesday, Mar 01'}</Text></Flex>
                           <Text>Dispatch Within: 24 Hours</Text>

                        </Box>

                        <Box borderLeft='1px solid gray' pl='10px' w='25%' display={{ base: 'none', md: 'block' }}>
                           <Flex as='b' fontSize='20px' alignItems='center'><BiRupee /><Text>{ele.mrp}</Text></Flex>
                           <Flex gap='5px' alignItems='center' fontSize='15px'>
                              <Text>MRP</Text>
                              <Flex alignItems='center'><BiRupee /><Text as='del'>{Math.floor(ele.mrp + ((ele.mrp * ele.discount) / 100))}</Text></Flex>
                              <Text fontSize='13px' color='red'>{ele.discount} % OFF </Text>
                           </Flex>
                           <Text mb='10px' fontSize='15px'>MRP Includes all taxes</Text>

                           <Flex gap='3px'>
                              <Button onClick={() => handelQuantity(1, ele._id)} size='sm'>+</Button>
                              <Button size='sm'>Qty : {ele.quantity}</Button>
                              <Button onClick={() => handelQuantity(-1, ele._id)} size='sm'>-</Button>
                           </Flex>
                        </Box>

                     </Flex>

                     <Flex gap='5px'>
                        <Button onClick={() => handelDelete(ele._id)} leftIcon={<RiDeleteBin6Line />} bg='transparent' variant='solid'>REMOVE</Button>
                        <Button leftIcon={<FiHeart />} bg='transparent' variant='solid'>MOVE TO SHORTLIST</Button>
                     </Flex>

                  </Box>

               ))}

               <Box>

                  <Flex gap='20px' flexDirection={{ base: 'column', md: 'row' }}>
                     <Button size='md' w={{ base: '80%', md: '50%' }} colorScheme='orange'>
                        {localStorage.getItem('token') ? "GO FOR PAYMENT" : "LOGIN TO PLACE ORDER"}
                     </Button>

                     <Button onClick={payment} size='md' w={{ base: '80%', md: '30%' }} bg='gray' alignItems='center' >
                        <Flex justifyContent='space-between' gap='25px'>
                           <Box >
                              <Text fontSize='10px'>Total</Text>
                              <Text>{total}.00</Text>
                           </Box>
                           <Text>PLACE ORDER</Text>
                        </Flex>
                     </Button>

                  </Flex>
               </Box>



            </Box>

            <Box w={{ base: '100%', md: '30%' }} mt={{ base: '20px', md: '0px' }}>

               <Box>
                  <Flex gap='10px' alignItems='center' bg='pink' boxShadow='md' rounded='sm'>
                     <Image h='100px' src='https://cdn.fcglcdn.com/brainbees/checkout/gift-wrap.png' alt='gift' />
                     <Box w='70%'>
                        <Text as='b'>Buying For Loved one?</Text>
                        <Text fontSize='12px'>Gift Wrap and personalised Message on Card.</Text>
                     </Box>
                     <Radio isInvalid></Radio>
                  </Flex>
               </Box>

               <Box p='10px' mt='20px' boxShadow='md' rounded='sm' bg='white'>
                  <Text as='b' fontSize='lg'>Payment Information</Text>
                  <Flex mt='8px' gap='30px' justifyContent='space-between'>
                     <Text>Value of Product(s)</Text>
                     <Flex alignItems='center'><BiRupee />{''}<Text>{Math.floor(price)}:00</Text></Flex>
                  </Flex>
                  <Flex color='#c0ba42' gap='30px' justifyContent='space-between'>
                     <Text>Discount(-)</Text>
                     <Flex alignItems='center'><BiRupee />{''}<Text>{Math.floor(discount)}</Text></Flex>
                  </Flex>
                  <Flex gap='30px' justifyContent='space-between'>
                     <Text>Estimated GST(+)</Text>
                     <Flex alignItems='center'><BiRupee />{''}<Text>{Math.floor(total * 0.18)}</Text></Flex>
                  </Flex>
                  <Flex color='#c0ba42' mb='8px' gap='30px' justifyContent='space-between'>
                     <Text>Shipping(+)</Text>
                     <Flex alignItems='center'><BiRupee />{''}<Text>FREE</Text></Flex>
                  </Flex>
                  <Divider border='1px solid gray' />
                  <Flex mt='5px' mb='5px' gap='30px' as='b' justifyContent='space-between'>
                     <Text >Sub Total</Text>
                     <Flex alignItems='center'><BiRupee />{''}<Text>{Math.floor(total + (total * 0.18))}</Text></Flex>
                  </Flex>
                  <Divider border='1px solid gray' />
                  <Flex mt='5px' mb='5px' gap='30px' as='b' justifyContent='space-between'>
                     <Text >Final Payment</Text>
                     <Flex alignItems='center'><BiRupee />{''}<Text>{Math.floor(total + (total * 0.18))}</Text></Flex>
                  </Flex>
               </Box>

            </Box>
         </Flex>

         <Flex justifyContent='space-between' w='82%' m='auto' mt='30px' display={{ base: 'none', md: 'flex' }}>
            <Flex justifyContent='space-around' p='5px' w='65%' alignItems='center' gap='10px' fontSize='12px' bg='white' boxShadow='xs' rounded='md'>
               <Text as='b' fontSize='15px'>SHOP WITH CONFIDENCE</Text>
               <Flex alignItems='center' ><AiFillSafetyCertificate size='50px' color="#bbd139" /><Text>Hassle Free Returns</Text></Flex>
               <Flex alignItems='center' ><GiCardPickup size='50px' color="#bbd139" /><Text>Hand Picked Products</Text></Flex>
               <Flex alignItems='center' ><MdRecycling size='50px' color="#bbd139" /><Text>Shop safe & secure</Text></Flex>
            </Flex>
            <Box w='30%'></Box>
         </Flex>

      </Box>
   )
}