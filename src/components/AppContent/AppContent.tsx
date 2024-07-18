//Рисуем самую первую верхнюю картинку и провнеряем залогинены ли 
import React from 'react';
import s from './AppContent.module.css';
import { Breadcrumb, theme } from 'antd';
// import AppRouter from './screens/AppRouter/AppRouter';

// import { NavLink } from 'react-router-dom';
// import { Avatar, Button, Col, Layout, Menu, MenuProps, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import HomePageCarousel from '../../screens/HomeScreen/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import HomePage from '../../screens/HomeScreen/HomeScreen';
import AppRouter from '../../screens/AppRouter/AppRouter';





// const { Content } = Layout;



//Типизация для "Content"-а
export type PropsType = {}


// const { Content } = Layout;


const AppContent: React.FC<PropsType> = (props) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (


		<Content style={{ padding: '0 118px' }} >
			<div
				style={{
					background: colorBgContainer,
				// 	minHeight: 280,
				// 	padding: 24,
				// 	borderRadius: borderRadiusLG,
				}}
				className={s.appContent}
			>
				<AppRouter />	
				
			</div>



		</Content>


	);
}

export default AppContent;

