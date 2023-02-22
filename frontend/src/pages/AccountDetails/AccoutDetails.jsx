import React from "react";
import { Box,Flex,Text } from '@chakra-ui/react';
import { Sidebar } from "./Account_Left";
import {User} from './User'


export const AccoutDetails = () => {

    return(
        <Box w='70%' m='auto' bg='gray'>
         <Flex gap='20px'>
          <Sidebar/>

          <Box>
              <Text as='b'>My Profile</Text>
              <Box border='1px solid'>
               <User/>
              </Box>
          </Box>

         </Flex>
        </Box>
    )
}