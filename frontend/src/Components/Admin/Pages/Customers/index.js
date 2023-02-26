import { Heading } from "@chakra-ui/layout";
import { Space, } from "antd";
import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

function Customers() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7300/users/get/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div style={{width:"50%", margin:"auto"}}>
    <Space size={20} direction="vertical">
      <Heading level={4}>Customers</Heading>
      <TableContainer>
  <Table variant='striped' colorScheme='teal' marginLeft={"auto"} marginRight={"auto"} >
    <TableCaption>All User's Data Display Here</TableCaption>
    <Thead>
      <Tr>
        <Th>User ID</Th>
        <Th>Name</Th>
        <Th>Contact</Th>
        <Th>Email</Th>
      </Tr>
    </Thead>
    <Tbody>
      { data && data.map((el) => (
          <Tr>
          <Td>{el._id}</Td>
          <Td>{el.name}</Td>
          <Td>{el.contact}</Td>
          <Td>{el.email}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>
    </Space>
    </div>
  );
}
export default Customers;
