import React from 'react'
import { Button, Dropdown, DropdownMenu, Input, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tabs, Tab, User, DropdownItem, DropdownTrigger } from "@nextui-org/react";
import ChevronDown from '../../static/icons.tsx'

const PRank: React.FC = () => {
    const headContent = React.useMemo(() => {
        const icons = {
            chevron: <ChevronDown fill="currentColor" size={16} />,
          }
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input isClearable className="w-full sm:max-w-[44%]" placeholder="搜索选手" />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button variant="flat" endContent={icons.chevron}>
                                    国籍
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem>中国</DropdownItem>
                                <DropdownItem>美国</DropdownItem>
                                <DropdownItem>法国</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button variant="flat" endContent={icons.chevron}>
                                    列
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem>总积分</DropdownItem>
                                <DropdownItem>起计分</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">选手总数：8</span>
                    <label className="flex items-center text-default-400 text-small">
                        每页显示条数:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }, [])
    return (
        <div className="justify-center m-8 flex flex-col">
            <Tabs className='mx-auto shadow-medium rounded-lg' color='primary' variant='underlined'>
                <Tab title='单打官方排名'>
                    <div className='minw-[100%]' />
                    <Table className='mx-auto my-8 w-[80vw] rounded-xl' isStriped topContent={headContent} shadow='md'>
                        <TableHeader>
                            <TableColumn>本期排名</TableColumn>
                            <TableColumn>上期排名</TableColumn>
                            <TableColumn>排名升降</TableColumn>
                            <TableColumn>昵称</TableColumn>
                            <TableColumn>国籍</TableColumn>
                            <TableColumn>总积分</TableColumn>
                            <TableColumn>起计分</TableColumn>
                            <TableColumn>参赛数量</TableColumn>
                            <TableColumn>冠军数量</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key="1">
                                <TableCell>3</TableCell>
                                <TableCell>17</TableCell>
                                <TableCell>14</TableCell>
                                <TableCell>
                                    <User name="花滑女王水痘" description="因你痴心不改" avatarProps={{ src: "../../../static/avatar1.jpg" }} />
                                </TableCell>
                                <TableCell>中国</TableCell>
                                <TableCell>4583</TableCell>
                                <TableCell>65</TableCell>
                                <TableCell>37</TableCell>
                                <TableCell>6</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>3</TableCell>
                                <TableCell>17</TableCell>
                                <TableCell>14</TableCell>
                                <TableCell>
                                    <User name="花滑女王水痘" description="因你痴心不改" avatarProps={{ src: "../../../static/avatar1.jpg" }} />
                                </TableCell>
                                <TableCell>中国</TableCell>
                                <TableCell>4583</TableCell>
                                <TableCell>65</TableCell>
                                <TableCell>37</TableCell>
                                <TableCell>6</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>3</TableCell>
                                <TableCell>17</TableCell>
                                <TableCell>14</TableCell>
                                <TableCell>
                                    <User name="花滑女王水痘" description="因你痴心不改" avatarProps={{ src: "../../../static/avatar1.jpg" }} />
                                </TableCell>
                                <TableCell>中国</TableCell>
                                <TableCell>4583</TableCell>
                                <TableCell>65</TableCell>
                                <TableCell>37</TableCell>
                                <TableCell>6</TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>3</TableCell>
                                <TableCell>17</TableCell>
                                <TableCell>14</TableCell>
                                <TableCell>
                                    <User name="花滑女王水痘" description="因你痴心不改" avatarProps={{ src: "../../../static/avatar1.jpg" }} />
                                </TableCell>
                                <TableCell>中国</TableCell>
                                <TableCell>4583</TableCell>
                                <TableCell>65</TableCell>
                                <TableCell>37</TableCell>
                                <TableCell>6</TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>3</TableCell>
                                <TableCell>17</TableCell>
                                <TableCell>14</TableCell>
                                <TableCell>
                                    <User name="花滑女王水痘" description="因你痴心不改" avatarProps={{ src: "../../../static/avatar1.jpg" }} />
                                </TableCell>
                                <TableCell>中国</TableCell>
                                <TableCell>4583</TableCell>
                                <TableCell>65</TableCell>
                                <TableCell>37</TableCell>
                                <TableCell>6</TableCell>
                            </TableRow>
                            <TableRow key="6">
                                <TableCell>3</TableCell>
                                <TableCell>17</TableCell>
                                <TableCell>14</TableCell>
                                <TableCell>
                                    <User name="花滑女王水痘" description="因你痴心不改" avatarProps={{ src: "../../../static/avatar1.jpg" }} />
                                </TableCell>
                                <TableCell>中国</TableCell>
                                <TableCell>4583</TableCell>
                                <TableCell>65</TableCell>
                                <TableCell>37</TableCell>
                                <TableCell>6</TableCell>
                            </TableRow>
                            <TableRow key="7">
                                <TableCell>3</TableCell>
                                <TableCell>17</TableCell>
                                <TableCell>14</TableCell>
                                <TableCell>
                                    <User name="花滑女王水痘" description="因你痴心不改" avatarProps={{ src: "../../../static/avatar1.jpg" }} />
                                </TableCell>
                                <TableCell>中国</TableCell>
                                <TableCell>4583</TableCell>
                                <TableCell>65</TableCell>
                                <TableCell>37</TableCell>
                                <TableCell>6</TableCell>
                            </TableRow>
                            <TableRow key="8">
                                <TableCell>3</TableCell>
                                <TableCell>17</TableCell>
                                <TableCell>14</TableCell>
                                <TableCell>
                                    <User name="花滑女王水痘" description="因你痴心不改" avatarProps={{ src: "../../../static/avatar1.jpg" }} />
                                </TableCell>
                                <TableCell>中国</TableCell>
                                <TableCell>4583</TableCell>
                                <TableCell>65</TableCell>
                                <TableCell>37</TableCell>
                                <TableCell>6</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Tab>
                <Tab title='双打官方排名' />
                <Tab title='单打冠军排名' />
                <Tab title='双打冠军排名' />
                <Tab title='统计数据' />
            </Tabs>
        </div>
    )
}

export default PRank