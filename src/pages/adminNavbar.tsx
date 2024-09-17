import React from 'react'
import CNavbar from '../components/CNavbar/CNavbar';
import { Outlet } from 'react-router-dom';

const PAdminNavbar: React.FC = () => {
  const navbarContents = [
    { title: '后台中心', href: '/admin' },
    { title: '用户管理', href: '/admin/user' },
    { title: '赛事管理', href: '/admin/tournament' },
    { title: '选手管理', href: '/admin/player' },
  ]
  
  
  return (
    <div>
      <CNavbar navbarContents={navbarContents}/>
      <Outlet />
    </div>
  )
}

export default PAdminNavbar