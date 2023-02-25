import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Button, Image, SimpleGrid, Checkbox, Divider } from '@chakra-ui/react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";

let four = [<BsStarFill color="#f7a728" size='13px' />, <BsStarFill color="#f7a728" size='13px' />, <BsStarFill color="#f7a728" size='13px' />, <BsStarFill color="#f7a728" size='13px' />, <BsStar color="#f7a728" size='13px' />]
let two = [<BsStarFill color="#f7a728" size='13px' />, <BsStarFill color="#f7a728" size='13px' />, <BsStar color="#f7a728" size='13px' />, <BsStar color="#f7a728" size='13px' />, <BsStar color="#f7a728" size='13px' />]
let one = [<BsStarFill color="#f7a728" size='13px' />, <BsStar color="#f7a728" size='13px' />, <BsStar color="#f7a728" size='13px' />, <BsStar color="#f7a728" size='13px' />, <BsStar color="#f7a728" size='13px' />]
let three = [<BsStarFill color="#f7a728" size='13px' />, <BsStarFill color="#f7a728" size='13px' />, <BsStarFill color="#f7a728" size='13px' />, <BsStar color="#f7a728" size='13px' />, <BsStar color="#f7a728" size='13px' />]


export const Sidebar = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const initialState = searchParams.getAll("gender")
  const [gender, setGender] = useState(initialState || [])


  const handleFilter = (e) => {
    let newgender = [...gender]
    if (newgender.includes(e.target.value)) {
      newgender.splice(newgender.indexOf(e.target.value))
    } else {
      newgender.push(e.target.value)
    }
    setGender(newgender)
  }
  console.log(gender)

  const filterArr=()=>{
    
  }

  useEffect(() => {
    const params = {
      gender
    }
    filterArr()
    setSearchParams(params)
  }, [gender,searchParams])

  return (
    <Box p='10px'>

      <Box>
        <Text mb='12px'>DISCOUNT</Text>
        <Checkbox size='md'  >
          Upto 10%
        </Checkbox><br />
        <Checkbox size='md'  >
          10%-20%
        </Checkbox><br />
        <Checkbox size='md'  >
          20%-30%
        </Checkbox><br />
        <Checkbox size='md'  >
          30%-40%
        </Checkbox><br />
        <Checkbox size='md'  >
          More than 50%
        </Checkbox>
      </Box>
      <Divider mt='10px' mb='10px' borderTop='1px solid' />

      <Box>
        <Text mb='12px'>PRICE</Text>
        <Checkbox size='md'  >
          <Flex alignItems='center' gap='5px'><BiRupee /><Text>0 to 250</Text></Flex>
        </Checkbox><br />
        <Checkbox size='md'  >
          <Flex alignItems='center' gap='5px'><BiRupee /><Text>250 to 500</Text></Flex>
        </Checkbox><br />
        <Checkbox size='md'  >
          <Flex alignItems='center' gap='5px'><BiRupee /><Text>500 to 1000</Text></Flex>
        </Checkbox><br />
        <Checkbox size='md'  >
          <Flex alignItems='center' gap='5px'><BiRupee /><Text>1000 to 2000</Text></Flex>
        </Checkbox><br />
        <Checkbox size='md'  >
          <Flex alignItems='center' gap='5px'><BiRupee /><Text>2000 to 3000</Text></Flex>
        </Checkbox>
      </Box>
      <Divider mt='10px' mb='10px' borderTop='1px solid' />

      <Box>
        <Text mb='12px'>RATINGS</Text>
        <Checkbox onChange={(e) => console.log(e, 4)}>
          <Flex gap='5px' alignItems='center'> {four}4 & up</Flex>
        </Checkbox><br />
        <Checkbox onChange={(e) => console.log(e, 3)}>
          <Flex gap='5px' alignItems='center'> {three}  3 & up</Flex>
        </Checkbox><br />
        <Checkbox onChange={(e) => console.log(e, 2)}>
          <Flex gap='5px' alignItems='center' >{two}  2 & up</Flex>
        </Checkbox><br />
        <Checkbox onChange={(e) => console.log(e, 1)}>
          <Flex gap='5px' alignItems='center'>{one}  1 & up</Flex>
        </Checkbox><br />
      </Box>
      <Divider mt='10px' mb='10px' borderTop='1px solid' />


      <Box>
        <Text mb='12px'>GENDER</Text>
        <Checkbox size='md' value='boy' onChange={handleFilter} checked={gender.includes("boy")}>
          Boy
        </Checkbox><br />
        <Checkbox size='md' value='girl' onChange={handleFilter} checked={gender.includes("girl")}>
          Girl
        </Checkbox><br />
        <Checkbox size='md' value='unisex' onChange={handleFilter} checked={gender.includes("unisex")}>
          Unisex
        </Checkbox><br />
      </Box>

    </Box>
  )
}