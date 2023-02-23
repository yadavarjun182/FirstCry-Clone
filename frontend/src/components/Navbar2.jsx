import { Box, UnorderedList,Text, useDisclosure } from "@chakra-ui/react";
//import {Text} from "react-router-dom";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import React from "react";
export default function Navbar2()
{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('top')
  
    const handleClick=() =>
    {
        onOpen()
    }
    
    const handleClick2=() =>
    {
        onOpen()
    }
  return (
    <>
      <Box bg={"#ffd91c"} px={4}>
        <Box w={"95%"} m="auto">
          <UnorderedList
            display={{ base: "none", md: "flex" }}
            h={16}
            alignItems={"center"}
            fontWeight={500}
            listStyleType="none"
            justifyContent={"space-between"}
            w={"95%"}
                      m="auto"
                      alignContent={'center'}
          >
            <Text  _hover={{bg:'white',p:'20px 2px'}}>ALL CATEGORIES</Text>
                      <Text _hover={{bg: 'white',p:'20px 2px'}} onClick={handleClick}>BOY FASHION</Text>
                
                      <Text _hover={{bg: 'white',p:'20px 2px'}} onClick={handleClick2}>GIRL FASHION</Text>
                      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...jjdj</p>
            <p>Some contents...dfhdf</p>
            <p>Some contentsdfhdh...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
            <Text  _hover={{bg:'white',p:'20px 2px'}}>FOOTWEAR</Text>
            <Text  _hover={{bg:'white',p:'20px 2px'}}>TOYS</Text>
            <Text  _hover={{bg:'white',p:'20px 2px'}}>DIAPERING</Text>
            <Text  _hover={{bg:'white',p:'20px 2px'}}>GEAR</Text>
            <Text  _hover={{bg:'white',p:'20px 2px'}}>FEEDING</Text>
            <Text  _hover={{bg:'white',p:'20px 2px'}}>BATH</Text>
            <Text  _hover={{bg:'white',p:'20px 2px'}}>NURSERY</Text>
            <Text  _hover={{bg:'white',p:'20px 2px'}}>MOMS</Text>
            <Text  _hover={{bg:'white',p:'20px 2px'}}>HEALTH</Text>
            <Text  _hover={{bg:'white',p:'20px 2px'}}>BOUTIQUES</Text>
            <Text  _hover={{bg:'white',p:'20px 2px'}} textAlign='center'>CLUB</Text>
            <Text bg="skyblue" color={'white'} p={4} textAlign='center' fontSize={21}>carter's</Text>
          </UnorderedList>
        </Box>
      </Box>
    </>
  );
}
