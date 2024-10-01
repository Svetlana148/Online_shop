/** App component that sets up the main layout and theme configuration for the application.*/
import { ConfigProvider, Layout } from 'antd';
import s from './AppLayout.module.css';
import './AppLayout.module.css';
import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '../components/AppFooter/AppFooter';
import AppContent from '../components/AppContent/AppContent';

/**
 * App component that sets up the main layout and theme configuration for the application.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <div >
      <div className={s.wrapper} >
        <ConfigProvider
          theme={{
            token: {
              /** Main Color of text on the site*/
              colorText: '#3d3d3d',
              colorPrimary: '#46A358',
              fontFamily: `"CeraPro", "Hanging Letters", sans-serif`,
              /** Change Breakpoints*/
              screenXL: 1200,
              screenXLMax: 1200,
              screenXLMin: 1200,
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
