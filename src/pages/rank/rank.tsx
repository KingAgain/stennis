import React, { useEffect, useState } from 'react'
import { Card,Tag,Table,Divider,Skeleton } from 'antd'
import { useParams } from 'react-router-dom';
import './rank.css'
import axios from 'axios'

const PRank: React.FC = () => {
    interface kvs {
        [key: string]: string;
    }
    const columns=[]
    const tags=[]
    const staticTags=['本期排名','昵称','总积分']
    const [selectedTags, setSelectedTags] = useState<string[]>(staticTags);
    const translate: kvs = {
        'syear': '单打世界排名',
        'dyear': '双打世界排名',
        'srace': '单打冠军排名',
        'drace': '双打冠军排名',
        'stats': '统计数据'
    };
    const type = useParams().type as string;

    let rankData:Record<string,string|number>[] = [];
    async function getRank() {
        const ranking = await axios.get(`${process.env.REACT_APP_API_URL}/rank/${type}`)
        rankData = ranking.data.rank
    }
    useEffect(() => {
        getRank()
        // eslint-disable-next-line
    }, [])
    if(rankData.length===0){
        return <Skeleton active />
    }


    const handleTagChange = (tag:string , checked:boolean) => {
        const newSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter((t) => t !== tag);
        setSelectedTags(newSelectedTags)
    }
    for (const titles in rankData[0]){
        if(!staticTags.includes(titles)){
            tags.push(<Tag.CheckableTag
                        key={titles}
                        checked={selectedTags.includes(titles)}
                        onChange={(checked)=> handleTagChange(titles,checked)}
                        >
                            {titles}
                        </Tag.CheckableTag>)
        }
        columns.push({
            title: titles,
            dataIndex: titles,
            hidden:!selectedTags.includes(titles),
            width:titles=="昵称"?'7%':'1%',
            sorter: (a: Record<string, string | number>, b: Record<string, string | number>) => {
                const aValue = a[titles];
                const bValue = b[titles];
                if (typeof aValue === 'number' && typeof bValue === 'number') {
                    return aValue - bValue;
                } else {
                    if (aValue < bValue) {
                        return -1;
                    } else if (aValue > bValue) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }
        })
    }
    const pagination = {
        total: rankData.length,
        showTotal: (total:number) => `共${total}位球员`,
        defaultPageSize: 20,
        defaultCurrent: 1,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50', '100'],
      };
    return (
        <div className='rank'>  
            <Card className='card-container'>
                <h1>{translate[type]}</h1>
            </Card>
            <div>
            <Card className="card-container">
                <div className="tag-container">
                    {tags}
                </div>
                <Divider />
                <Table dataSource={rankData} columns={columns} showSorterTooltip={false} pagination={pagination}/>
            </Card>
        </div>
        </div>
    )
}

export default PRank