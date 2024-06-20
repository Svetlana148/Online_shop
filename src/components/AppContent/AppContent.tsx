//Рисуем самую первую верхнюю картинку и провнеряем залогинены ли 
import React from 'react';
// import s from './AppContent.module.css';
import { Breadcrumb, theme } from 'antd';
// import AppRouter from './screens/AppRouter/AppRouter';

// import { NavLink } from 'react-router-dom';
// import { Avatar, Button, Col, Layout, Menu, MenuProps, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';





// const { Content } = Layout;



//Типизация для "Content"-а
export type PropsType = {}


// const { Content } = Layout;


const AppContent:React.FC<PropsType> = (props) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (

		
		<Content style={{ padding: '0 118px' }}>
					
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
			</div>
		</Content>


);
}

export default AppContent;

