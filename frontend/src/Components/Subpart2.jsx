import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { GiDivert } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import MoreComponent from './Subpart3'

const TabletNavbar = () => {
  
  const navigate = useNavigate();

  const islogin = useSelector((store) => store.Authreducer.data?.user);

  const handelLogout=()=>{
     axios.get('https://lazy-puce-fawn.cyclic.app/user/logout')
        
    localStorage.removeItem('token')
    
    window.location.href="/";

  }
  
  return (
    <Tabletnav>
        <ul className='tablet-nav-top-right'>
            <li className='location-navv'> <CiLocationOn fontSize={"16px"}/> Select location</li>
            <li className='parents'>FirstCry Parenting</li>
            <li className='more-component'><MoreComponent/></li>
           {islogin ? (
        <li onClick={handelLogout} >Logout</li>
      ) : (
        <li
          className="nav-login"
          style={{ textDecoration: "none" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login / Register
        </li>
      )}
        </ul>
    </Tabletnav>
  )
}

export default TabletNavbar

const Tabletnav = styled.div`
.tablet-nav-top-right{
      list-style-type: none;
    display: flex;
    gap: 10px;
    font-size: 11px;
    cursor: pointer;
    }
    .tablet-nav-top-right li{
      :hover {
      text-decoration: underline;
    }
    border-right: 0.5px solid lightgray;
    margin: 0px;
    padding-right: 5px;
    }
    .location-navv {
    display: flex;
    gap: 5px;
    border-right: none;
    font-weight: 400;
  }
    @media only screen and (min-width: 320px) and (max-width: 650px){
      .location-navv{
        display: none;
      }
      .parents{
        display: none;
      }
    }
`