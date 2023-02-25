import { Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement, Stack, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { toast } from 'react-toastify';
  
export default function AdminRegister() {
    const [showPassword, setShowPassword] = useState(false);
    const [firstname, setFirstname ] = useState("");
    const [lastname, setLastname ] = useState("");
    const [username, setUsername ] = useState("");
    const [mobile, setMobile ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [error, setError] = useState("");
    
    const navigate = useNavigate();

    const IsValidate = () => {
      let isProceed = true;
      let errormessage = 'Please enter all the required feilds';
      if(username === null || username === '') {
        isProceed = false;
        toast.warning(errormessage);
      } else if(firstname === null || firstname === '') {
        isProceed = false;
        toast.warning(errormessage);
      } else if(email === null || email === '') {
        isProceed = false;
        toast.warning(errormessage);
      }else if(mobile === null || mobile === '') {
        isProceed = false;
        toast.warning(errormessage);
      }else if(password === null || password === '') {
        isProceed = false;
        toast.warning(errormessage);
      } else if(!isProceed) {
        toast.warning(errormessage);
      } else {
        if(/^[a-zA-Z0-0]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
  
        } else{
            isProceed = false;
            toast.warning("Please enter the valid email");
        }
      }
      return isProceed;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const adminData = { firstname, lastname, username, mobile, email, password };

        if(IsValidate()){
          fetch("http://localhost:7300/admin/register",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(adminData)
          }).then((res) => {
              navigate("/adminlogin");
              toast.success("Admin account created successfully!")
              console.log("admin created")
          }).catch((err) => {
            toast.error("Failed : Something is Wrong")
            console.log("Error")
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
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Admin Register
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstname" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" value={firstname} onChange={e => setFirstname(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastname">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" value={lastname} onChange={e => setLastname(e.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" value={username} onChange={e => setUsername(e.target.value)} />
              </FormControl>
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input type="number" value={mobile} onChange={e => setMobile(e.target.value)} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
              {error && <div className="error_msg">{error}</div>}
                <Button
                  loadingText="Submitting"
                  size="lg"
                  onClick={handleSubmit}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Register
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'} to="/adminlogin">Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
}