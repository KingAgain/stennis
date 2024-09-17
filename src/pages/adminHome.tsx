import React from 'react'
import { Card, CardHeader, CardBody, Divider, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'

interface CardProps {
    title: string,
    data: number
}

interface TableProps {
    data: { [key:string]: number|string }[]
    initSortKey?: string
}

const PAdminHome: React.FC = () => {
    const datau = [
        { title: '今日UV', data: 1 },
        { title: '昨日UV', data: 1 },
        { title: '近7日UV', data: 10 },
        { title: '近30日UV', data: 100 },
        { title: '新用户', data: 1 },
        { title: '总用户', data: 100 },
    ]
    const dataChart = [
        { name: '09-02', uv: 6 },
        { name: '09-03', uv: 3 },
        { name: '09-04', uv: 5 },
        { name: '09-05', uv: 10 },
        { name: '09-06', uv: 8 },
        { name: '09-07', uv: 9 },
        { name: '09-08', uv: 1 },
    ]
    const dataPage = [
        { "url": '/', "uv": 6 },
        { "url": '/about', "uv": 3 },
        { "url": '/contact', "uv": 5 },
        { "url": '/blog', "uv": 10 },
        { "url": '/blog/1', "uv": 8 },
        { "url": '/blog/2', "uv": 9 },
        { "url": '/blog/3', "uv": 1 },
    ]
    const CCard: React.FC<CardProps> = (prop: CardProps) => {
        return (
            <Card className='w-full px-6 mx-4'>
                <CardHeader className="flex justify-center">
                    <p className="text-lg text-center font-light">{prop.title}</p>
                </CardHeader>
                <Divider />
                <CardBody className="flex">
                    <p className="text-2xl text-center font-normal">{prop.data}</p>
                </CardBody>
            </Card>
        )
    }
    const CTable: React.FC<TableProps> = (TableProps: TableProps) => {
        if (TableProps.initSortKey) {
            TableProps.data.sort((a, b) => (a[TableProps.initSortKey!] > b[TableProps.initSortKey!]) ? -1 : 1)
        }
        const tableHeaders = Object.keys(TableProps.data[0]).map((key, index) => {
            return <TableColumn key={index}>{key}</TableColumn>
        })
        const tableRows = TableProps.data.map((row, index) => {
            return (
                <TableRow key={index}>
                    {Object.values(row).map((cell, index) => {
                        return <TableCell key={index}>{cell}</TableCell>
                    })}
                </TableRow>
            )
        })
        return (
            <Table removeWrapper>
                <TableHeader>
                    {tableHeaders}
                </TableHeader>
                <TableBody>
                    {tableRows}
                </TableBody>
            </Table>
        )
    }
    
    return (
        <div className="justify-center m-8 flex flex-col">
            <div className='w-[80vw] self-center'>
                <div className="flex items-start justify-center gap-2 mb-8">
                    {datau.map((data, index) => {
                        return (
                            <CCard title={data.title} data={data.data} key={index} />
                        )
                    }
                    )}
                </div>
                <div className="flex items-start justify-center gap-2 mb-8" >
                    <Card className='w-full px-6 mx-4'>
                        <CardHeader className="flex justify-center">
                            <p className='text-lg font-light'>近7日UV</p>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <AreaChart width={550} height={300} data={dataChart}>
                                <XAxis dataKey="url" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </CardBody>
                    </Card>
                    <Card className='w-full px-6 mx-4'>
                        <CardHeader className="flex justify-center">
                            <p className='text-lg font-light'>最常访问页面</p>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <CTable data={dataPage} initSortKey='uv'/>
                        </CardBody>
                    </Card>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default PAdminHome