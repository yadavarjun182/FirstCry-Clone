import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

export default function AdminLogin() {

  const [username, setUsername ] = useState("");
  const [password, setPassword ] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  })

  const validate = () => {
    let result = true;
    if(username === "" || username === null) {
      result = false;
      toast.warning("Please Enter id");
    }
    if(password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  }
  const handleLogin = (e) => {
    e.preventDefault();
        const adminData = { username, password };
        console.log(adminData);
      if(validate()){
        fetch("http://localhost:7300/admin/login",{
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(adminData)
        }).then((res) => {
          // Cookies.set('token', res.data.token)
          navigate("/adminDashboard");
          toast.success("Admin login successfully!")
        }).catch((err) => {
          toast.error("Something went wrong")
      });
    }     
  };

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Admin Login</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Username</FormLabel>
                <Input type="username" value={username} onChange={e => setUsername(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={handleLogin}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
}