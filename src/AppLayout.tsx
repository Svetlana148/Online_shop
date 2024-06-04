import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import s from './App.module.css';
// import './App.module.css';
import AppHeader from './components/AppHeader/AppHeader';
import AppRouter from './screens/AppRouter/AppRouter';




const { Content, Footer } = Layout;

const items = new Array(4).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));




function App() {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <div className="App">




      <Layout>
        <AppHeader />
        {/* <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className={s.App_logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header> */}



        <Content style={{ padding: '0 48px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >

            <AppRouter />


          </div>
        </Content>


        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>












      </Layout>

    </div>
  );
}

export default App;
