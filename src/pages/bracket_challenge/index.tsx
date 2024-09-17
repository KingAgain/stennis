import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CCUserInfo from "../../components/CUserInfo/CUserInfo";
import CCBracket from '../../components/CBracketChallengeMain/CBracketChanllengeMain'
import axios from 'axios';
import { Card, message, Modal } from "antd";
import { Skeleton } from "@nextui-org/skeleton";

const PBracketChanllenge: React.FC = () => {
  const [tournamentName, setTournamentName] = useState('');
  const [drawSize, setDrawSize] = useState(0);
  const [initialBracket, setInitialBracket] = useState<string[][]>([]);
  const [userServerAnswers, setUserServerAnswers] = useState<string[][]>([]);
  const [userScore, setUserScore] = useState(0);
  const [userMatches, setUserMatches] = useState(0);
  const [userRank, setUserRank] = useState(0);
  const [standardAnswers, setStandardAnswers] = useState<string[][]>([]);
  const [expiredTime, setExpiredTime] = useState(new Date());
  const [isInfoLoaded, setIsInfoLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [messageApi, contextHolder] = message.useMessage();
  const [modal, modalContextHolder] = Modal.useModal();
  window.addEventListener('loginChange', () => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  });
  const tournament = `${useParams().bcid}_${useParams().year}_${useParams().type}`;
  async function getInfo() {
    try{
      const initInfo=await axios.get(`${process.env.REACT_APP_API_URL}/bc/${tournament}/initinfo`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setDrawSize(initInfo.data.drawSize);
      setInitialBracket(initInfo.data.initialBracket);
      setUserServerAnswers(initialBracket);
      setStandardAnswers(initialBracket);
      setExpiredTime(new Date(initInfo.data.expiredTime));
      setTournamentName(initInfo.data.tournamentName);
      if(isLoggedIn){
        const existInfo = await axios.get(`${process.env.REACT_APP_API_URL}/bc/${tournament}/answer/${localStorage.getItem('userName')}/exist`);
        const isExist = existInfo.data.exist;
        if(isExist){
          const userInfo = await axios.get(`${process.env.REACT_APP_API_URL}/bc/${tournament}/answer/${localStorage.getItem('userName')}`);
          setUserServerAnswers(userInfo.data.answers);
          setUserScore(userInfo.data.score);
          setUserMatches(userInfo.data.matches);
          setUserRank(userInfo.data.rank);
          if(expiredTime < new Date()){
            const standardInfo = await axios.get(`${process.env.REACT_APP_API_URL}/bc/${tournament}/answer/${localStorage.getItem('userName')}`);
            setStandardAnswers(standardInfo.data.standardAnswers);
          }
        }
      }
      setIsInfoLoaded(true);
    }
    catch(error){
      console.error('Error:', error);
    }
  }

  useEffect(() => {
      getInfo();
    }
  // eslint-disable-next-line
  , []);
  useEffect(() => {
    const handleLoginChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    window.addEventListener('loginChange', handleLoginChange);
    return () => {
      window.removeEventListener('loginChange', handleLoginChange);
    };
  }, []);

  const [expired, setExpired] = useState(expiredTime < new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      if (currentTime >= expiredTime) {
        setExpired(true);
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const sendAnswerToServer = async (data: string) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/bc/${tournament}/answer/${localStorage.getItem('userName')}`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Server response:', response.data);
      messageApi.open({
        type: 'success',
        content: '已提交',
      });
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: `${error}`,
      });
      console.error('Error:', error);
    }
  };
  const handleSubmit = () => {
    const rounds: { [key: string]: string[] } = {};
    for (let round = 0; round < drawSize; round++) {
      const roundName = 'round' + (round + 1);
      rounds[roundName] = names[round];
    }
    let confirmed = false;
    (async () => {
      confirmed = await modal.confirm({
        title: '一经提交无法更改！确认提交？',
        });
        if (confirmed) {
          
          const answerSubmit: { [key: string]: { [key: string]: string[] } | string | number} = {};
          answerSubmit[`userName`] = localStorage.getItem('userName') as string;
          answerSubmit[`rounds`] = rounds;
          answerSubmit[`tournament`] = tournament;
          const answerJSON = JSON.stringify(answerSubmit);
          sendAnswerToServer(answerJSON);
        }
    })()
  }
  const [names, setNames] = useState(userServerAnswers);
  const correctAnswer = standardAnswers;

  const userInfoProps = {
      buttonNames: names,
      isLoggedIn: isLoggedIn,
      isDisabled: expired,
      userScore: userScore,
      userMatches: userMatches,
      userRank: userRank,
      onClickSubmit: handleSubmit,
  }
  const bracketProps = {
      buttonNames: names,
      drawSize: drawSize,
      setButtonNames: setNames,
      isDisabled: expired,
      correctAnswer: correctAnswer,
  }
  if(!isInfoLoaded){
    return <Skeleton />
  }
  return (
      <div className='bc'>
          {contextHolder}
          <Card className='bc-card'>
            <h1>{tournamentName}签表挑战</h1>
          </Card>
          <div>
            <CCUserInfo {...userInfoProps}/>
            <CCBracket {...bracketProps}/>
          </div>
          {modalContextHolder}
      </div>
  )
}

export default PBracketChanllenge 
