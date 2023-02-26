import { Box, UnorderedList, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom"

export default function Navbar2() {
  return (
    <>
      <Box bg={"#ffd91c"} px={4} position={'sticky'} top='4rem' zIndex={9999}>
        <Box w={"95%"} m="auto">
          <UnorderedList display={{ base: "none", md: "flex" }} h={16} alignItems={"center"} fontWeight={500} listStyleType="none" justifyContent={"space-between"} w={"95%"} m="auto" alignContent={"center"}>
            <Link to="/products/toys">
              <Text _hover={{ bg: "white", p: "20px 2px" }}>   ALL CATEGORIES </Text>
            </Link>
            <Link to="/products/boy fashion">
              <Text _hover={{ bg: "white", p: "20px 2px" }}>BOY FASHION</Text>
            </Link>
            <Link to="/products/girl fashion">
              <Text _hover={{ bg: "white", p: "20px 2px" }}>GIRL FASHION</Text>
            </Link>
            <Text _hover={{ bg: "white", p: "20px 2px" }}>FOOTWEAR</Text>
            <Link to="/products/toys">
              <Text _hover={{ bg: "white", p: "20px 2px" }}>TOYS</Text>
            </Link>
            <Text _hover={{ bg: "white", p: "20px 2px" }}>DIAPERING</Text>
            <Text _hover={{ bg: "white", p: "20px 2px" }}>GEAR</Text>
            <Text _hover={{ bg: "white", p: "20px 2px" }}>FEEDING</Text>
            <Text _hover={{ bg: "white", p: "20px 2px" }}>BATH</Text>
            <Text _hover={{ bg: "white", p: "20px 2px" }}>NURSERY</Text>
            <Text _hover={{ bg: "white", p: "20px 2px" }}>MOMS</Text>
            <Text _hover={{ bg: "white", p: "20px 2px" }}>HEALTH</Text>
            <Text _hover={{ bg: "white", p: "20px 2px" }}>BOUTIQUES</Text>
            <Text _hover={{ bg: "white", p: "20px 2px" }} textAlign="center">CLUB</Text>
            <Text bg="skyblue" color={"white"} p={4} textAlign="center" fontSize={21}>carter's</Text>
          </UnorderedList>
        </Box>
      </Box>
    </>
  );
}
