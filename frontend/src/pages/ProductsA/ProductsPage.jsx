import React, { useEffect, useState } from "react";
import styles from "./ProductsPage.module.css";
import { useToast } from '@chakra-ui/react';
import { BiRupee } from "react-icons/bi";
import { Box, Flex, Text, Button, Image, SimpleGrid } from '@chakra-ui/react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Sidebar } from "./sidebar";
import axios from "axios"
import { useLocation, useParams } from "react-router-dom";

// let product = [
//   {
//     _id: 1,
//     title: 'Planet of Toys Musical Keyboard Mat Piano Gym Mat Gym & Fitness Rack- ( Colour may vary )',
//     description: 'Ideal 0 to 24 Months, L 46 x B 35 x H 8 cm, An amazing and interesting play gym mat with toys and music.',
//     mrp: 5000,
//     discount: 20,
//     brand: 'tesla',
//     rating: 4.5,
//     thumbnail: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/12101426a.webp'
//   },
//   {
//     _id: 2,
//     title: 'Planet of Toys Musical Keyboard Mat Piano Gym Mat Gym & Fitness Rack- ( Colour may vary )',
//     description: 'Ideal 0 to 24 Months, L 46 x B 35 x H 8 cm, An amazing and interesting play gym mat with toys and music.',
//     mrp: 5000,
//     discount: 20,
//     brand: 'tesla',
//     rating: 4.5,
//     thumbnail: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/10634946a.webp'
//   },
//   {
//     _id: 3,
//     title: 'Planet of Toys Musical Keyboard Mat Piano Gym Mat Gym & Fitness Rack- ( Colour may vary )',
//     description: 'Ideal 0 to 24 Months, L 46 x B 35 x H 8 cm, An amazing and interesting play gym mat with toys and music.',
//     mrp: 5000,
//     discount: 20,
//     brand: 'tesla',
//     rating: 4.5,
//     thumbnail: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/12101426a.webp'
//   },
//   {
//     _id: 4,
//     title: 'Planet of Toys Musical Keyboard Mat Piano Gym Mat Gym & Fitness Rack- ( Colour may vary )',
//     description: 'Ideal 0 to 24 Months, L 46 x B 35 x H 8 cm, An amazing and interesting play gym mat with toys and music.',
//     mrp: 5000,
//     discount: 20,
//     brand: 'tesla',
//     rating: 4.5,
//     thumbnail: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/11744868a.webp'
//   },

// ]



// http://localhost:7300/products/get





let four = [<BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStar size='13px' />]
let five = [<BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />]
let fournhalf = [<BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarHalf size='13px' />]
let two = [<BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStar size='13px' />, <BsStar size='13px' />, <BsStar size='13px' />]
let one = [<BsStarFill size='13px' />, <BsStar size='13px' />, <BsStar size='13px' />, <BsStar size='13px' />, <BsStar size='13px' />]
let three = [<BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStar size='13px' />, <BsStar size='13px' />]
let threenhalf = [<BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarFill size='13px' />, <BsStarHalf size='13px' />, <BsStar size='13px' />]

