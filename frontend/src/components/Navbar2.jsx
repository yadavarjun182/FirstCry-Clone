import {
    Box,UnorderedList,ListItem
  } from "@chakra-ui/react";

  export default function Navbar2() {
  
    return (
      <>
            <Box bg={"#ffd91c"} >
                <Box w={'95%'} m='auto'>
        <UnorderedList display={'flex'} fontWeight={500} listStyleType='none' justifyContent={'space-between'} w={'95%'} m='auto'>
  <ListItem>ALL CATEGORIES</ListItem>
  <ListItem>BOY FASHION</ListItem>
  <ListItem>GIRL FASHION</ListItem>
                    <ListItem>FOOTWEAR</ListItem>
                    <ListItem>TOYS</ListItem>
                    <ListItem>DIAPERING</ListItem>
                    <ListItem>GEAR</ListItem>
                    <ListItem>FEEDING</ListItem>
                    <ListItem>BATH</ListItem>
                    <ListItem>NURSERY</ListItem>
                    <ListItem>MOMS</ListItem>
                    <ListItem>HEALTH</ListItem>
                    <ListItem>BOUTIQUES</ListItem>
                    <ListItem>CLUB</ListItem>
                    <ListItem>carter's</ListItem>
</UnorderedList>
                </Box>
                </Box>
      </>
    );
  }
  