
import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import React from 'react'

const PreschoolComponent = () => {
  return (
    <Popover trigger="hover"
    isLazy
    openDelay={300}>
  <PopoverTrigger>
  <p>Stores & Preschools</p>
  </PopoverTrigger>
  <PopoverContent borderRadius="none" width={"auto"}>
  <PopoverBody >
  <ul className='nav-store-list'>
    <li>Find Store</li>
    <li>Find PreSchool</li>
    <li>Open a Store</li>
    <li>Open a PreSchool</li>
  </ul>

  </PopoverBody>
  </PopoverContent>
  </Popover>
  )
}

export default PreschoolComponent