//import { Box, UnorderedList, Text } from "@chakra-ui/react";

//import React, {useState} from "react";
//export default function Navbar2() {
//  return (
//    <>
//      <Box bg={"#ffd91c"} px={4} position={'sticky'} top='4rem'  zIndex={9999}>
//        <Box w={"95%"} m="auto">
//          <UnorderedList display={{ base: "none", md: "flex" }} h={16} alignItems={"center"} fontWeight={500} listStyleType="none" justifyContent={"space-between"} w={"95%"} m="auto" alignContent={"center"}>
//            <Text _hover={{bg: "white",p: "20px 2px"}}><Drawer /></Text>
//            <Text _hover={{ bg: "white", p: "20px 2px" }}><Drawer1 /></Text>
//            <Text _hover={{ bg: "white", p: "20px 2px" }}>GIRL FASHION</Text>
//            <Text _hover={{ bg: "white", p: "20px 2px" }}>FOOTWEAR</Text>
//            <Text _hover={{ bg: "white", p: "20px 2px" }}>TOYS</Text>
//            <Text _hover={{ bg: "white", p: "20px 2px" }}>DIAPERING</Text>
//            <Text _hover={{ bg: "white", p: "20px 2px" }}>GEAR</Text>
//            <Text _hover={{ bg: "white", p: "20px 2px" }}>FEEDING</Text>
//            <Text _hover={{ bg: "white", p: "20px 2px" }}>BATH</Text>
//            <Text _hover={{ bg: "white", p: "20px 2px" }}>NURSERY</Text>
//            <Text _hover={{ bg: "white", p: "20px 2px" }}>MOMS</Text>
//            <Text _hover={{ bg: "white", p: "20px 2px" }}>HEALTH</Text>
//            <Text _hover={{ bg: "white", p: "20px 2px" }}>BOUTIQUES</Text>
//            <Text _hover={{ bg: "white", p: "20px 2px" }} textAlign="center">CLUB</Text>
//            <Text bg="skyblue" color={"white"} p={4} textAlign="center" fontSize={21}>carter's</Text>
//          </UnorderedList>
//        </Box>
//      </Box>
//    </>
//  );
//}

//function Drawer()
//{
//    const [state,setState]=useState(false)
//    const showDropdown=() =>
//    {
//        setState(true)
//    }
//    const hideDropdown=() =>
//    {
//        setState(false)
//    }
//    return <>
//        <Box>
//            <Box onMouseEnter={showDropdown} onMouseLeave={hideDropdown} position='relative'>
//                BOY FASHION
//                {state? (<Box onMouseEnter={showDropdown} bg={'white'} display='flex' w={1200}>
//                    <UnorderedList >
//                    <li>sdfsd</li>
//                    <li>sdgsfg</li>
//                    <li>sdgsdg</li>
//                    <li>sfgsfgsf</li>
//                </UnorderedList>
//                <UnorderedList >
//                    <li>sdfsd</li>
//                    <li>sdgsfg</li>
//                    <li>sdgsdg</li>
//                    <li>sfgsfgsf</li>
//                </UnorderedList>
//                </Box>):null}
//            </Box>
//    </Box>
//    </>
//}

//function Drawer1()
//{
//    const [state,setState]=useState(false)
//    const showDropdown=() =>
//    {
//        setState(true)
//    }
//    const hideDropdown=() =>
//    {
//        setState(false)
//    }
//    return <>
//        <Box>
//            <Box onMouseEnter={showDropdown} onMouseLeave={hideDropdown} position='relative' >
//                ALL CATEGORIES
//                {state? (<Box onMouseEnter={showDropdown} bg={'white'} display='flex' w={1200} >
//                    <UnorderedList >
//                    <li>sdfsd</li>
//                    <li>sdgsfg</li>
//                    <li>sdgsdg</li>
//                    <li>sfgsfgsf</li>
//                </UnorderedList>
//                <UnorderedList >
//                    <li>sdfsd</li>
//                    <li>sdgsfg</li>
//                    <li>sdgsdg</li>
//                    <li>sfgsfgsf</li>
//                </UnorderedList>
//                </Box>):null}
//            </Box>
//    </Box>
//    </>
//}


