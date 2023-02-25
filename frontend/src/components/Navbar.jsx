//import {
//  Box,
//  Flex,
//  HStack,
//  IconButton,
//  useDisclosure,
//  useColorModeValue,
//  Stack,
//  ListItem,
//  UnorderedList,Image,Input,InputGroup,InputRightAddon
//} from "@chakra-ui/react";
//import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
//import {GoLocation} from 'react-icons/go';
//import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineSearch} from 'react-icons/ai';
//import {Link} from "react-router-dom";
//import Navbar2 from "./Navbar2";
//const Links = ["Dashboard", "Projects", "Team"];

//const NavLink = ({ children }) => (
//  <Link
//    px={2}
//    py={1}
//    rounded={"md"}
//    _hover={{
//      textDecoration: "none",
//      bg: useColorModeValue("gray.200", "gray.700"),
//    }}
//    href={"#"}
//  >
//    {children}
//  </Link>
//);

//export default function Navbar() {
//  const { isOpen, onOpen, onClose } = useDisclosure();

//  return (
//    <>
//      <Box bg={'white'} px={4} position='sticky' top={0} zIndex={9999}>
//        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} w='95%' m='auto'>
//          <IconButton
//            size={"md"}
//            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//            aria-label={"Open Menu"}
//            display={{ md: "none" }}
//            onClick={isOpen ? onClose : onOpen}
//          />
//          <HStack spacing={5} alignItems={"center"}>
//                      <Link to={'/'}>
//                      <Image src='../logo.png' w='90px' />
//                      </Link>
//            <HStack
//              as={"nav"}
//              spacing={4}
//              display={{ base: "none", md: "flex" }}
//                      >
//                          <InputGroup border={'1px solid lightgray'} borderRadius='10px' w={'auto'}>
//                              <Input placeholder="Search for a Category, Brand or Product" w={{base:"auto",lg:350}} border={'none'} fontSize={12} />
//                              <InputRightAddon children={<AiOutlineSearch fontSize={22} color='#c2aa30'/>} bg='transparent' border={'none'} />
//                          </InputGroup>
//            </HStack>
//          </HStack>
//          <Flex alignItems={"center"}>
//            <UnorderedList display={{ base: "none", md: "flex" }} listStyleType="none" gap={2} fontSize={12}>
//              <ListItem display={'flex'} gap={1}><GoLocation/> Select location |</ListItem>
//              <ListItem>Stores & Preschools |</ListItem>
//              <ListItem>Support |</ListItem>
//              <ListItem>Track Order |</ListItem>
//              <ListItem>FirstCry Parenting |</ListItem>
//                          <Link to={'/login'}>
//                          <ListItem>Login/Register |</ListItem>
//                          </Link>
//                          <ListItem display={'flex'} gap={1} alignItems='center'><AiOutlineHeart /> Shorlist |</ListItem>
//                          <Link to={'/cart'}>
//              <ListItem display={'flex'} gap={1} alignItems='center'><AiOutlineShoppingCart/> Cart</ListItem>
//                          </Link>
//            </UnorderedList>
//          </Flex>
//        </Flex>

//        {isOpen ? (
//          <Box pb={4} display={{ md: "none" }}>
//            <Stack as={"nav"} spacing={4}>
//              {Links.map((link) => (
//                <NavLink key={link}>{link}</NavLink>
//              ))}
//            </Stack>
//          </Box>
//        ) : null}
//      </Box>
//<Navbar2/>
//    </>
//  );
//}

