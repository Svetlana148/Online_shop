//Горизонтальное меню вверху
//Рисуем самую первую верхнюю картинку и провнеряем залогинены ли 

import React from 'react';
import s from './AppHeader.module.css';
import { NavLink } from 'react-router-dom';
import { Avatar, Button, Col, Layout, Menu, MenuProps, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';


//Типизация для "Header"-а
export type PropsType = {}


const { Header } = Layout;






const AppHeader:React.FC<PropsType> = (props) => {

	


	return (

		<Header style={{ display: 'flex', alignItems: 'center' }}>
			<div className={s.appHeader_logo} />


			<Row>
				<Col span={18}>
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={['2']}
						//items={items1}
						style={{ flex: 1, minWidth: 0 }}
					>
						
							<Menu.Item key="1"> <NavLink to="/home">Home</NavLink></Menu.Item>
							<Menu.Item key="2"> <NavLink to="/shop">Shop</NavLink></Menu.Item>
							<Menu.Item key="3"> <NavLink to="/blogs">Blogs</NavLink></Menu.Item>


							{/* <Menu.Item key="3"> <NavLink to="/plantCare">Plant Care</NavLink></Menu.Item>
							<Menu.Item key="4"> <NavLink to="/blogs">Blogs</NavLink></Menu.Item> */}
						
					</Menu>
				</Col>
					

				<Col span={1}>
					<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
				</Col>

				<Col span={5}>
					<Button >Log out</Button>
				</Col>
			
				</Row>
		</Header> 

	);
}

export default AppHeader;




