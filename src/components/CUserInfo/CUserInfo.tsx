import React from 'react'
import { MouseEventHandler } from 'react';
import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'

interface myProps {
    buttonNames: string[][],
    isDisabled: boolean,
    isLoggedIn: boolean,
    userScore: number,
    userMatches: number,
    userRank: number,
    onClickSubmit: () => void
}
const CCUserInfo: React.FC<myProps> = (props:myProps) => {
    const navigator = useNavigate();  
    const navigateToPath: MouseEventHandler<HTMLElement> = (event) => {
      event.preventDefault();
      const path = event.currentTarget.getAttribute('data-path') || '/';
      const currentHashPath = window.location.hash;
      const currentPath = currentHashPath.replace(/^#/, '');
      const newPath = `${currentPath}${path}`;
      console.log(currentPath);
      navigator(newPath);
    };

    return(
        <div>
            <Card className='card-container'>
                {!props.isDisabled ?
                  <span>
                    <Button type="primary" disabled={!props.isLoggedIn || props.isDisabled} onClick={props.onClickSubmit} className='toolButton' >
                      {props.isLoggedIn ? '提交' : '未登录'}
                    </Button>
                    <span className='text-container-primary'> 截止时间 </span>
                    <span className='text-container-default'> 2024年4月24日20:00 </span>
                  </span> 
                  :<span>
                    <span className='text-container-primary'>昵称</span>
                    <span className='text-container-default'> {localStorage.getItem('userName')}</span>
                    <span className='text-container-primary'>得分</span>
                    <span className='text-container-default'>{props.userScore}</span>
                    <span className='text-container-primary'>场次</span>
                    <span className='text-container-default'>{props.userMatches}</span>  
                    <span className='text-container-primary'>排名</span>
                    <span className='text-container-default'>{props.userRank}</span>
                    <Button type='link' onClick={navigateToPath} data-path='/rank'>
                      点击查看排行榜
                    </Button>                   
                  </span>
                }
                <Button type='link' onClick={navigateToPath} data-path='/analytics'>
                  点击查看预测统计
                </Button>
            </Card>
        </div>
    )
}

export default CCUserInfo