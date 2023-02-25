import React from "react";
import styles from "./ProductsPage.module.css";
import { BiRupee } from "react-icons/bi";
import { Box,Flex,Text,Button,Image,SimpleGrid } from '@chakra-ui/react';
import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";
import { Sidebar } from "./sidebar";

let product = [
{   _id:1,
    title:'Planet of Toys Musical Keyboard Mat Piano Gym Mat Gym & Fitness Rack- ( Colour may vary )',
    description:'Ideal 0 to 24 Months, L 46 x B 35 x H 8 cm, An amazing and interesting play gym mat with toys and music.',
    mrp:5000,
    discount:20,
    brand:'tesla',
    rating:4.5,
    thumbnail:'https://cdn.fcglcdn.com/brainbees/images/products/219x265/12101426a.webp'
  },
  {   _id:2,
    title:'Planet of Toys Musical Keyboard Mat Piano Gym Mat Gym & Fitness Rack- ( Colour may vary )',
    description:'Ideal 0 to 24 Months, L 46 x B 35 x H 8 cm, An amazing and interesting play gym mat with toys and music.',
    mrp:5000,
    discount:20,
    brand:'tesla',
    rating:4.5,
    thumbnail:'https://cdn.fcglcdn.com/brainbees/images/products/219x265/10634946a.webp'
  },
  {   _id:3,
    title:'Planet of Toys Musical Keyboard Mat Piano Gym Mat Gym & Fitness Rack- ( Colour may vary )',
    description:'Ideal 0 to 24 Months, L 46 x B 35 x H 8 cm, An amazing and interesting play gym mat with toys and music.',
    mrp:5000,
    discount:20,
    brand:'tesla',
    rating:4.5,
    thumbnail:'https://cdn.fcglcdn.com/brainbees/images/products/219x265/12101426a.webp'
  },
  {   _id:4,
    title:'Planet of Toys Musical Keyboard Mat Piano Gym Mat Gym & Fitness Rack- ( Colour may vary )',
    description:'Ideal 0 to 24 Months, L 46 x B 35 x H 8 cm, An amazing and interesting play gym mat with toys and music.',
    mrp:5000,
    discount:20,
    brand:'tesla',
    rating:4.5,
    thumbnail:'https://cdn.fcglcdn.com/brainbees/images/products/219x265/11744868a.webp'
  },
]

let four =[<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStar size='13px'/>]
let five=[<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill  size='13px'/>]
let fournhalf = [<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarHalf size='13px'/>]
let two= [<BsStarFill  size='13px'/>,<BsStarFill  size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>]
let one= [<BsStarFill  size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>]
let three = [<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStar size='13px'/>,<BsStar size='13px'/>]
let threenhalf= [<BsStarFill  size='13px'/>,<BsStarFill size='13px'/>,<BsStarFill size='13px'/>,<BsStarHalf size='13px'/>,<BsStar size='13px'/>]

const ProductsPage = () => {

  
  return (
     <Box bg='#ffffff' mt='20px' mb='30px'>
       <Flex w='95%' m='auto' gap='20px' flexDirection={{base:'column',md:'row'}}>
        <Box w='20%' display={{base:'none',md:'block'}}>
          <Text p='10px' fontWeight='bold' bg='#eeeeee'>FILTER BY</Text>
          <Sidebar/>
        </Box>

        <Box w={{base:'95%',md:'80%'}} >
            <SimpleGrid columns={{base:2,md:4}} spacing='5px'>
              {product && product.map((ele)=>(
                <Box p='10px' _hover={{boxShadow:'base', rounded:'md',border:'1px solid gray'}}>
                     <Image w='100%' src={ele.thumbnail} alt={ele.title} />
                     <Text lineHeight='15px'fontSize='14px'>{ele.title}</Text>
                     <Text mt='5px' fontSize='12px' lineHeight='13px'>{ele.description}</Text>

                     <Flex gap='3px' pt='5px' mt='10px' pb='5px' color='#f39019' borderTop='1px solid gray' borderBottom='1px solid gray'>
                             {ele.rating===1?one:'' ||ele.rating===2?two:'' ||ele.rating ===3?three:''|| ele.rating >=3.1 && ele.rating<4 ?threenhalf:'' || ele.rating ===4 ?four:'' || ele.rating >=4.1 ? fournhalf:'' }
                     </Flex>

                     <Flex gap='5px' mt='10px' fontSize={{base:'12px',md:'15px'}}>
                        <Flex alignItems='center' as='b' color='#282828'><BiRupee/><Text>{ele.mrp}</Text></Flex>
                        <Flex as='del' alignItems='center'><BiRupee/>{Math.floor(ele.mrp+((ele.mrp*ele.discount)/100))}</Flex>
                        <Flex color='#e53935'>({ele.discount}% Off)</Flex>
                     </Flex>

                     <Flex alignItems='center' gap='5px' flexDirection={{base:'column',md:'row'}}>
                      <Text fontSize='12'>Get it by</Text>
                      <Text as='b' fontSize='12'>Wednesday, Mar 1</Text>
                     </Flex>

                     <Flex mt='12px' gap='5px'>
                      <Button colorScheme='orange'>ADD TO CART</Button>
                      <Button  display={{base:'none',md:'block'}}>SHORTLIST</Button>
                    </Flex>
                </Box>
              ))}
            </SimpleGrid>
        </Box>

       </Flex>
     </Box>
  );
};

export default ProductsPage;
