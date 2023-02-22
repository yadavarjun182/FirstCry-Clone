import { Box, UnorderedList,Text } from "@chakra-ui/react";
import {Link} from "react-router-dom"
export default function Navbar2() {
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
            <Link to='#' _hover={{bg:'white'}}>ALL CATEGORIES</Link>
            <Link to='#' _hover={{bg:'white'}}>BOY FASHION</Link>
            <Link to='#' _hover={{bg:'white'}}>GIRL FASHION</Link>
            <Link to='#' _hover={{bg:'white'}}>FOOTWEAR</Link>
            <Link to='#' _hover={{bg:'white'}}>TOYS</Link>
            <Link to='#' _hover={{bg:'white'}}>DIAPERING</Link>
            <Link to='#' _hover={{bg:'white'}}>GEAR</Link>
            <Link to='#' _hover={{bg:'white'}}>FEEDING</Link>
            <Link to='#' _hover={{bg:'white'}}>BATH</Link>
            <Link to='#' _hover={{bg:'white'}}>NURSERY</Link>
            <Link to='#' _hover={{bg:'white'}}>MOMS</Link>
            <Link to='#' _hover={{bg:'white'}}>HEALTH</Link>
            <Link to='#' _hover={{bg:'white'}}>BOUTIQUES</Link>
            <Link to='#' _hover={{bg:'white',h:'full'}} textAlign='center'>CLUB</Link>
            <Link to='#'><Text bg="skyblue" color={'white'} p={4} textAlign='center' fontSize={21}>carter's</Text></Link>
          </UnorderedList>
        </Box>
      </Box>
    </>
  );
}
