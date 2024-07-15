import React from 'react';
//import home_bg from '../../../static/home_bg.jpg'
import "./home.css"
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  margin: '0',
} as React.CSSProperties;

const PHome: React.FC = () => {
  return (
    <div className="home-page" >
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Carousel autoplay style={{ maxWidth: '100vh' }}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default PHome;