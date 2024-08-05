import React from 'react';
import { Breadcrumb, ConfigProvider, Layout, theme } from 'antd';
import s from './AppLayout.module.css';
import './AppLayout.module.css';
// import './App.module.css';
import AppHeader from '../components/AppHeader/AppHeader';
import AppRouter from '../screens/AppRouter/AppRouter';
import AppFooter from '../components/AppFooter/AppFooter';
import AppContent from '../components/AppContent/AppContent';
// import "./assets/CeraPro-Regular.woff"



function App() {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <div className={s.appbody}>
      <div className={s.wrapper} >


        {/* Для кастомизации дизайна	 */}
        <ConfigProvider

          theme={{
            token: {
              // Основной Цвет текста на сайте
              colorText: '#3d3d3d',
              colorPrimary: '#46A358',
              fontFamily: `"CeraPro", "Hanging Letters", sans-serif`,
              // Смена Breack points
              screenXL: 1440,
              screenXLMax: 1440,
              screenXLMin: 1440,
              screenLGMin: 900,
              screenLG: 900,
              screenMDMax: 899,
            },
            components: {
              Layout: {
                bodyBg: '#fff',
              },
            },
          }}>



          <Layout>
            <AppHeader />
            <AppContent />
            <AppFooter />
          </Layout>

        </ConfigProvider>
      </div>
    </div>
  );
}

export default App;
