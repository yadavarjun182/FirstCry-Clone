import { Box, UnorderedList, ListItem } from "@chakra-ui/react";

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
            <ListItem _hover={{bg:'white'}}>ALL CATEGORIES</ListItem>
            <ListItem _hover={{bg:'white'}}>BOY FASHION</ListItem>
            <ListItem _hover={{bg:'white'}}>GIRL FASHION</ListItem>
            <ListItem _hover={{bg:'white'}}>FOOTWEAR</ListItem>
            <ListItem _hover={{bg:'white'}}>TOYS</ListItem>
            <ListItem _hover={{bg:'white'}}>DIAPERING</ListItem>
            <ListItem _hover={{bg:'white'}}>GEAR</ListItem>
            <ListItem _hover={{bg:'white'}}>FEEDING</ListItem>
            <ListItem _hover={{bg:'white'}}>BATH</ListItem>
            <ListItem _hover={{bg:'white'}}>NURSERY</ListItem>
            <ListItem _hover={{bg:'white'}}>MOMS</ListItem>
            <ListItem _hover={{bg:'white'}}>HEALTH</ListItem>
            <ListItem _hover={{bg:'white'}}>BOUTIQUES</ListItem>
            <ListItem _hover={{bg:'white',h:'full'}} textAlign='center'>CLUB</ListItem>
            <ListItem  bg="skyblue" color={'white'} h='full' >carter's</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </>
  );
}
