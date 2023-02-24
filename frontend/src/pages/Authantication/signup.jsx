import React,{useState} from "react";
import { Box,Image,Text,Input,FormLabel} from '@chakra-ui/react';
import { Link } from "react-router-dom";

import logo from '../../images/logo_type1.jpg'

let user = {
 name:'',
 contact:'',
 email:'',
 password:''
}
export const Register = () => {
  const [User,setUser] = useState(user)

  const GotoRegister = async(payload) => {
      //console.log(payload)
      fetch('http://localhost:7300/users/register',{
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    }).then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  const handelChange = (e) => {
     let {name,value} = e.target;
     let UserValue = name === "contact" ? Number(value) : value; 
     setUser({...User,[name]:UserValue})
  }

  const handelsubmit = (event) => {
    event.preventDefault()
    GotoRegister(User)
    setUser(user)
  } 



    return(

      <Box w={{base:"90%",md:'25%'}} m='auto'>
             <Image  w='250px'm='auto' src={logo} alt='first cry' />
             <br />
             <Text fontSize='2xl' as='b'>Register</Text>
             <br /><br />
             <form onSubmit={handelsubmit} >
             <FormLabel fontSize='sm'color='gray' >Full Name</FormLabel>
             <Input onChange={handelChange} name='name' value={User.name} placeholder='Enter Your Full Name' size='md' />
           
             <FormLabel mt='15px' fontSize='sm'color='gray' >Contact Numbar</FormLabel>
             <Input onChange={handelChange} name='contact' value={User.contact}  placeholder='Enter Your Mobile Number' size='md' />
   
             <FormLabel mt='15px' fontSize='sm'color='gray' >Email ID</FormLabel>
             <Input onChange={handelChange} name='email' value={User.email} placeholder='Enter Your Email ID' size='md' />
           
             <FormLabel mt='15px' fontSize='sm'color='gray' >Password</FormLabel>
             <Input onChange={handelChange} name='password' value={User.password}  placeholder='Enter Your Password' size='md' />
             <br /><br />
             <Input type='submit' size='md' bg='orange' />
             </form>
      </Box>
      
    )

 }