const ProductsPage = () => {

  const [ProdArr, setProdArr] = useState([])
  const location = useLocation()
  console.log(location.search)
  const toast = useToast()
  const params = useParams()
  console.log(params)
  // const ProdArr = [
  //   {
  //     "_id": "63f9f4f7302d596511b949d8",
  //     "title": "NEGOCIO Singing Talking Recording Dancing Cactus Toy - Green Brown",
  //     "description": "Ideal Age 0 to 24 Months, L 30 x B 10 x H 10 cm, The toy will dance for a few hours, bringing the child a happy time in a life time.",
  //     "mrp": 749,
  //     "discount": 30,
  //     "brand": "babyhugs",
  //     "category": "toys",
  //     "gender": "unisex",
  //     "quantity": "40",
  //     "rating": 4.5,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10634946a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - NEGOCIO Type - Dancing Cactus Manufacturer's Recommended Age - 3 Years+ Material - Plush Product Dimensions - L 30 x B 10 x H 10 cm",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9f5a9302d596511b949da",
  //     "title": "Babyhug Stacking Rings with Beads - 5 Rings",
  //     "description": "Ideal age 0 to 24 Months, Box Dimension - L 12.5 x B 12.5 x H 17.5 cm, Colorful rings keep them engaged for a longer period of time",
  //     "mrp": 395,
  //     "discount": 7,
  //     "brand": "babyhugs",
  //     "category": "toys",
  //     "gender": "unisex",
  //     "quantity": "300",
  //     "rating": 4.3,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10032150a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug Type - Stacking Rings Manufacturer Recommended Age - 6 Months+ Box Dimension - L 12.5 x B 12.5 x H 17.5 cm Product Diameter - 12.5 cm Circumference - 40.5 cm Height - 17.5 cm",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9f675302d596511b949dc",
  //     "title": "ADKD Educational Laptop with 20 Fun Activities - Blue",
  //     "description": "3 Years+, Box Dimension L 30 x B 23 x H 6 cm, English Learner Kids Laptop Make learning fun and entertaining",
  //     "mrp": 1200,
  //     "discount": 30,
  //     "brand": "dabble",
  //     "category": "toys",
  //     "gender": "unisex",
  //     "quantity": "20",
  //     "rating": 4.8,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12824674a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - ADKD  Type - Learning Laptop  Age - 3 Years+  Material - Plastic  Box Dimension - L 30 x B 23 x H 6 cm  Battery - 1.5 V AA battery required",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9f712302d596511b949de",
  //     "title": "Mirana USB Rechargeable Racing RC Car with Nitro Booster High Speed Remote Control Toy Gift - Dark Purple",
  //     "description": "4 Years+ , L 23.6 x B 10 x H 7 cm, Racing Car Having Long Lasting Battery Backup",
  //     "mrp": 1183,
  //     "discount": 26,
  //     "brand": "dabble",
  //     "category": "toys",
  //     "gender": "unisex",
  //     "quantity": "50",
  //     "rating": 3.9,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12263915a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Mirana Type - Remote Control Car Toy Age - 4 Years+  Material - Plastic Dimensions - L 23.6 x B 10 x H 7 cm Battery information: - 1200 mAh Li-ion Scale ratio - 1:20 Remote range: - 50 m",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9f775302d596511b949e0",
  //     "title": "Babyhug Jumbo Brix Stack Set Multicolor - 40 Pieces",
  //     "description": "12 Months+, a set of colourful building blocks to give shapes to their own architectural skills, enhances hand-eye coordination and develops fine motor skills",
  //     "mrp": 995,
  //     "discount": 20,
  //     "brand": "babyhugs",
  //     "category": "toys",
  //     "gender": "unisex",
  //     "quantity": "10",
  //     "rating": 4,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8652572a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug Type - Construction blocks  Age - 12 Months+ No of Pieces - 40",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9f7e3302d596511b949e2",
  //     "title": "Babyhug Baby Elephant Soft Toy with Attached Monkey - Height 30 cm",
  //     "description": "2 Years+, Height 30 cm, soft toy for kids to cuddle all day long, develops social & emotional sensibilities in children",
  //     "mrp": 925,
  //     "discount": 5,
  //     "brand": "dabble",
  //     "category": "toys",
  //     "gender": "unisex",
  //     "quantity": "120",
  //     "rating": 5,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10305360a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug Type - Soft Toy Age -  2 Years+ Material - Fabric, Polyester Fiber  Height - 30 cm",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9f85d302d596511b949e4",
  //     "title": "Babyhug Roll Ball Monkey Shaped Set - Multicolour",
  //     "description": "12 Months+, L 40 x B 18 cm, Helps in develop skills and kids will have the great time playing with it.",
  //     "mrp": 739,
  //     "discount": 20,
  //     "brand": "camel",
  //     "category": "toys",
  //     "gender": "unisex",
  //     "quantity": "40",
  //     "rating": 3.8,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11388619a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug  Type -  Spinning Toys Age - 12 Months+ Rattle Balls Circumference - 4.4 cm  Ramps Dimension - 8.5 cm  Face Top - L 11 x H 10 cm Product Dimension - L 40 x B 18 cm ",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9faa6302d596511b949e6",
  //     "title": "Prime Wooden Hammer Ball Knock Pounding Bench With Box Case - Multicolour",
  //     "description": "Ideal Age 3 to 6 Years, L 12.5 x B 22.5 x H 7 cm, A punch and drop instruments with mallet for toddlers",
  //     "mrp": 485,
  //     "discount": 25,
  //     "brand": "camel",
  //     "category": "toys",
  //     "gender": "unisex",
  //     "quantity": "70",
  //     "rating": 4.2,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11079973a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Prime Type - Pounding Bench Age - 3 to 6 Years Material - Wood Dimensions - L 22.5 x B 12.5 x H 7 cm Weight-322gm",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9fb80302d596511b949e8",
  //     "title": "ToffyHouse Full Sleeves 100% Cotton Woven Striped Shirt - White Blue Red",
  //     "description": "Age  9 - 12 Months",
  //     "mrp": 800,
  //     "discount": 15,
  //     "brand": "babyhugs",
  //     "category": "boy fashion",
  //     "gender": "boy",
  //     "quantity": "45",
  //     "rating": 4.5,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11728034a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - ToffyHouse  Type - Shirt  Fabric - Cotton/Woven  Sleeves - Full Sleeves  Neck - Collar Neck",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9fbec302d596511b949ea",
  //     "title": "ToffyHouse Full Sleeves Cotton Striped Shirt - Blue",
  //     "description": "Age: 8-12Months",
  //     "mrp": 845,
  //     "discount": 18,
  //     "brand": "camel",
  //     "category": "boy fashion",
  //     "gender": "boy",
  //     "quantity": "46",
  //     "rating": 4.7,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10911041a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - ToffyHouse Type - Striped Shirt Fabric - Cotton/Woven Sleeves - Full Sleeves Neck - Regular Collar",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9fc6e302d596511b949ec",
  //     "title": "Babyhug Cotton Half Sleeves Striped Shirt- White",
  //     "description": "Age: 12-18 Months",
  //     "mrp": 699,
  //     "discount": 21,
  //     "brand": "babyhugs",
  //     "category": "boy fashion",
  //     "gender": "boy",
  //     "quantity": "30",
  //     "rating": 3.8,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11543430a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug Type - Shirts Fabric - Cotton/Woven Sleeves - Half Sleeves  Neck - Collar Neck",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9fce8302d596511b949ee",
  //     "title": "Babyhug Cotton Denim Half Sleeves Solid Shirt- Blue",
  //     "description": "Age 12-18 Months",
  //     "mrp": 599,
  //     "discount": 21,
  //     "brand": "zion",
  //     "category": "boy fashion",
  //     "gender": "boy",
  //     "quantity": "57",
  //     "rating": 5,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12307435a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug Type - Denim Shirt Fabric - Cotton/Woven Sleeves - Half Sleeves Neck -  Collar Neck",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9fd41302d596511b949f0",
  //     "title": "Babyhug Half Sleeves Washed Denim Kurta Shirt Solid- Blue",
  //     "description": "Age: 12-18 Months",
  //     "mrp": 699,
  //     "discount": 30,
  //     "brand": "zion",
  //     "category": "boy fashion",
  //     "gender": "boy",
  //     "quantity": "79",
  //     "rating": 4.9,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12307361a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug  Type - Shirt  Fabric - Cotton/Woven  Sleeves - Half  Neck - Mandarin Colla",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9fdbe302d596511b949f2",
  //     "title": "Babyhug 100% Cotton Woven Half Sleeves Solid Color Shirt with T-Shirt Green Print - Blue",
  //     "description": "Age 8-12 Months",
  //     "mrp": 789,
  //     "discount": 25,
  //     "brand": "zion",
  //     "category": "boy fashion",
  //     "gender": "boy",
  //     "quantity": "39",
  //     "rating": 4.2,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12307349a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug  Type - Shirt with T-Shirt  Fabric - 100% Cotton/Woven  Sleeves - Half  Neck - Collar Neck",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9fe11302d596511b949f4",
  //     "title": "Babyhug Full Sleeves Shirt With Jeep Print - Blue",
  //     "description": "Age : 9-12 Months",
  //     "mrp": 799,
  //     "discount": 23,
  //     "brand": "babyhugs",
  //     "category": "boy fashion",
  //     "gender": "boy",
  //     "quantity": "56",
  //     "rating": 4,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/9184881a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug Type - Shirt Fabric - Cotton/ Woven Sleeves - Full Neck - Collar",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9fe7a302d596511b949f6",
  //     "title": "Jash Kids Cotton Full Sleeves Striped Shirt - Blue",
  //     "description": "Age : 12-18 Months",
  //     "mrp": 799,
  //     "discount": 20,
  //     "brand": "camel",
  //     "category": "boy fashion",
  //     "gender": "boy",
  //     "quantity": "35",
  //     "rating": 3.8,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11911681a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Jash Kids   Type - Shirt  Fabric -Cotton/Woven  Sleeves - Full Sleeves  Neck - Collar Neck",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63f9ff73302d596511b949f8",
  //     "title": "Babyoye Full Sleeves Stripes Shirt - Blue",
  //     "description": "Age: 9-12 Months",
  //     "mrp": 899,
  //     "discount": 28,
  //     "brand": "babyhugs",
  //     "category": "boy fashion",
  //     "gender": "boy",
  //     "quantity": "67",
  //     "rating": 4.6,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11608989a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyoye   Type - Shirt  Fabric - Cotton/Woven  Sleeves - Full Sleeves  Neck - Collar",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63fa003d302d596511b949fa",
  //     "title": "Anthrilo Unicorn Planet Theme Half Sleeves Seamless Star & Mountains Printed Night Dress - Purple",
  //     "description": "Age: 0 - 6 Months",
  //     "mrp": 699,
  //     "discount": 23,
  //     "brand": "babyhugs",
  //     "category": "girl fashion",
  //     "gender": "girl",
  //     "quantity": "88",
  //     "rating": 4.7,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12713317a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand Name - Anthrilo    Type - Night Dress       Fabric - Cotton  Neck - Round Neck    Sleeves - Half Sleeves",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63fa00b2302d596511b949fc",
  //     "title": "Anthrilo Half Sleeves Panda & Rainbow Printed Night Suit - White",
  //     "description": "Age : 0 - 6 Months",
  //     "mrp": 699,
  //     "discount": 22,
  //     "brand": "camel",
  //     "category": "girl fashion",
  //     "gender": "girl",
  //     "quantity": "89",
  //     "rating": 4.5,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12713343a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand Name - Anthrilo  Type - Night Suit  Fabric - Cotton  Neck - Round Neck  Sleeves - Half Sleeves",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63fa012d302d596511b949fe",
  //     "title": "Babyhug 100% Cotton Half Sleeves Dot Print Frock with Mesh - Red",
  //     "description": "Age : 7 - 12 Months",
  //     "mrp": 899,
  //     "discount": 21,
  //     "brand": "camel",
  //     "category": "girl fashion",
  //     "gender": "girl",
  //     "quantity": "66",
  //     "rating": 4.8,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12807815a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug  Type - Frock  Fabric - Cotton Jersey/ Knit  Sleeves - Half  Neck - Round",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63fa0197302d596511b94a00",
  //     "title": "Babyhug 100% Cotton Short Sleeves Frock Floral Print - Blue",
  //     "description": "Age : 7-12 Months",
  //     "mrp": 699,
  //     "discount": 10,
  //     "brand": "zion",
  //     "category": "girl fashion",
  //     "gender": "girl",
  //     "quantity": "87",
  //     "rating": 4.7,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11878757a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug Type - Frock  Fabric - 100% Cotton/Knit Sleeves - Short Sleeves Neck - Round Neck",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63fa01fa302d596511b94a02",
  //     "title": "Babyhug Short Sleeves Frock With Belt And Star Print - Denim Blue",
  //     "description": "Age : 6-9 Months",
  //     "mrp": 699,
  //     "discount": 15,
  //     "brand": "zion",
  //     "category": "girl fashion",
  //     "gender": "girl",
  //     "quantity": "44",
  //     "rating": 4.4,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11725438a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug  Type - Frock   Fabric - 100% Cotton/Woven  Neck - Peter pan Collar   Frock Sleeves - Short Sleeves  Closure - Front Buttons",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63fa025f302d596511b94a04",
  //     "title": "ToffyHouse Cap Sleeves Checked Frock With Solid Shrug- Multicolor",
  //     "description": "Age : 6-9 Months",
  //     "mrp": 1045,
  //     "discount": 25,
  //     "brand": "zion",
  //     "category": "girl fashion",
  //     "gender": "girl",
  //     "quantity": "66",
  //     "rating": 5,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11681091a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - ToffyHouse Type - Frock with Shrug Fabric - Cotton/Woven Sleeves - Cap Neck - Round",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63fa02f8302d596511b94a06",
  //     "title": "Babyhug 100% Cotton Frock With Full Sleeves Shrug All Over Printed - Yellow",
  //     "description": "Age 8-12 Months",
  //     "mrp": 799,
  //     "discount": 19,
  //     "brand": "camel",
  //     "category": "girl fashion",
  //     "gender": "girl",
  //     "quantity": "55",
  //     "rating": 5,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11721544a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug Type - Frock with shrug Fabric - 100% Cotton Frock Sleeves - Sleeveless Shrug Sleeves - Full Sleeves",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63fa0416302d596511b94a08",
  //     "title": "Babyhug 100% Cotton Frill Sleeves Frock Star Print - Navy Blue",
  //     "description": "Age : 10 - 18 Months",
  //     "mrp": 799,
  //     "discount": 15,
  //     "brand": "babyhugs",
  //     "category": "girl fashion",
  //     "gender": "girl",
  //     "quantity": "5",
  //     "rating": 5,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11720454a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug  Type - Frock  Fabric - Cotton/Knit  Sleeves - Frill  Neck - Round Neck",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63fa04d4302d596511b94a0a",
  //     "title": "Babyhug 100% Cotton Frock With Short Sleeves Shrug Floral Embroidery- Light Blue & Red",
  //     "description": "Age : 12 - 18 Months",
  //     "mrp": 945,
  //     "discount": 23,
  //     "brand": "babyhugs",
  //     "category": "girl fashion",
  //     "gender": "girl",
  //     "quantity": "44",
  //     "rating": 4.1,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11879292a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug  Type - Frock With Shrug  Fabric - Cotton/Knit  Sleeves - Short  Neck - Round Neck",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "63fa05ab302d596511b94a0d",
  //     "title": "Babyhug 100% Cotton Full Sleeves Frock Dress Floral Embroidered - Blue",
  //     "description": "Age : 6 - 12 Months",
  //     "mrp": 899,
  //     "discount": 12,
  //     "brand": "camel",
  //     "category": "girl fashion",
  //     "gender": "girl",
  //     "quantity": "80",
  //     "rating": 3.8,
  //     "thumbnail": "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11600007a.webp",
  //     "images": [
  //       ""
  //     ],
  //     "specification": "Brand - Babyhug Type - Frock  Fabric - Cotton/Knit Sleeves - Full Sleeves Neck - Round Neck",
  //     "__v": 0
  //   }
  // ]

const AddtoCart = async(payload) => {

  let data = {
    title:payload.title,
    thumbnail:payload.thumbnail,
    mrp:payload.mrp,
    Cart_quantity:1,
    mrp:payload.mrp,
    discount:payload.discount
  }
  
  fetch('http://localhost:7300/cart/addtocart',{
    method:'POST',
    headers:{
        "Content-type":"application/json",
        "authorization":localStorage.getItem('token')
    },
    body:JSON.stringify(data)
}).then(res => res.json())
.then(res =>
  toast({
    title: 'Product is Added to  Cart !',
    position: "top",
    isClosable: true,
    status:'warning'
  })
)

.catch(err => console.log(err))
}




  const getAllProducts = async () => {

   if (location) {
      await axios.get(`http://localhost:7300/products/get/${location.search}`).then((res) => {
       // console.log(res.data)
        setProdArr(res.data)
      })
    }
  
    else {
      await axios.get(`http://localhost:7300/products/get`).then((res) => {
        //console.log(res.data)
        setProdArr(res.data)
      })
    }

  }

  useEffect(() => {
    getAllProducts()
  }, [location])



  return (
    <Box bg='#ffffff' mt='20px' mb='30px'>
      <Flex w='95%' m='auto' gap='20px' flexDirection={{ base: 'column', md: 'row' }}>
        <Box w='20%' display={{ base: 'none', md: 'block' }}>
          <Text p='10px' fontWeight='bold' bg='#eeeeee'>FILTER BY</Text>
          <Sidebar />
        </Box>

        <Box w={{ base: '95%', md: '80%' }} >
          {ProdArr.length === 0 ? (
            <Box p='20px' mt='30px' mb='50px' w='80%' m='auto' textAlign='center'>
              <Image m='auto' src='https://www.aamtrading.com/assets/img/nproduct.png ' alt='cart_is_empty' />

            </Box>
          ) : <SimpleGrid columns={{ base: 2, md: 4 }} spacing='5px'>

            {ProdArr && ProdArr.map((ele) => (
              <Box key={ele._id} p='10px' _hover={{ boxShadow: 'base', rounded: 'md', border: '1px solid gray' }}>
                <Image w='100%' src={ele.thumbnail} alt={ele.title} />
                <Text lineHeight='15px' fontSize='14px'>{ele.title}</Text>
                <Text mt='5px' fontSize='12px' lineHeight='13px'>{ele.description}</Text>

                <Flex gap='3px' pt='5px' mt='10px' pb='5px' color='#f39019' borderTop='1px solid gray' borderBottom='1px solid gray'>
                  {ele.rating === 1 ? one : '' || ele.rating === 2 ? two : '' || ele.rating === 3 ? three : '' || ele.rating >= 3.1 && ele.rating < 4 ? threenhalf : '' || ele.rating === 4 ? four : '' || ele.rating >= 4.1 ? fournhalf : ''}
                </Flex>

                <Flex gap='5px' mt='10px' fontSize={{ base: '12px', md: '15px' }}>
                  <Flex alignItems='center' as='b' color='#282828'><BiRupee /><Text>{ele.mrp}</Text></Flex>
                  <Flex as='del' alignItems='center'><BiRupee />{Math.floor(ele.mrp + ((ele.mrp * ele.discount) / 100))}</Flex>
                  <Flex color='#e53935'>({ele.discount}% Off)</Flex>
                </Flex>

                <Flex alignItems='center' gap='5px' flexDirection={{ base: 'column', md: 'row' }}>
                  <Text fontSize='12'>Get it by</Text>
                  <Text as='b' fontSize='12'>Wednesday, Mar 1</Text>
                </Flex>

                <Flex mt='12px' gap='5px'>
                  <Button onClick={()=>AddtoCart(ele)} colorScheme='orange'>ADD TO CART</Button>
                  <Button display={{ base: 'none', md: 'block' }}>SHORTLIST</Button>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>

          }
        </Box>

      </Flex>
    </Box>




  );
};

export default ProductsPage;
