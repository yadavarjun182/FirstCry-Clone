import { Box, Heading, HStack, Text, Image } from "@chakra-ui/react";
import { Avatar, Rate, Space, Table, } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";
import AddProductAdmin from "../AddProduct/AddProductAdmin";
import "./index.module.css"

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7300/products/get/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [data]);

  return (
    <div style={{ width: "88%", margin: "auto" }}>
      <Space size={20} direction="vertical">
        <HStack gap={"400px"}>
          <Heading level={4}>Inventory</Heading>
          <Box><AddProductAdmin /></Box>
        </HStack>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>PRODUCT</th>
              <th>IMAGE</th>
              <th>RATING</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map((el) => (
                <tr key={el._id}>
                  <td><Text>{el._id}</Text></td>
                  <td><Text>{el.title}</Text></td>
                  <td><Image src={el.thumbnail} alt={el.title} width="70px" /></td>
                  <td><Text>{el.rating}</Text></td>
                  <td><Text>{el.quantity}</Text></td>
                  <td><Text>{el.mrp}</Text></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Space>
    </div>
  );
}
export default Inventory;
