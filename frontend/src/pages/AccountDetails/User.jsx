import React from "react";
import { Box,Text,Input,Flex,Radio,Image,SimpleGrid } from '@chakra-ui/react';


export const User = () => {

    return(
        <Box>
          <table>
            <tr>
                <td> <Text>Name :</Text></td>
                <td><Input placeholder='small size' size='sm' /></td>
            </tr>
          </table>
          <table>
            <tr>
                <td> <Text>I am :</Text></td>
                <td><Input placeholder='small size' size='sm' /></td>
            </tr>
          </table>
        </Box>
    )
}