const allcategory = {
    allcat : [
        "BOY FASHION",
"GIRL FASHION",
"FOOTWEAR",
"TOYS",
"DIAPERING",
"GEAR",
"FEEDING",
"BATH",
"NURSERY",
"MOMS",
"HEALTH & SAFETY",
"BOUTIQUES",
"WOMEN'S BEAUTY & CARE",
"BIRTHDAYS & GIFTS",
"BOOKS & CD'S",
"SCHOOL SUPPLIES",
"OFFERS",
"STORES & PRESCHOOLS",
"FirstCry Club",
"CARTER'S",
"INTELLIKIT",
"PRESCHOOL ADMISSIONS"
    ]
}

const shopbycatboy = [
    " Sets & Suits",
"T-shirts",
"Shirts",
"Jeans & Trousers",
"Sweatshirts",
"Jackets",
"Sweaters",
"Thermals",
"Ethnic Wear",
"Party Wear",
"Onesies & Rompers",
"Nightwear",
"Dungarees",
"Pajamas & Joggers",
"Athleisure & Sportswear",
"Shorts",
"Socks",
"Caps & Gloves",
"Inner Wear",
"Rainwear",
"Bath Time",
"Swim Wear",
"Theme Costumes",
"View All"
 ]
 const shopbycalboy = [
    "Spirit Of India Sale",
    "Bestsellers",
    "Multi-packs",
    "Baby Essentials",
]

const  fashion = [
    " Woollen Caps & Monkey Caps",
"Gloves",
"Mittens & Booties",
"Ear Muffs, Mufflers & Scarves",
"Sunglasses",
"Watches",
"Bags",
"Ties, Belts & Suspenders"
 ]
 const footware = [
    " Booties",
"Sock Shoes",
"Winter Boots",
"Sneakers & Sports Shoes",
"Formal & Partywear",
"School Shoes"
 ]

 const  shopbyage=[
    "Preemie/Tine Preemie",
"New Born (0-3 M)",
"3-6 Months",
"6-9 Months",
"9-12 Months",
"12-18 Months",
"18-24 Months",
"2 to 4 Years",
"4 to 6 Years",
"6 to 8 Years",
"8+ Years"
]

const shopbyprice = [
    " All Under 199",
"All Under 299",
"All Under 399",
"All Under 499",
 ]

 const shopbybrands = [
    " Babyhug",
"Babyoye",
"Carter's",
"Kookie Kids",
"Mark & Mia",
"Cute Walk",
"Pine Kids",
"Pine Active",
"Earthy Touch",
"Gini & Jony",
"Honeyhap",
"Ed-a-mamma",
"Indian Terrian",
"Monte Carlo",
"UCB",
"Puma",
"Allen Solly",
"U.S. Polo Assn. Kids",
"Turtledove London",
"RUFF",
"Jack & Jones Junior",
"Lilly + Sid",
"LEVI'S",
"CONVERSE",
"JORDAN",
"NIKE"
 ]

 const shopbycatgirl =[
   " Sets & Suits",
"Tops and T-shirts",
"Frocks & Dresses",
"Jeans & Jeggings",
"Sweatshirts",
"Jackets",
"Sweaters",
"Thermals",
"Ethnic Wear",
"Party Wear",
"Onesies & Rompers",
"Shirts",
"Nightwear",
"Pajamas & Leggings",
"Jumpsuits & Dungarees",
"Athleisure & Sportswear",
"Shorts & Skirts",
"Caps & Gloves",
"Inner Wear",
"Rainwear",
"Bath Time",
"Swim Wear",
"Theme Costumes",
"View all"
 ]

const category = [
    "BOY FASHION",
    "GIRL FASHION",
    "FOOTWEAR",
    "TOYS",
    "DIAPERING",
    "GEAR",
    "FEEDING",
    "BATH",
    "NURSERY",
    "MOMS",
    "HEALTH",
    "BOUTIQUES"
]





export {allcategory, category,shopbycatboy,shopbycalboy,fashion,footware,shopbyage,shopbyprice,shopbybrands,shopbycatgirl};