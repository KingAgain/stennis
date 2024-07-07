import React, { useEffect } from "react";
import { Card,Divider,Table,Button } from "antd";
import { useNavigate, useParams } from 'react-router-dom'
import './bracker_challenge_rank.css'
import axios from 'axios'

const CRank: React.FC = () => {
    const tournament = `${useParams().bcid}_${useParams().year}_${useParams().type}`
    interface Rank{
        rank: number;
        username: string;
        score: number;
        matches: number;
    }
    let bCRank : Rank[] = [];
    const columns = [
    {title: '排名',dataIndex: 'rank',key: 'rank',},
    {title: '用户名',dataIndex: 'username',key: 'username',},
    {title: '分数',dataIndex: 'score',key: 'score',},
    {title: '场次',dataIndex: 'matches',key: 'matches',},
    ];
    async function getRank() {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/bc/${tournament}/rank`);
        bCRank = response.data.ranking;
    }

    useEffect(() => {
        getRank();
    // eslint-disable-next-line
    }, []);
    const navigator = useNavigate()
    const navigateToParent = () => {
        const currentHashPath = window.location.hash;
        const currentPath = currentHashPath.replace(/^#/, '');
        const segments = currentPath.split('/').filter(segment => segment !== '');
        const newHashPath = segments.slice(0, -1).join('/');
        console.log(newHashPath);
        navigator(newHashPath);
    };
    bCRank.sort((a,b)=>a.rank-b.rank)
    const bcTable = <Table dataSource={bCRank} columns={columns}  pagination={false} bordered={true} showSorterTooltip={false}/>;
    return (
        <div>
            <Card className='card-container'>
                <h2 style={{ display: 'inline' }}>预测排行榜</h2>
                <Button type='link' onClick={navigateToParent}>
                  返回
                </Button>
                <Divider/>
                <div>
                    {bcTable}
                </div>
            </Card>
        </div>
    )
};

export default CRank;