import React from "react";
import { Text } from "@chakra-ui/react";
import {Link} from "react-router-dom"

function NavLink({ to, name, onClose, ...rest }) {


    return (
       <Link to={to} spy={true} smooth={true} offset={-60} duration={1000} onClick={onClose}>
            <Text

                size="sm"

                {...rest}
                _hover={{fontWeight:600}}
            >
                {name}
            </Text>
     
            </Link>
    );
}

export default NavLink;