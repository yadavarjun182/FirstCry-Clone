import React, { useState } from "react";
import { Box, Text, Input, FormLabel, Divider } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom";


let user = {
  email: '',
  password: ''
}
export const Login = () => {
  const navigate = useNavigate()
  const [User, setUser] = useState(user)
  const toast = useToast()

  const GotoLogin = async (payload) => {
    fetch('http://localhost:7300/users/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        toast({
          title: res.msg || res.err,
          position: "top",
          isClosable: true,
          status: res.msg ? 'success' : 'warning'
        })
        return navigate("/")
      })
      .catch(err => console.log(err))
  }

  const handelChange = (e) => {
    let { name, value } = e.target;
    let UserValue = name === "contact" ? Number(value) : value;
    setUser({ ...User, [name]: UserValue })
  }

  const handelsubmit = (event) => {
    event.preventDefault()
    GotoLogin(User)
    setUser(user)
  }



  return (
    <Box w={{ base: "90%", md: '25%' }} m='auto' h={"70vh"} mt={{ base: "10px", md: 30 }}>
      {/*<Image  w='250px'm='auto' src={logo} alt='first cry' />*/}


      <Text fontSize='2xl' as='b' textAlign={'center'}>Login</Text>
      <br /><br />
      <form onSubmit={handelsubmit}>
        <FormLabel fontSize='sm' color='gray' >Email ID</FormLabel>
        <Input onChange={handelChange} name='email' value={User.email} placeholder='Enter Your Email ID' size='md' />
        <br /><br />
        <FormLabel fontSize='sm' color='gray' >Password</FormLabel>
        <Input onChange={handelChange} name='password' value={User.password} placeholder='Enter Your Password' size='md' />
        <br /><br />
        <Input type='submit' size='md' bg='orange' />
      </form>

      <Link to='/register' >
        <Text fontSize='sm' color='blue' mt='20px'>New to FirstCry? Register Here</Text>
      </Link>

      <Divider borderColor='blackAlpha' mt='15px' mb='15px' ></Divider>

      <Text fontSize='sm'>By continuing, you agree to Firstcry's {''} <Link color="blue" >Conditions of Use</Link>and {''}<Link>Privacy Notice</Link>.</Text>

    </Box>

  )

}
