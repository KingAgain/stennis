import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from '@nextui-org/react';
import Icon from '../../static/icon.tsx'
import ChevronDown from '../../static/icons.tsx'
import { Outlet } from 'react-router-dom';

const PNavbar: React.FC = () => {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  }
  return (
    <div>
      <Navbar isBordered={true} className='shadow-lg'>
        <NavbarBrand href="/" as={Link} className='text-black'>
          <Icon width="32" height="32" />
          <p className="font-bold text-inherit">STennis</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Button href="/ranking" as={Link} color='default' variant='light'>官方排名</Button>
          </NavbarItem>
          <NavbarItem>
            <Button href="/calendar" as={Link} color='default' variant='light'>巡回赛历</Button>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button color='default' variant='light' endContent={icons.chevron}>签表</Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu>
              <DropdownItem className='text-center'>
                <Link href="/draw/1" as={Link} size='sm' color='foreground'>帕勒莫</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button color='default' variant='light' endContent={icons.chevron}>签表挑战</Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu>
              <DropdownItem className='text-center'>
                <Link size='sm' color='foreground'>2024马德里</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Button color='default' variant='light'>历史战绩</Button>
          </NavbarItem>
          <NavbarItem>
            <Button color='default' variant='light'>H2H</Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="primary" href="#" variant="light">
              登录
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default PNavbar
