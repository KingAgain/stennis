import React from 'react'
import CNavbar from '../components/CNavbar/CNavbar';
import { Outlet } from 'react-router-dom';
import { Image } from '@nextui-org/react';

const PNavbar: React.FC = () => {
  const navbarContents = [
    { title: '官方排名', href: '/ranking' },
    { title: '巡回赛历', href: '/calendar' },
    { title: '签表', children:[{title: '帕勒莫',href:'/tournament/1',startContent:<Image src='../../static/WTA250.png' height={32} width={32} radius='sm'/>}] },
    { title: '历史战绩', href: '/history' },
    { title: 'H2H', href: '/h2h' },
  ]
  
  
  return (
    <div>
      <CNavbar navbarContents={navbarContents}/>
      <Outlet />
    </div>
  )
}

export default PNavbar
