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
import { Link, useNavigate } from "react-router-dom";
import { Payment } from "../PaymentPage";



export const Cart = () => {
   const [user,setUser] = useState([])
   const [pro, setPro] = useState([])
   const [total, setTotal] = useState(0)
   const [count, setCount] = useState(true)
   const [price, setPrice] = useState(0)
   const [discount, setdiscount] = useState(0)
   const toast = useToast()
   const navigate = useNavigate()

   const handelpayment = () => {
         if(user[0].Address[0].city ===undefined || user[0].Address[0].add1===undefined || user[0].Address[0].pin===undefined || user[0].Address[0].add2===undefined
           || user[0].Address[0].city ==='' || user[0].Address[0].add1==='' || user[0].Address[0].pin==='' || user[0].Address[0].add2===''
            ){
            alert('User Address Is Incomplete !!!')
            return;
          }
         let Id = user[0]._id
         console.log(Id)
          fetch(`http://localhost:7300/cart/payment/${Id} `, {
            method: 'DELETE',
            headers: {
               "authorization": localStorage.getItem('token') //***To varify token*** */
            }
         }).then(res => res.text())
            .then(res => {
               console.log(res)
               alert('Payment Sucess ! Continue with shopping, Thank-you')
               setCount(count + 1)
               return navigate('/')
            })
         
   }

   const getUser = () => {
      fetch('http://localhost:7300/users/get', {
         headers: {
            "authorization": localStorage.getItem('token') //***To varify token*** */
         },

         body: JSON.stringify()
      }).then(res => res.json())
         .then(res => {
            console.log("User :",res)
            setUser(res)
         }
         )
         .catch(err => console.log(err))
   }

   

   const handelQuantity = (x, id) => {
      console.log(id)
   };


   const handelDelete = (id) => {
      console.log(id)
      fetch('https://lonely-long-johns-fish.cyclic.app/cart/cartdelete/' + id, {
         method: 'DELETE',
         headers: {
            "authorization": localStorage.getItem('token') //***To varify token*** */
         }
      }).then(res => res.text())
         .then(res => {
            console.log(res)
            toast({
               title: "Product Removed From Cart !",
               position: "bottom",
               isClosable: true,
               status: 'warning'
            })
            // alert('Product Removed From Cart !')
            setCount(count + 1)
         })
   };



   const GetCart = () => {
      fetch('https://lonely-long-johns-fish.cyclic.app/cart/', {
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
         }
         )
         .catch(err => console.log(err))
   }

   const updateUser = (data) => {
      console.log(data)
     
      if(data.add1==='' || data.pin==="" || data.add2==='' || data.city===''){
       return(alert('Fill Information Correctly !'))
      }

      fetch('http://localhost:7300/users/profileupdate', {
       method: 'POST',
       headers: {
         "Content-type": "application/json",
         "authorization": localStorage.getItem('token')
       },
       body: JSON.stringify(data)
     }).then(res => res.json())
       .then(res => {
           alert(res.msg)
           setCount(count+1)
       }
 
       )
       .catch(err => console.log(err))
   }


   useEffect(() => {
      GetCart()
      getUser()
   }, [count])



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
                   <Button onClick={handelpayment} size='md' w={{ base: '80%', md: '50%' }} colorScheme='orange'>
                   GO FOR PAYMENT
                   </Button>
                  <Payment  updateUser={updateUser}/>  
                      
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

               <Box bg='orange' p='5px'>
                 <Text as='b'>Email: {user[0].email && user[0].email}</Text>
                 <Divider/>
                 <Text as='b'>Contact: {user[0].contact && user[0].contact}</Text>
                 <Divider/>
                 <Text>Address: {user[0].Address[0].city && user[0].Address[0].city}:{user[0].Address[0].pin && user[0].Address[0].pin}</Text>
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