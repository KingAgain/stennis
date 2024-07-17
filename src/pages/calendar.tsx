import React from "react";
import { Button, ButtonGroup, Chip, Card, CardBody, Dropdown, Image, DropdownTrigger, DropdownMenu, DropdownItem, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react"
import { CalendarOutlined } from "@ant-design/icons";

const PCalendat: React.FC = () => {
  return (
    <div className="justify-center m-8 flex flex-col">
      <Navbar isBordered={true} className='rounded-lg bg-zinc-300/[.51] top-16 shadow-small mb-2 justify-center'>
        <NavbarBrand>
          <Dropdown>
            <DropdownTrigger>
              <Button className="max-w-2 self-center text-gray-800" variant="light" startContent={<CalendarOutlined />}>2024</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>2021</DropdownItem>
              <DropdownItem>2022</DropdownItem>
              <DropdownItem>2023</DropdownItem>
              <DropdownItem>2024</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarBrand>
        <NavbarContent justify="center" className="flex gap-4 flex-wrap">
          <ButtonGroup>
          <Button variant='light'>一月</Button>
          <Button variant='light'>二月</Button>
          <Button variant='light'>三月</Button>
          <Button variant='light'>四月</Button>
          <Button variant='light'>五月</Button>
          <Button variant='light'>六月</Button>
          <Button variant='light'>七月</Button>
          <Button variant='light'>八月</Button>
          <Button variant='light'>九月</Button>
          <Button variant='light'>十月</Button>
          <Button variant='light'>十一月</Button>
          <Button variant='light'>十二月</Button>
          </ButtonGroup>
        </NavbarContent>
      </Navbar>
      <Chip color="default" className="m-2 self-center shadow-medium" size='lg' variant="flat">W27 07-01</Chip>
      <div className="flex flex-row justify-center flex-wrap">
        <Card isFooterBlurred radius="lg" className="border-none mx-8 my-4" shadow="md" isPressable>
          <CardBody className="overflow-visible p-0 grid grid-cols-2">
            <Image className="object-cover aspect-square flex-1" src="../../../static/tournament-grass.jpg" width={150} radius="none" />
            <div className="m-2 grid grid-rows-2">
              <div className="flex justify-around place-self-center">
                <Image src='../../../static/GSWC.png' height={40} width={40} />
                <div className="flex flex-col px-2">
                  <h5 className="text-sm text-black font-bold text-center">温网</h5>
                  <p className="text-xs text-gray-600 text-center">英国</p>
                </div>
              </div>
              <div className="place-self-center">
                <h5 className="text-xs text-black py-1 text-center">ED小童鞋</h5>
                <p className="text-xs text-black text-center">彩虹岛吧打酱油</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Chip color="default" className="m-2 self-center shadow-medium" size='lg' variant="flat">W29 07-15</Chip>
      <div className="flex flex-row justify-center my-4 flex-wrap">
        <Card isFooterBlurred radius="lg" className="border-none mx-8" isPressable>
          <CardBody className="overflow-visible p-0 grid grid-cols-2">
            <Image className="object-cover aspect-square flex-1" src="../../../static/tournament-clay.jpg" width={150} radius="none" />
            <div className="m-2 grid grid-rows-2">
              <div className="flex justify-around place-self-center">
                <Image src='../../../static/WTA250.png' height={40} width={40} />
                <div className="flex flex-col px-2">
                  <h5 className="text-sm text-black font-bold text-center">布达佩斯</h5>
                  <p className="text-xs text-gray-600 text-center">匈牙利</p>
                </div>
              </div>
              <div className="place-self-center">
                <h5 className="text-xs text-black py-1 text-center">花滑女王水痘</h5>
                <p className="text-xs text-black text-center">大嘴丽丽</p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card isFooterBlurred radius="lg" className="border-none mx-8" isPressable>
          <CardBody className="overflow-visible p-0 grid grid-cols-2">
            <Image className="object-cover aspect-square flex-1" src="../../../static/tournament-clay.jpg" width={150} radius="none" />
            <div className="m-2 grid grid-rows-2">
              <div className="flex justify-around place-self-center">
                <Image src='../../../static/WTA250.png' height={40} width={40} />
                <div className="flex flex-col px-2">
                  <h5 className="text-sm text-black font-bold text-center">帕勒莫</h5>
                  <p className="text-xs text-gray-600 text-center">意大利</p>
                </div>
              </div>
              <div className="place-self-center">
                <h5 className="text-xs text-black py-1 text-center">花滑女王水痘</h5>
                <p className="text-xs text-black text-center">大嘴丽丽</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Chip color="default" className="m-2 self-center shadow-medium" size='lg' variant="flat">W30 07-22</Chip>
      <div className="flex flex-row justify-center flex-wrap">
        <Card isFooterBlurred radius="lg" className="border-none mx-8 my-4" isPressable>
          <CardBody className="overflow-visible p-0 grid grid-cols-2">
            <Image className="object-cover aspect-square flex-1" src="../../../static/tournament-clay.jpg" width={150} radius="none" />
            <div className="m-2 grid grid-rows-2">
              <div className="flex justify-around place-self-center">
                <Image src='../../../static/WTA250.png' height={40} width={40} />
                <div className="flex flex-col px-2">
                  <h5 className="text-sm text-black font-bold text-center">布拉格</h5>
                  <p className="text-xs text-gray-600 text-center">捷克</p>
                </div>
              </div>
              <div className="place-self-center">
                <h5 className="text-xs text-black py-1 text-center">花滑女王水痘</h5>
                <p className="text-xs text-black text-center">大嘴丽丽</p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card isFooterBlurred radius="lg" className="border-none mx-8 my-4" isPressable>
          <CardBody className="overflow-visible p-0 grid grid-cols-2">
            <Image className="object-cover aspect-square flex-1" src="../../../static/tournament-clay.jpg" width={150} radius="none" />
            <div className="m-2 grid grid-rows-2">
              <div className="flex justify-around place-self-center">
                <Image src='../../../static/WTA250.png' height={40} width={40} />
                <div className="flex flex-col px-2">
                  <h5 className="text-sm text-black font-bold text-center">雅西</h5>
                  <p className="text-xs text-gray-600 text-center">罗马尼亚</p>
                </div>
              </div>
              <div className="place-self-center">
                <h5 className="text-xs text-black py-1 text-center">花滑女王水痘</h5>
                <p className="text-xs text-black text-center">大嘴丽丽</p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card isFooterBlurred radius="lg" className="border-none mx-8  my-4" isPressable>
          <CardBody className="overflow-visible p-0 grid grid-cols-2">
            <Image className="object-cover aspect-square flex-1" src="../../../static/tournament-hard.jpg" width={150} radius="none" />
            <div className="m-2 grid grid-rows-2">
              <div className="flex justify-around place-self-center">
                <Image src='../../../static/WTA125.png' height={40} width={40} />
                <div className="flex flex-col px-2">
                  <h5 className="text-sm text-black font-bold text-center">华沙</h5>
                  <p className="text-xs text-gray-600 text-center">波兰</p>
                </div>
              </div>
              <div className="place-self-center">
                <h5 className="text-xs text-black py-1 text-center">花滑女王水痘</h5>
                <p className="text-xs text-black text-center">大嘴丽丽</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default PCalendat