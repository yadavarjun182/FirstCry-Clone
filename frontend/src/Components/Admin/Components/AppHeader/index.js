import { Image, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";

function AppHeader() {
  const [ setComments] = useState([]);
  const [ setOrders] = useState([]);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="AppHeader" style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
      <Image
        width={40}
        src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
      ></Image>
      <Typography.Title>Admin Dashboard</Typography.Title>
      <Space>
      </Space>
    </div>
  );
}
export default AppHeader;
