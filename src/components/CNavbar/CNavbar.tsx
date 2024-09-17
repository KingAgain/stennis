import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from '@nextui-org/react';
import Icon from '../../../static/icon.tsx'
import ChevronDown from '../../../static/icons.tsx'

interface NavbarContent {
    title: string,
    href?: string,
    children?: NavbarContent[],
    startContent?: React.ReactNode
}

const CNavbar: React.FC<{ navbarContents: NavbarContent[] }> = ({ navbarContents }) => {
    const navbarItems = [];
    for (const i in navbarContents) {
        if (!navbarContents[i].children) {
            navbarItems.push(
                <NavbarItem>
                    <Button href={navbarContents[i].href} as={Link} color='default' variant='light'>{navbarContents[i].title}</Button>
                </NavbarItem>
            )
        }
        else {
            const navbarItem = []
            for (const j in navbarContents[i].children) {
                navbarItem.push(
                    <DropdownItem className='text-center' startContent={navbarContents[i].children[j].startContent} as={Link} href={navbarContents[i].children[j].href}>
                        <Link size='sm' color='foreground'>{navbarContents[i].children[j].title}</Link>
                    </DropdownItem>
                )
            }
            const icons = {
                chevron: <ChevronDown fill="currentColor" size={16} />,
            }
            navbarItems.push(
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button color='default' variant='light' endContent={icons.chevron}>{navbarContents[i].title}</Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu>
                        {navbarItem}
                    </DropdownMenu>
                </Dropdown>
            )
        }
    }
    return (
        <div>
            <Navbar isBordered={true} className='shadow-lg'>
                <NavbarBrand href="/" as={Link} className='text-black'>
                    <Icon width="32" height="32" />
                    <p className="font-bold text-inherit">STennis</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {navbarItems}
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button color="primary" href="#" variant="light">
                            登录
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    )
}

export default CNavbar