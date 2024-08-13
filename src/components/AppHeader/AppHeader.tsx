//Горизонтальное меню вверху
//Рисуем самую первую верхнюю картинку и провнеряем залогинены ли 

import React from 'react';
import s from './AppHeader.module.css';
import { NavLink } from 'react-router-dom';
import { Button, Col, ConfigProvider, Grid, Layout, Menu,  Row } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import OnlineShopLogo from '../../resources/img/OnlineShopLogo.svg';
import basket from '../../resources/img/basket.svg';
import logout from '../../resources/img/logout.svg';
import basketIcon from '../../resources/img/AppMenu/basketIcon.svg';
import homeIcon from '../../resources/img/AppMenu/homeIcon.svg';
import likeIcon from '../../resources/img/AppMenu/likeIcon.svg';
import userIcon from '../../resources/img/AppMenu/userIcon.svg';
import AppHeaderMobileMenu from './AppHeaderMobilMenu';



const { Header } = Layout;
const { useBreakpoint } = Grid;





const AppHeader:React.FC= (props) => {

	const screens = useBreakpoint();


	return (
		<div style={{height: screens.lg ? "65" : "0" }}>
			<Header className= {s.header} style={{ padding: '0 120px' ,
																visibility: screens.lg ? "visible" : "hidden" }}>

				<Row className={s.header_Row}	>
					<Col span={5} flex="none" style={{minWidth: "150px"}}>
						<div className={s.appHeader_logo}>
							<img src={OnlineShopLogo} alt=''></img> 
						</div>
					</Col>

				
					<Col span={12} flex="auto">

						{/* Для кастомизации дизайна	 */}
						<ConfigProvider
			
							theme={{
								token: {
									// Отключить анимацию
									motion:false,  
									//Цвет для подчеркивания в меню под активным элементом
									//#46a358;
									//colorPrimaryActive: '#3d3dff',  
									// colorPrimaryText: '#3d3dff',
									// fontWeightStrong:900,
								},
							
								components: {
									Menu: {
										//fontSizeXL: 20,
										//itemColor: '#3d3d3d',
										horizontalItemSelectedColor: '#3d3d3d',
										lineWidth: 0,
										//itemSelectedBg: '#ff3d3d',
										//itemSelectedColor: '#3d3dff',
										// itemBg:'#ff3d3d',
										// colorText: '#ff3d3d',
										//colorPrimary: '#3d3d3d',
										//algorithm: true, // Enable a
									},
								}
							}}
							>


							<Menu
								// theme="dark"
								mode="horizontal"
								defaultSelectedKeys={['1']}
								className={s.header_menu}>
								
									<Menu.Item key="1" > <NavLink to="/home" className={s.menu__link }>Home</NavLink></Menu.Item> 
									<Menu.Item key="2" > <NavLink to="/shop">Shop</NavLink></Menu.Item>
									<Menu.Item key="3" className={s.menu_item}> <NavLink to="/blogs">Blogs</NavLink></Menu.Item>
																	
								
							</Menu>
						</ConfigProvider>
					</Col>
										

					<Col span={7} flex="none">

						<div className={s.loginBlock}>

							<SearchOutlined style={{ fontSize: '1.5em' }} />
							<img className={s.basket_img} src={basket} alt='' />	
							{/* <Avatar style={{ backgroundColor: '##46a358' }} icon={<UserOutlined />} />			 */}
							<Button className={s.header_button}>
								<img src={logout} alt='' />
								Logout</Button>		
									
						</div>
					</Col>
				</Row>
			</Header> 


			{/* Mobile Header menu ------sm = 900----------------------------------------------------------------- */}
			<div className={s.headerMobile} 	style={{ visibility: !screens.lg ? "visible" : "hidden" }}>
					<img src={homeIcon} alt="" />
					<img src={likeIcon} alt="" />



					<AppHeaderMobileMenu />
		

					<img src={basketIcon} alt="" />
					<img src={userIcon} alt="" />
				</div>
		</div>
	);
}

export default AppHeader;




