import React from "react";
import { Image, Title } from "@chakra-ui/react"; 

function Header() {

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
      ></Image>
      <Title>Admin Dashboard</Title>
    </div>
  );
}
export default Header;
