import { ChevronDownIcon } from '@chakra-ui/icons';
import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';

const MoreComponent = () => {
  return (
    <Wrapper>
    <Popover trigger="hover"
    isLazy
    openDelay={300}>
  <PopoverTrigger>
  <p>More <ChevronDownIcon/></p>
  </PopoverTrigger>
  <PopoverContent borderRadius="none" width={"auto"}>
  <PopoverBody >
  <ul className='nav-store-list-m'>
    <li>Find Store</li>
    <li>Find PreSchool</li>
    <li>Open a Store</li>
    <li>Open a PreSchool</li>
    <li>Support</li>
    <li>Track Order</li>
    <li>Shortlist</li>
  </ul>
  </PopoverBody>
  </PopoverContent>
  </Popover>
  </Wrapper>
  )
}

export default MoreComponent;

const Wrapper = styled.div`

  .nav-store-list-m{
    list-style-type: none;

  }
  li{
    border-right: none;
  }
  .nav-store-list-m li{
    cursor: pointer;
    border-right: none;
    :hover{
      text-decoration: none;
      background-color: #f2f2f2;
    };
    margin: 8px 0px;
  }


`