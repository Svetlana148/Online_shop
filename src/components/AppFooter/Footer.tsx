//Рисуем самую первую верхнюю картинку и провнеряем залогинены ли 
import React from 'react';
import s from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import { Avatar, Button, Col, Layout, Menu, MenuProps, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from 'antd/es/layout/layout';
// import { selectCurrentUserLogin, selectIsAuth } from '../../redux/auth-selectors';
// import { logout } from '../../redux/auth-reducer';
// import { AppDispatch } from '../../redux/redux-store';


//Типизация для "Footer"-а
export type PropsType = {}


// const { Footer } = Layout;


const AppFooter:React.FC<PropsType> = (props) => {

	return (


		
		<Footer style={{ textAlign: 'center' }}>
			Ant Design ©{new Date().getFullYear()} Created by Ant UED
		</Footer>
	);
}

export default AppFooter;




