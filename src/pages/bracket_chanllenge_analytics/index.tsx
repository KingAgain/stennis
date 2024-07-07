import React, { useEffect } from 'react'
import { Skeleton,Card,Divider,Table,Button } from "antd";
import { ColumnType } from 'antd/lib/table';
import { useNavigate } from 'react-router-dom'
import './bracket_chanllenge_analytics.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PBCAnalytics: React.FC = () => {
  const tournament = `${useParams().bcid}_${useParams().year}_${useParams().type}`;
  const navigator = useNavigate();
  const [isInfoLoaded, setIsInfoLoaded] = React.useState(false);
  interface BCAnalytics {  
    [category: string]: {  
      [player: string]: number;  
    };  
  }  
  
  let tot=1;
  let bCAnalytics: BCAnalytics = {};
  let tournamentName = '';
  async function getAnalytics(){
    try{
      const bcStats = await axios.get(`${process.env.REACT_APP_API_URL}/bc/${tournament}/stats`);
      setIsInfoLoaded(true);
      bCAnalytics = bcStats.data.analytivcs;
      tot = bcStats.data.tot;
      tournamentName = bcStats.data.tournamentName;
    }
    catch(error){
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    getAnalytics();
  }
  // eslint-disable-next-line
  , []);
  const Tables = []
  for(const key in bCAnalytics) {
      const dataSource = Object.entries(bCAnalytics[key]).map(([innerKey, value]) => ({
          key: innerKey,
          value: value,
          prop: ((+(value/tot*100).toFixed(2)) + '%'),
        }));
      dataSource.sort((a,b)=>b.value-a.value)
      const columns: ColumnType<{ key: string; value: number; prop: string; }>[] = [
          {
            title: '选手',
            dataIndex: 'key'
          },
          {
            title: '数量',
            dataIndex: 'value',
          },
          {
              title: '比例',
              dataIndex: 'prop'               
          }
        ];
  
        Tables.push(
          <div key={key} className='ana-table'>
            <h2>{key}</h2>
            <Table dataSource={dataSource} columns={columns} pagination={false} bordered={true} showSorterTooltip={false}/>
          </div>
        );
  }

    const navigateToParent = () => {
      const currentHashPath = window.location.hash;
      const currentPath = currentHashPath.replace(/^#/, '');
      const segments = currentPath.split('/').filter(segment => segment !== '');
      const newHashPath = segments.slice(0, -1).join('/');
      navigator(newHashPath);
    };
    
    if (!isInfoLoaded) {
      return (
        <div>
          <Card className='card-container'>
            <Skeleton active />
          </Card>
        </div>
      );
    }

    return (
        <div>
          <Card className='bc-card'>
            <h1>{tournamentName}签表挑战</h1>
          </Card>
            <Card className='card-container'>
                <h2 style={{ display: 'inline' }}>预测统计 （共{tot}人作答）</h2>
                <Button type='link' onClick={navigateToParent}>
                  返回
                </Button>
                <Divider/>
                <div className='table-container'>
                    {Tables}
                </div>
            </Card>
        </div>
    )
}

export default PBCAnalytics