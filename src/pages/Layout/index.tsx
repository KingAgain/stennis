import React from 'react'
import { Layout } from 'antd'
import { Outlet } from "react-router-dom";
import '../../css/styles.css'
import '../../css/home_styles.css'
import CSider from '../../components/Sider/Sider'
import CHeader from '../../components/Header/Header'

const PLayout: React.FC = () => {
  return (
    <div className='Layout'>
      <Layout>
        <CHeader />
        <Layout>
          <CSider />
          <Outlet/>
        </Layout>
      </Layout>
    </div>
  )
}

export default PLayout
