//Рисуем самую первую верхнюю картинку и провнеряем залогинены ли 
import React from 'react';
import s from './AppFooter.module.css';
import { NavLink } from 'react-router-dom';
import { Avatar, Button, Card, Col, ConfigProvider, Layout, Menu, MenuProps, Row } from 'antd';
import { EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from 'antd/es/layout/layout';
import Search from 'antd/es/input/Search';
// import { selectCurrentUserLogin, selectIsAuth } from '../../redux/auth-selectors';
// import { logout } from '../../redux/auth-reducer';
// import { AppDispatch } from '../../redux/redux-store';
import OnlineShopLogo from '../../resources/img/OnlineShopLogo.svg';
import AppFooter_img1 from '../../resources/img/AppFooter/AppFooter_1.svg';
import AppFooter_img2 from '../../resources/img/AppFooter/AppFooter_2.svg';
import AppFooter_img3 from '../../resources/img/AppFooter/AppFooter_3.svg';
import AppFooter_EnvironmentOutline from '../../resources/img/AppFooter/AppFooter_EnvironmentOutline.svg';
import AppFooter_Contacts from '../../resources/img/AppFooter/AppFooter_Contacts.svg';
import AppFooter_Phon from '../../resources/img/AppFooter/AppFooter_Phon.svg';
import AppFooter_paySystems from '../../resources/img/AppFooter/AppFooter_paySystems.png';



//Типизация для "Footer"-а
export type PropsType = {}


// const { Footer } = Layout;


const AppFooter:React.FC<PropsType> = (props) => {

	return (
		<Footer className= {s.appFooter} style={{ padding: '0 120px' }}>




			<Row className={s.appFooter_row1}>
				<Col span={5}>
						{/* ---------1 карточка-----------------------  */}
						<div className={s.appFooter_row1_card}>
							<div className={s.appFooter_row1_card_container}>
								<div  className={s.AppFooter_row1_img1}>
									<img  src={AppFooter_img1} alt="" />
								</div>

								<div className={s.appFooter_row1_card_title}>Garden Care</div>

								<div className={s.appFooter_row1_card_text}>
									We are an online plant shop
									offering a wide range of cheap
									and trendy plants.
								</div>
							</div>
							<div className={s.appFooter_row1_card_divider}></div>
						</div>
				</Col>



				{/* ---------2 карточка-----------------------  */}
				<Col span={5}>
						<div className={s.appFooter_row1_card}>
							<div className={s.appFooter_row1_card_container}>
								<div  className={s.AppFooter_row1_img2}>
									<img  src={AppFooter_img2} alt="" />
								</div>

								<div className={s.appFooter_row1_card_title}>Plant Renovation</div>

								<div className={s.appFooter_row1_card_text}>
								We are an online plant shop offering a wide range of cheap and trendy plants.
								</div>
							</div>
							<div className={s.appFooter_row1_card_divider}></div>
						</div>
				</Col>


				<Col span={5}>
						{/* ---------3 карточка-----------------------  */}
						<div className={s.appFooter_row1_card}>
							<div className={s.appFooter_row1_card_container}>
								<div  className={s.AppFooter_row1_img3}>
									<img  src={AppFooter_img3} alt="" />
								</div>

								<div className={s.appFooter_row1_card_title}>Watering Graden</div>

								<div className={s.appFooter_row1_card_text}>
								We are an online plant shop offering a wide range of cheap and trendy plants.
								</div>
							</div>
							<div className={s.appFooter_row1_card_divider}></div>
						</div>
				</Col>

				<Col span={9}>
						{/* ---------4 карточка-----------------------  */}
						<div className={s.appFooter_row1_card4}>
							<div className={s.appFooter_row1_card4_container}>
								<div className={s.appFooter_row1_card_title}>Would you like to join newsletters?</div>
								<div>

								<ConfigProvider
									theme={{
										components: {
											Button: {
												fontWeight: 700,
												contentFontSizeLG: 18,
											},
										},
										}}>

									<Search className={s.appFooter_joinButton}
										placeholder="enter your email address..."
										allowClear
										enterButton="Join"
										size="large"
										// onSearch={onSearch}
									/>
								</ConfigProvider>

								</div>
								<div className={s.appFooter_row1_card_text}>
								We usually post offers and challenges in newsletter. 
								We’re your online houseplant destination. We offer a wide 
								range of houseplants and accessories shipped directly 
								from our (green)house to yours! 
								</div>
							</div>
						</div>
				</Col>
			</Row>



{/* ---------2 Row-----------------------  */}

			<Row className={s.Appfooter_row2}>

				<Col span={5}>
										
					<div className={s.appHeader_logo}>
						<img src={OnlineShopLogo} alt='' />
					</div>
				</Col>

				<Col span={5}>
					<div  className={s.AppFooter_img1}>
						<img  src={AppFooter_EnvironmentOutline} alt="" />
					</div>
					<div className={s.appFooter_card_text}>
						70 West Buckingham Ave.
					Farmingdale, NY 11735
					</div>
				</Col>

				<Col span={5}>
					<div className={s.AppFooter_img1}>
						<img src={AppFooter_Contacts} alt=''/>
					</div>
					<div className={s.appFooter_card_text}>
						contact@greenshop.com
					</div>
				</Col>

				<Col span={9}>
					<div className={s.AppFooter_img1}>
						<img src={AppFooter_Phon} alt=''/>
					</div>
					<div className={s.appFooter_card_text}>
						+88 01911 717 490
					</div>
				</Col>

			</Row>




			<Row >
				<Col span={5}>
					<div >
					Наша rjkjzrf
					</div>
				</Col>

				<Col span={5}>
					<div >
					Наша rjkjzrf
					</div>
				</Col>

				<Col span={5}>
					<div >
					Наша rjkjzrf
					</div>
				</Col>

				<Col span={9}>
					<div >
					Наша rjkjzrf
					</div>
				</Col>

			</Row>


		{/* <Footer style={{ textAlign: 'center' }}> */}
		<div style={{ textAlign: 'center' }}>
		© 2021 GreenShop. All Rights Reserved.
		{/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
		</div>

		</Footer>
	);
}

export default AppFooter;




