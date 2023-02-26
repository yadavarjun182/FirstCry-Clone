import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Stack,
    HStack,
  } from '@chakra-ui/react'
import React from 'react';
import { useState } from 'react';

export default function AddProductAdmin() {
    const cancelRef = React.useRef()
    let info = {
      title: "",
      description: "",
      mrp: "",
      discount: "",
      brand: "",
      category: "",
      gender: "",
      quantity: "",
      rating: "",
      thumbnail: "",
      images: "",
      specification: "",
    };
const [product, setProduct] = useState(info);
const [data, setData] = useState([]);
const { isOpen, onOpen, onClose } = useDisclosure();

const addtoDBS = (payload) => {
  fetch("http://localhost:7300/products/add", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const handelchange = (e) => {
  let { name, value, type } = e.target;
  let valpro = type === "number" ? Number(value) : value;
  setProduct({ ...product, [name]: valpro });
};

const submitData = (event) => {
  event.preventDefault();
  addtoDBS(product);
  setProduct(info);
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
                
              </AlertDialogBody>
              <form
              onSubmit={submitData}
                      >
                          <Stack>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  name="title"
                  value={product.title}
                  placeholder="title"
                  onChange={handelchange}
                  type="text"
                />
              </FormControl>
              <br />
              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Input
                  name="description"
                  value={product.description}
                  placeholder="description----"
                  onChange={handelchange}
                  type="text"
                                  />
                                  </FormControl>
                              <br />
                              <HStack>
                <FormControl isRequired>
                  <FormLabel>MPR</FormLabel>
                  <Input
                    name="mrp"
                    value={product.mrp}
                    placeholder="mrp"
                    onChange={handelchange}
                    type="text"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Discount</FormLabel>
                  <Input
                    name="discount"
                    value={product.discount}
                    placeholder="discount"
                    onChange={handelchange}
                    type="number"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Brand</FormLabel>
                  <Input
                    name="brand"
                    value={product.brand}
                    placeholder="brand"
                    onChange={handelchange}
                    type="text"
                  />
                                  </FormControl>
                                  </HStack>
                <br />
                <FormControl isRequired>
                  <FormLabel>Category</FormLabel>
                  <Input
                    name="category"
                    value={product.category}
                    placeholder="category"
                    onChange={handelchange}
                    type="text"
                  />
                </FormControl>
                              <br />
                              <HStack>
                <FormControl isRequired>
                  <FormLabel>Gender</FormLabel>
                  <Input
                    name="gender"
                    value={product.gender}
                    placeholder="gender"
                    onChange={handelchange}
                    type="text"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Quantity</FormLabel>
                  <Input
                    name="quantity"
                    value={product.quantity}
                    placeholder="quantity"
                    onChange={handelchange}
                    type="name"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Rating</FormLabel>
                  <Input
                    name="rating"
                    value={product.rating}
                    placeholder="rating"
                    onChange={handelchange}
                    type="number"
                  />
                                  </FormControl>
                                  </HStack>
                
                <br />
                <FormControl isRequired>
                  <FormLabel>Thumbnail</FormLabel>
                  <Input
                    name="thumbnail"
                    value={product.thumbnail}
                    placeholder="thumbnail"
                    onChange={handelchange}
                    type="text"
                  />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <FormLabel>Specification</FormLabel>
                  <Input
                    name="specification"
                    value={product.specification}
                    placeholder="specification"
                    onChange={handelchange}
                    type="text"
                  />
                </FormControl>
                          </Stack>
                          <FormControl isRequired bg={'facebook.400'} borderRadius={8}  _hover={{bg:'whatsapp.400'}}>
                <Input type="submit" value={"SUBMIT"} color='white' fontSize={22} />
              </FormControl>
            </form>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue' onClick={onClose} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }