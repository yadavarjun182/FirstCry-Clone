import React, { useState,useRef,useEffect } from "react";
import { Box,Radio, Text, Input,Flex,RadioGroup,Stack, FormLabel, Divider,Image,Button,FormControl} from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom";
import logo from './images/logo.jpg'
import { useDisclosure } from '@chakra-ui/react';


let user = {
    add1:'',
    add2:'',
    pin:'',
    city:''
  }

export const Payment= ({updateUser}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const toast = useToast()
    const [info,setInfo] = useState(user)
    const [coun,Setcoun] = useState(0)

    const handelChange = (e) => {
        let { name, value,type } = e.target;
        let UserValue = type === "number" ? Number(value) : value;
        setInfo({ ...info, [name]: UserValue })
      }

//add user address...................




    const handelSubmit = () => {
        console.log(info)
      
        updateUser(info)
        setInfo(user)
    }  

    // useEffect(()=>{
    // },[coun,updateUser])


    return (
      <Box >
        <Button ref={btnRef} colorScheme='teal' zIndex={99} onClick={onOpen}>
          Update Address
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent zIndex={99999} >
            <DrawerCloseButton />
            <DrawerHeader>Update your account</DrawerHeader>
  
            <DrawerBody fontSize='12px'>
           
               <Text>Adress-1/Building/Room Number:</Text>
              <Input  name='add1' value={info.add1} onChange={handelChange} mb='10px' placeholder='Building & Room Number' type='text'size='sm' />
               <Text  >Adress-2/Landmark/Area:</Text>
               <FormControl isRequired><Input isRequired name='add2' value={info.add2} onChange={handelChange} mb='10px' placeholder='Adress-2/Landmark/Area' type='text'size='sm' /></FormControl>
                <Flex>
                <Box>
                <Text >City:</Text>
               <Input  name='city' value={info.city} onChange={handelChange} mb='10px' placeholder='City name' type='text'size='sm' />
                </Box>
                <Box>
                <Text>Pincode:</Text>
               <Input  name='pin' value={info.pin} onChange={handelChange} mb='10px' placeholder='Pincode' type='number'size='sm' />
                </Box>
                </Flex>
               
                 <Box>
                 <RadioGroup defaultValue='2'>
                   <Stack spacing={5} direction='row'>
                     <Radio colorScheme='red' value='1'>
                      COD
                     </Radio>
                     <Radio colorScheme='green' value='2'>
                       UPI
                     </Radio>
                   </Stack>
                 </RadioGroup>
                 
                 <Image w='80%' m='auto' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAACmCAMAAABqbSMrAAACE1BMVEX///9wcG5mOrZve/P//v9sbGr///3pdib///uys7Bpa2X6+vi2trN7e3r39/X//v6Xl5ZoaGYJf0JmObj/+//m5uaEhITKvd3R0dHKysr///aurq5lZWPs7OzZ2dkAuvG9vb0AAACx7fNbLKyenp6amphvfO9Tx+Onp6f2//+CgoIAsubv//8AczN1dXXDw8NVVVUUFBRISEg3NzcEMm3O2uIAFmaNn7jD7/kLfkMgICApKSlSUlA9PT0AKXIAtPcGMHIAH2sYtuBFkWnmdyVvefhiNr4AHmCYoduJb74AElXt8fqagMXq4e0DMmult8MACVbR1u736tzW697TiVzcaADsw6Cy18QAZiTefDt3rI7om2QrhFX23Mabxa3psYpTnnHhh03mfkHH3LjwzauTgTzMfjXSfjL76NEvdjFefT14dzkAfDLycCnM7+AVfExQdTHBgzUmdybpuI2zgjW8kVSavZo0knXRbiTYrJBllnx9hd20uealjca1pM/UyeCTmehgO6d5WLN9jOFvTqBXIbB7YKtSy9SDZcNQYItPaYqp3exjeJktRnC9x9UAvN/oqqfZRz7kNifdSkbPu+h1ULnXa1roQSDowbpJH5Xde4T988bdjIRqcP/z2Hf8uwDiiwZ+jKD2zE0qd+3yzUabu+IweN7z24WPqiJ0nDMloj5suohzoeU3jLkhm1CBsMRpcNB9VrDiAAAWZklEQVR4nO1di18bx3YeYBmG6LESegB6WViyrMUyQrwNBguMBLbAILvYN4kTJ43vTdJLnKTp47bIPOLHjYMfuW6cJm3TNHGTtkmb8if2nNldsSts0CIpWfe33y8R2t3RjubTOWe+c2YkE2LBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFg4ARejOCPKjoD6zoAPdc0ZQiPL+0m/FMOztMuziwW2jStt2fmQLthtE2qbeKRlXIB+yi1SgQJl0ySvsJdNUcIZekuE6uK3NrbT1E2Q3Emp9ySCanGqvra34YrdCWODPApywS2clwho21rqgy93E4e4+uG1Eadua5oftrU1G0Rrc26sI0eydlcuEUYFc+c0VQWrgaOuApDJqd/jgtkGlbchHMAw5DPPV1OqX7xTX9MokSi6vvBwg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' alt='UPI' />
                
                 <Input mt='15px'  name='upi' onChange={handelChange} mb='10px' placeholder='UPI-id' type='text'size='sm' />
                 </Box>

               
            </DrawerBody>
    
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={handelSubmit}>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }