import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    HStack,
  } from '@chakra-ui/react'
import React from 'react';
import { useState } from 'react';

export default function AddProductAdmin() {
  const cancelRef = React.useRef()
  const [title, setTitle] = useState("");
  const [description, setDecsription] = useState("");
  const [mrp, setMrp] = useState("");
  const [discount, setDiscount] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rating, setRating] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState([]);
  const [specification, setSpecification] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

const handleSubmit = (e) => {
  const productData = {title, description, mrp, discount, brand, category, gender, quantity, rating, thumbnail, images, specification };
  console.log(productData);

  fetch("http://localhost:7300/products/add", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(productData),
  })
    .then((res) => res.json())
      console.log(productData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
  
    return (
      <>
        <Button colorScheme='blue' onClick={onOpen}>
          Add Products
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Add Products
              </AlertDialogHeader>
  
              <AlertDialogBody>
              <form id='product-form'
                      >
                          <Stack>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  name="title"
                  value={title}
                  placeholder="title"
                  onChange={e => setTitle(e.target.value)}
                  type="text"
                />
              </FormControl>
              <br />
              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Input
                  name="description"
                  value={description}
                  placeholder="description----"
                  onChange={e => setDecsription(e.target.value)}
                  type="text"
                  />
                  </FormControl>
                              <br />
                              <HStack>
                <FormControl isRequired>
                  <FormLabel>MPR</FormLabel>
                  <Input
                    name="mrp"
                    value={mrp}
                    placeholder="mrp"
                    onChange={e => setMrp(e.target.value)}
                    type="text"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Discount</FormLabel>
                  <Input
                    name="discount"
                    value={discount}
                    placeholder="discount"
                    onChange={e => setDiscount(e.target.value)}
                    type="number"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Brand</FormLabel>
                  <Input
                    name="brand"
                    value={brand}
                    placeholder="brand"
                    onChange={e => setBrand(e.target.value)}
                    type="text"
                  />
                                  </FormControl>
                                  </HStack>
                <br />
                <FormControl isRequired>
                  <FormLabel>Category</FormLabel>
                  <Input
                    name="category"
                    value={category}
                    placeholder="category"
                    onChange={e => setCategory(e.target.value)}
                    type="text"
                  />
                </FormControl>
                              <br />
                              <HStack>
                <FormControl isRequired>
                  <FormLabel>Gender</FormLabel>
                  <Input
                    name="gender"
                    value={gender}
                    placeholder="gender"
                    onChange={e => setGender(e.target.value)}
                    type="text"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Quantity</FormLabel>
                  <Input
                    name="quantity"
                    value={quantity}
                    placeholder="quantity"
                    onChange={e => setQuantity(e.target.value)}
                    type="name"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Rating</FormLabel>
                  <Input
                    name="rating"
                    value={rating}
                    placeholder="rating"
                    onChange={e => setRating(e.target.value)}
                    type="number"
                  />
                                  </FormControl>
                                  </HStack>
                
                <br />
                <FormControl isRequired>
                  <FormLabel>Thumbnail</FormLabel>
                  <Input
                    name="thumbnail"
                    value={thumbnail}
                    placeholder="thumbnail"
                    onChange={e => setThumbnail(e.target.value)}
                    type="text"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Images</FormLabel>
                  <Input
                    name="images"
                    value={images}
                    placeholder="images"
                    onChange={e => setImages(e.target.value)}
                    type="text"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Specification</FormLabel>
                  <Input
                    name="specification"
                    value={specification}
                    placeholder="specification"
                    onChange={e => setSpecification(e.target.value)}
                    type="text"
                  />
                </FormControl>
                          </Stack>
            </form>
              </AlertDialogBody>
              
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue' onClick={handleSubmit} ml={3}>
                  Add
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }