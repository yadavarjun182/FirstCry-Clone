import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  ListItem,
  UnorderedList,Image,Input,InputGroup,InputRightAddon
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {GoLocation} from 'react-icons/go';
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineSearch} from 'react-icons/ai';
import {Link} from "react-router-dom";
import Navbar2 from "./Navbar2";
import NavLink from "./NavLink";
//import {useState} from "react";

const Links = [
    {name: "BOYS FASHION",id: "/"},
    { name: "GIRLS FASHION", id: "/" },
    { name: "FOOTWEAR", id: "/" },
    { name: "LOGIN", id: "/login" },
    
   
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
//const [login,logout]=useState(false)
 
  return (
    <>
      <Box bg={'white'} px={4}  position='sticky' top={0} zIndex={9999}  m={'auto'} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} w='95%' m='auto'>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={5} alignItems={"center"}>
                      <Link to={'/'}>
                      <Image src='../logo.png' w='180px' pt={7}/>
                      </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
                      >
                          <InputGroup border={'1px solid lightgray'} borderRadius='10px' w={'auto'}>
                              <Input placeholder="Search for a Category, Brand or Product" w={{base:"auto",lg:350}} border={'none'} fontSize={12} />
                              <InputRightAddon children={<AiOutlineSearch fontSize={22} color='#c2aa30'/>} bg='transparent' border={'none'} />
                          </InputGroup>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <UnorderedList display={{ base: "none", md: "flex" }} listStyleType="none" gap={2} fontSize={12}>
              <ListItem display={'flex'} gap={1} pt={1}><GoLocation/> Select location |</ListItem>
              <ListItem pt={1}>Stores & Preschools |</ListItem>
              <ListItem pt={1}>Support |</ListItem>
              <ListItem pt={1}>Track Order |</ListItem>
              <ListItem pt={1}>FirstCry Parenting |</ListItem>
                          <Link to={'/login'}>
                          <ListItem pt={1}>Login/Register |</ListItem>
                          </Link>
                          <ListItem display={'flex'} gap={1} alignItems='center'><AiOutlineHeart /> Shorlist |</ListItem>
                          <Link to={'/cart'}>
              <ListItem display={'flex'} gap={1} alignItems='center'><AiOutlineShoppingCart fontSize={30}/> Cart</ListItem>
                          </Link>
            </UnorderedList>
                  </Flex>
                  <Link to={'/cart'} onClose>
                  <AiOutlineShoppingCart fontSize={30}/>
                  </Link>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>

                             {Links.map((link, i) => (
                                <NavLink
color="black"
                                    key={i}
                                    to={link.id}
                                    name={link.name}
                                    w="xm"
                                    textalign="center"
                                    onClick={() => onClose()}
                                />
                            ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
<Navbar2/>
      </>
  );
}
