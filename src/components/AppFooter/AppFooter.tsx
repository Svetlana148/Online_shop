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
import AppFooter_facebook from '../../resources/img/AppFooter/AppFooter_facebook.svg';
import AppFooter_Instagram from '../../resources/img/AppFooter/AppFooter_Instagram.svg';
import AppFooter_Twitter from '../../resources/img/AppFooter/AppFooter_Twitter.svg';
import AppFooter_LinkedIn from '../../resources/img/AppFooter/AppFooter_LinkedIn.svg';
import AppFooter_Union from '../../resources/img/AppFooter/AppFooter_Union.svg';

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


			{/* ---------1 Row-----------------------  */}
			<Row className={s.appFooter_row1}>
				{/* ---------1 карточка-----------------------  */}
				<Col xl={5} lg={12} xs={24}>
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
				<Col xl={5} lg={12} xs={24}>
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

				{/* ---------3 карточка-----------------------  */}
				<Col xl={5} lg={12} xs={24}>
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

				<Col xl={9} lg={12} xs={24}>
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

			<Row className={s.appFooter_row2}>

				{/* ---------1 карточка-----------------------  */}
				<Col xl={5} lg={12} xs={24}>
					<div className={s.appFooter_row2_card}>
					<div className={s.appFooter_row2_card1_container}>
							<div className={s.appHeader_logo}>
								<img src={OnlineShopLogo} alt='' />
							</div>
						</div>
					</div>
				</Col>							

				{/* ---------2 карточка-----------------------  */}
				<Col xl={5} lg={12} xs={24}>
					<div className={s.appFooter_row2_card}>
						<div className={s.appFooter_row2_card2_container}>
							<div  className={s.AppFooter_img1}>
								<img  src={AppFooter_EnvironmentOutline} alt="" />
							</div>

							<div className={s.appFooter_row2_card_text}>
							<a href="https://maps.google.com/maps?q=70 West Buckingham Ave.
								Farmingdale, NY 11735" target="_blank" rel="noreferrer">70 West Buckingham Ave.
							Farmingdale, NY 11735</a>
													
							</div>
						</div>
					</div>
				</Col>								


				{/* ---------3 карточка-----------------------  */}
				<Col xl={5} lg={12} xs={24}>
					<div className={s.appFooter_row2_card}>
						<div className={s.appFooter_row2_card3_container}>
							<div className={s.AppFooter_img1}>
								<img src={AppFooter_Contacts} alt=''/>
							</div>

							<div className={s.appFooter_row2_card_text}>
								<a href="mailto:contact@greenshop.com" target="_blank" rel="noreferrer">contact@greenshop.com</a>
										
							</div>
						</div>
					</div>
				</Col>								


				{/* ---------4 карточка-----------------------  */}
				<Col xl={9} lg={12} xs={24}>
					<div className={s.appFooter_row2_card}>
						<div className={s.appFooter_row2_card4_container}>
							<div className={s.AppFooter_img1}>
								<img src={AppFooter_Phon} alt=''/>
							</div>

							<div className={s.appFooter_row2_card_text}>
							<a href="tel:+88 01911 717 490">+88 01911 717 490</a>
							</div>
						</div>
					</div>
				</Col>	
			</Row>

			
			{/* ---------3 Row-----------------------  */}							


			<Row className={s.appFooter_row3}>
				{/* ---------1 карточка-----------------------  */}
				<Col xl={5} lg={12} xs={24}>
					<div className={s.appFooter_row3_card}>
						<div className={s.appFooter_row3_card_container}>
							<div className={s.appFooter_row3_card_title}>My Account</div>

							<div className={s.appFooter_row1_card_text}>
								<div className={s.appFooter_row3_card_link}><a href="#0">My Account</a></div>
								<div className={s.appFooter_row3_card_link}><a href="#0" >Our stores</a></div>
								<div className={s.appFooter_row3_card_link}><a href="#0" >Contact us</a></div>
								<div className={s.appFooter_row3_card_link}><a href="#0" >Career</a></div>
								<div className={s.appFooter_row3_card_link}><a href="#0" >Specials</a></div>
							</div>
						</div>
					</div>
				</Col>


				{/* ---------2 карточка-----------------------  */}
				<Col xl={5} lg={12} xs={24}>
				<div className={s.appFooter_row3_card}>
							<div className={s.appFooter_row3_card_container}>
								<div className={s.appFooter_row3_card_title}>Help & Guide</div>

								<div className={s.appFooter_row1_card_text}>
									<div className={s.appFooter_row3_card_link}><a href="#0">Help Center</a></div>
									<div className={s.appFooter_row3_card_link}><a href="#0" >How to Buy</a></div>
									<div className={s.appFooter_row3_card_link}><a href="#0" >Shipping & Delivery</a></div>
									<div className={s.appFooter_row3_card_link}><a href="#0" >Product Policy</a></div>
									<div className={s.appFooter_row3_card_link}><a href="#0" >How to Return</a></div>
								</div>
							</div>
						</div>
				</Col>


				{/* ---------3 карточка-----------------------  */}
				<Col xl={5} lg={12} xs={24}>
				<div className={s.appFooter_row3_card}>
							<div className={s.appFooter_row3_card_container}>
								<div className={s.appFooter_row3_card_title}>Categories</div>

								<div className={s.appFooter_row1_card_text}>
									<div className={s.appFooter_row3_card_link}><a href="#0">House Plants</a></div>
									<div className={s.appFooter_row3_card_link}><a href="#0" >Potter Plants</a></div>
									<div className={s.appFooter_row3_card_link}><a href="#0" >Seeds</a></div>
									<div className={s.appFooter_row3_card_link}><a href="#0" >Small Plants</a></div>
									<div className={s.appFooter_row3_card_link}><a href="#0" >Accessories</a></div>
								</div>
							</div>
						</div>
				</Col>

				{/* ---------4 карточка-----------------------  */}
				<Col xl={9} lg={12} xs={24}>
				<div className={s.appFooter_row3_card}>
							<div className={s.appFooter_row3_card4_container}>
								<div className={s.appFooter_row3_card4_1}>
									<div className={s.appFooter_row3_card_title}>
										<div className={s.appFooter_row3_card4_title}>
											Social Media
										</div>
									</div>
										<div className={s.appFooter_row3_card4_media}>
											<img src={AppFooter_facebook} alt='' />
											<img src={AppFooter_Instagram} alt='' />
											<img src={AppFooter_Twitter} alt='' />
											<img src={AppFooter_LinkedIn} alt='' />
											<img src={AppFooter_Union} alt='' />
										</div>
								</div>	

								<div className={s.appFooter_row3_card4_2}>	
									<div className={s.appFooter_row3_card_title}>
										<div className={s.appFooter_row3_card4_title}>
											We accept
										</div>
									</div>	
									
										<img className={s.appFooter_row3_card4_paySystems} src={AppFooter_paySystems} alt=''/>
									
								</div>			
								
							</div>
						</div>
				</Col>						








			

			</Row>


		{/* <Footer style={{ textAlign: 'center' }}> */}
		<div className={s.appFooterCopyright} style={{ textAlign: 'center' }}>
		© 2021 GreenShop. All Rights Reserved.
		{/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
		</div>
		<div>&nbsp;</div>								
		</Footer>
	);
}

export default AppFooter;




