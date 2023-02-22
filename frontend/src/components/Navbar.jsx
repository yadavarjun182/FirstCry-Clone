import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  ListItem,
  UnorderedList,Image,Input,InputGroup,InputRightAddon
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {GoLocation} from 'react-icons/go';
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineSearch} from 'react-icons/ai';
const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white.100", "white")} px={4} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} w='95%' m='auto'>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={5} alignItems={"center"}>
            <Image src='../logo.png' w='90px'/>
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
              <ListItem display={'flex'} gap={1}><GoLocation/> Select location |</ListItem>
              <ListItem>Stores & Preschools |</ListItem>
              <ListItem>Support |</ListItem>
              <ListItem>Track Order</ListItem>
              <ListItem>FirstCry Parenting |</ListItem>
              <ListItem>Login/Register |</ListItem>
              <ListItem display={'flex'} gap={1} alignItems='center'><AiOutlineHeart/> Shorlist |</ListItem>
              <ListItem display={'flex'} gap={1} alignItems='center'><AiOutlineShoppingCart/> Cart</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
