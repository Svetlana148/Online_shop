//Горизонтальное меню вверху
//Рисуем самую первую верхнюю картинку и провнеряем залогинены ли 

import React from 'react';
import s from './AppHeader.module.css';
import { NavLink } from 'react-router-dom';
import { Avatar, Button, Col, ConfigProvider, Flex, Layout, Menu, MenuProps, Row, Space } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import OnlineShopLogo from '../../resources/img/OnlineShopLogo.svg';
import MenuItem from 'antd/es/menu/MenuItem';
import basket from '../../resources/img/basket.svg';
import logout from '../../resources/img/logout.svg';





//Типизация для "Header"-а
export type PropsType = {}


const { Header } = Layout;






const AppHeader:React.FC<PropsType> = (props) => {

	


	return (
		// , 'lineHeight': '0px'
		<Header className= {s.header} >

			<Row className={s.header_Row}>
				<Col span={5}>
					<div className={s.appHeader_logo}>
						<img src={OnlineShopLogo} alt=''></img> 
					</div>
				</Col>



			
				<Col span={12}>

					{/* Для кастомизации дизайна	 */}
					<ConfigProvider
		
						theme={{
							token: {
								// Отключить анимацию
								motion:false,  
								//Цвет для подчеркивания в меню под активным элементом
								//#46a358;
								colorPrimaryActive: '#3d3dff',  
								// colorPrimaryText: '#3d3dff',
								// fontWeightStrong:900,
							},
						
							components: {
								Menu: {
									//fontSizeXL: 20,
									//itemColor: '#3d3d3d',
									horizontalItemSelectedColor: '#3d3d3d',
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
							style={{ flex: 1, minWidth: 0 }}
							className={s.header_menu}>

							
								<Menu.Item key="1" > <NavLink to="/home" className={s.menu__link }>Home</NavLink></Menu.Item> 
								<Menu.Item key="2" className={s.menu_item}> <NavLink to="/shop">Shop</NavLink></Menu.Item>
								<Menu.Item key="3" className={s.menu_item}> <NavLink to="/blogs">Blogs</NavLink></Menu.Item>
								

								
							
						</Menu>
					</ConfigProvider>
				</Col>


									

				<Col span={7} >

					<div className={s.loginBlock}>


						{/* <div className="space-align-container">
							<div className="space-align-block"> */}
								{/* <Space size='middle' align="baseline"> */}


								{/* <Flex  align={'center'}>
								<SearchOutlined style={{ fontSize: '1.5em' }} />
								<img className={s.basket_img} src={basket} alt='' />	
								</Flex> */}


									<SearchOutlined style={{ fontSize: '1.5em' }} />
									<img className={s.basket_img} src={basket} alt='' />	
									{/* <Avatar style={{ backgroundColor: '##46a358' }} icon={<UserOutlined />} />			 */}
									<Button className={s.header_button}>
										<img src={logout} alt='' />	
										Logout</Button>		
								{/* </Space>			 */}
							</div>
						{/* </div>
					</div> */}
				</Col>
			
			</Row>
		</Header> 

	);
}

export default AppHeader;




