import React from 'react';
import { Breadcrumb, ConfigProvider, Layout, theme } from 'antd';
// import s from './App.module.css';
import './AppLayout.module.css';
// import './App.module.css';
import AppHeader from '../components/AppHeader/AppHeader';
import AppRouter from '../screens/AppRouter/AppRouter';
import AppFooter from '../components/AppFooter/Footer';
import AppContent from '../components/AppContent/AppContent';
// import "./assets/CeraPro-Regular.woff"




// const { Content, Footer } = Layout;

// const items = new Array(4).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));




function App() {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <div className="App">

      <Layout>

        {/* Для кастомизации дизайна	 */}
        <ConfigProvider

          theme={{
            token: {
              // Основной Цвет текста на сайте
              colorText: '#3d3d3d',
              fontFamily: `"CeraPro", "Hanging Letters", sans-serif`,
            }
          }}>



          <AppHeader />
          <AppContent />
          <AppFooter />


        </ConfigProvider>
      </Layout>

    </div>
  );
}

export default App;