import {
    Box,
    Button,
    Image,
    Input,
    InputGroup,
    InputRightElement,
  
  } from "@chakra-ui/react";
  import React from "react";
  import styled from "styled-components";
  import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
  import { CiHeart, CiLocationOn } from "react-icons/ci";
  import { BsCart } from "react-icons/bs";
   import { category } from './Navbar2';
  
  import BoysFashion from "./Drop1";
  import GirlsFashion from "./Drop2";
  import DeskstopNavList from "./Subpart1";
  import TabletNavbar from "./Subpart2";
  import { Link } from "react-router-dom";
  const Navbar = () => {
   
    return (
      <NavbarWrapper>
        <Box className="nav-top">
          <Box className="nav-top-left">
            <Link to="/">
              {" "}
              <Image className="logoimg" src='../logo.png' alt="logo" />
            </Link>
            <Box sx={{ marginRight: "5px" }}>
              <InputGroup>
                <Input
                  htmlSize={38}
                  width="100%"
                  fontSize={"13px"}
                  placeholder="Search for Category, Brand or Products"
                  focusBorderColor="lightgray"
                  borderStyle={"dotted"}
                  borderRadius={"0px"}
                />
                <InputRightElement>
                  <Button
                    children={<Search2Icon size="md" />}
                    backgroundColor="Background"
                    color={"#ff7043"}
                    size="md"
                  ></Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Box>
          <Box className="nav-top-right">
            <Box sx={{ display: "flex" }}>
              <Box sx={{ paddingTop: "5px" }}>
                <Box className="desktop-nav-list">
                  <DeskstopNavList />
                </Box>
                <Box className="tablet-nav-list">
                  <TabletNavbar />
                </Box>
              </Box>
  <Link to="/cart" >            <Box className="location-nav">
                <p className="count-position">Cart</p>
                <BsCart className="cart-css" />
              </Box></Link>
            </Box>
          </Box>
        </Box>
        <Box className="nav-bottom">
          <p>
            ALL CATEGORIES <ChevronDownIcon boxSize={"25px"} />
          </p>
          <Box className="category-list">
            <Box>
              <BoysFashion />
            </Box>
            <Box>
              <GirlsFashion />
            </Box>
            <Box>FOOTWEAR</Box>
            <Box>TOYS</Box>
            <Box>DIAPERING</Box>
            <Box>GEAR</Box>
            <Box>FEEDING</Box>
            <Box>BATH</Box>
            <Box>NURSERY</Box>
            <Box>MOMS</Box>
            <Box>HEALTH</Box>
            <Box>BOUTIQUES</Box>
            <Box>
              <Image
                src="https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png"
                alt="club"
              />
            </Box>
          </Box>
          <Box>
            <Image
              src="https://cdn.fcglcdn.com/brainbees/banners/FC-menu-carters-logo.webp"
              alt="carters"
            />
          </Box>
        </Box>
      </NavbarWrapper>
    );
  };
  
  export default Navbar;
  
  const NavbarWrapper = styled.div`
    .nav-top {
      display: flex;
      padding: 10px 4%;
      justify-content: space-between;
      gap: 5px;
    }
    .nav-top-left {
      display: flex;
      gap: 5px;
      max-height: 50px;
    }
    .logoimg {
      max-width: 130px;
      border-radius: 5px;
      max-height: 50px;
    }
    .desktop-nav-top-right {
      list-style-type: none;
      display: flex;
      gap: 10px;
      font-size: 12px;
      cursor: pointer;
    }
    .desktop-nav-top-right li {
      :hover {
        text-decoration: underline;
      }
      border-right: 0.5px solid lightgray;
      margin: 0px;
      padding-right: 5px;
    }
    .location-nav {
      display: flex;
      gap: 5px;
      border-right: none;
      font-weight: 400;
    }
  
    .count-position {
      font-weight: lighter;
      font-size: 13px;
      position: relative;
      left: 31px;
      top: 7px;
      cursor: pointer;
      opacity: 1;
      z-index: 101px;
      padding: 0px;
      margin: 0px;
      color: #ff7043;
      font-weight: bold;
    }
  
    .nav-store-list {
      list-style-type: none;
    }
    .nav-store-list li {
      cursor: pointer;
      border-right: none;
      :hover {
        text-decoration: none;
        background-color: #f2f2f2;
      }
      margin: 10px 0px;
    }
    .category-list {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    .category-list div {
      cursor: pointer;
      font-size: 14px;
      border-right: none;
      :hover {
        text-decoration: none;
        background-color: white;
      }
      font-weight: 400;
      padding: 5px 6px;
    }
    .nav-bottom {
      background-color: #ffd91c;
      padding: 0px 4%;
      display: flex;
      margin: auto;
      text-align: center;
      font-size: 14px;
      gap: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    // cart logo
    .cart-css {
      font-weight: light;
      font-size: 38px;
    }
  
    @media only screen and (min-width: 1200px) {
      .desktop-nav-list {
        display: block;
      }
      .tablet-nav-list {
        display: none;
      }
    }
  
    @media only screen and (min-width: 770px) and (max-width: 1200px) {
      .desktop-nav-list {
        display: none;
      }
      .tablet-nav-list {
        display: block;
      }
  
      .cart-css {
        font-weight: light;
        font-size: 30px;
      }
      .count-position {
        font-weight: lighter;
        font-size: 13px;
        position: relative;
        left: 26px;
        top: 4px;
        cursor: pointer;
        opacity: 1;
        z-index: 101px;
        padding: 0px;
        margin: 0px;
        color: #ff7043;
        font-weight: bold;
      }
      .nav-bottom {
        background-color: #ffd91c;
        padding: 0px 4%;
        display: flex;
        margin: auto;
        text-align: center;
        font-size: 11px;
        gap: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .category-list {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
      .category-list div {
        cursor: pointer;
        font-size: 11px;
        border-right: none;
        :hover {
          text-decoration: none;
          background-color: white;
        }
        font-weight: 400;
        padding: 5px 6px;
      }
    }
    @media only screen and (min-width: 320px) and (max-width: 770px) {
      .desktop-nav-list {
        display: none;
      }
      .tablet-nav-list {
        display: block;
      }
      .cart-css {
        font-weight: light;
        font-size: 38px;
      }
      .cart-css {
        font-weight: light;
        font-size: 30px;
      }
      .count-position {
        font-weight: lighter;
        font-size: 13px;
        position: relative;
        left: 26px;
        top: 4px;
        cursor: pointer;
        opacity: 1;
        z-index: 101px;
        padding: 0px;
        margin: 0px;
        color: #ff7043;
        font-weight: bold;
      }
      .location-nav {
        display: flex;
        gap: 5px;
        border-right: none;
        font-weight: 400;
        font-size: 16px;
      }
      .nav-bottom {
        background-color: #ffd91c;
        padding: 0px 4%;
        display: flex;
        margin: auto;
        text-align: center;
        font-size: 11px;
        gap: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .category-list {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
      .category-list div {
        cursor: pointer;
        font-size: 11px;
        border-right: none;
        :hover {
          text-decoration: none;
          background-color: white;
        }
        font-weight: 400;
        padding: 5px 6px;
      }
    }
  `;