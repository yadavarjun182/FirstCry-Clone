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
  const ratingState = searchParams.getAll("rating")
  const pricingState = searchParams.getAll("mrp")
  const discountState = searchParams.getAll("discount")


  const [gender, setGender] = useState(initialState || [])
  const [rating, setRating] = useState(ratingState || [])
  const [mrp, setMrp] = useState(pricingState || [])
  const [discount, setDiscount] = useState(discountState || [])


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

  const handlerateFilter = (e) => {
    let newrating = [...rating]
    if (newrating.includes(e.target.value)) {
      newrating.splice(newrating.indexOf(e.target.value))
    } else {
      newrating.push(e.target.value)
    }
    setRating(newrating)
  }
  console.log(rating)

  const handlepriceFilter = (e) => {
    let newpricing = [...mrp]
    if (newpricing.includes(e.target.value)) {
      newpricing.splice(newpricing.indexOf(e.target.value))
    } else {
      newpricing.push(e.target.value)
    }
    setMrp(newpricing)
  }
  console.log(mrp)

  const handlediscountFilter = (e) => {
    let newdiscount = [...discount]
    if (newdiscount.includes(e.target.value)) {
      newdiscount.splice(newdiscount.indexOf(e.target.value))
    } else {
      newdiscount.push(e.target.value)
    }
    setDiscount(newdiscount)
  }
  console.log(discount)


  useEffect(() => {
    const params = {
      gender,
      rating,
      mrp,
      discount
    }
    setSearchParams(params)
  }, [gender, rating, mrp, discount, searchParams])

  return (
    <Box p='10px'>

      <Box>
        <Text mb='9px'>DISCOUNT</Text>


        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='10' onChange={handlediscountFilter} checked={discount.includes("10")} />
          </div>
          <div>
            <Text>  Upto 10%</Text>
          </div>
        </div>


        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='15' onChange={handlediscountFilter} checked={discount.includes("15")} />
          </div>
          <div>
            <Text>10% to 18%</Text>
          </div>
        </div>

        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='20' onChange={handlediscountFilter} checked={discount.includes("20")} />
          </div>
          <div>
            <Text>19% to 29%</Text>
          </div>
        </div>

        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='20' onChange={handlediscountFilter} checked={discount.includes("20")} />
          </div>
          <div>
            <Text>20% to 30%</Text>
          </div>
        </div>

        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='30' onChange={handlediscountFilter} checked={discount.includes("30")} />
          </div>
          <div>
            <Text>above 30%</Text>
          </div>
        </div>

      </Box>
      <Divider mt='8px' mb='7px' borderTop='1px solid' />

      <Box>
        <Text mb='9px'>PRICE</Text>

        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='249' onChange={handlepriceFilter} checked={mrp.includes("249")} />
          </div>
          <div>
            <Flex alignItems='center' gap='5px'><BiRupee /><Text>0 to 250</Text></Flex>
          </div>
        </div>

        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='395' onChange={handlepriceFilter} checked={mrp.includes("395")} />
          </div>
          <div>
            <Flex alignItems='center' gap='5px'><BiRupee /><Text>250 to 400</Text></Flex>
          </div>
        </div>

        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='699' onChange={handlepriceFilter} checked={mrp.includes("699")} />
          </div>
          <div>
            <Flex alignItems='center' gap='5px'><BiRupee /><Text>400 to 700</Text></Flex>
          </div>
        </div>

        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='799' onChange={handlepriceFilter} checked={mrp.includes("799")} />
          </div>
          <div>
            <Flex alignItems='center' gap='5px'><BiRupee /><Text>700 to 1000</Text></Flex>
          </div>
        </div>

        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='1200' onChange={handlepriceFilter} checked={mrp.includes("1200")} />
          </div>
          <div>
            <Flex alignItems='center' gap='5px'><BiRupee /><Text>1000 to 2000</Text></Flex>
          </div>
        </div>

        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='2499' onChange={handlepriceFilter} checked={mrp.includes("2499")} />
          </div>
          <div>
            <Flex alignItems='center' gap='5px'><BiRupee /><Text>2000 to 3000</Text></Flex>
          </div>
        </div>

      </Box>
      <Divider mt='8px' mb='7px' borderTop='1px solid' />

      <Box>
        <Text mb='9px'>RATINGS</Text>

        {/* <Checkbox value='4' onChange={handlerateFilter} checked={rating.includes("4")}>
          <Flex gap='5px' alignItems='center'> {four}4 </Flex>
        </Checkbox><br /> */}


        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='4' onChange={handlerateFilter} checked={rating.includes("4")} />
          </div>
          <div>
            <Flex gap='5px' alignItems='center'>{four}  4 </Flex>
          </div>
        </div>


        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='3' onChange={handlerateFilter} checked={rating.includes("3")} />
          </div>
          <div>
            <Flex gap='5px' alignItems='center'>{three}  3 </Flex>
          </div>
        </div>

        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='2' onChange={handlerateFilter} checked={rating.includes("2")} />
          </div>
          <div>
            <Flex gap='5px' alignItems='center'>{two}  2 </Flex>
          </div>
        </div>



        <div style={{ display: "flex", marginRight: "5px" }}>
          <div>
            <input style={{ marginRight: "5px" }} type="checkbox" value='1' onChange={handlerateFilter} checked={rating.includes("1")} />
          </div>
          <div>
            <Flex gap='5px' alignItems='center'>{one}  1 </Flex>
          </div>
        </div>

        <br />
      </Box>
      <Divider mt='8px' mb='7px' borderTop='1px solid' />


      <Box>
        <Text mb='9px'>GENDER</Text>
        <input style={{ marginRight: "5px" }} type="checkbox" value='boy' onChange={handleFilter} checked={gender.includes("boy")} />
        <label>
          Boy
        </label>
        <br />
        <input style={{ marginRight: "5px" }} type="checkbox" value='girl' onChange={handleFilter} checked={gender.includes("girl")} />
        <label>
          Girl
        </label>
        <br />
        <input style={{ marginRight: "5px" }} type="checkbox" value='unisex' onChange={handleFilter} checked={gender.includes("unisex")} />
        <label>
          Unisex
        </label>

      </Box>

    </Box>
  )
}