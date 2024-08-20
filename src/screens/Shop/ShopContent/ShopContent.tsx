import React from "react";
import s from "./ShopContent.module.css";
import { Content } from "antd/es/layout/layout";
import { Col, ConfigProvider, Grid, Menu, Pagination, Row, Select } from "antd";
import { NavLink } from "react-router-dom";
import ShopCard from "./ShopCard/ShopCard";
import ShopScreen_Content_img1 from "../../../resources/img/ShopScreen/ShopScreen_Content_img1.jpg";

const { useBreakpoint } = Grid;


type PropsType = {							
	
}

const ShopContent : React.FC<PropsType> = (props) => {

	const screens = useBreakpoint();
	
	const contentStyle: React.CSSProperties = {
		textAlign: 'center',
		minHeight: 120,
		lineHeight: '120px',
		backgroundColor: '#fff',
		// padding: '41px 24px',
	};

	return (
		<Content style={contentStyle}>
			
			{/* ---------Header--------------------------------------------------------  */}
			<div className={s.shopHeader}>
				<Row className={s.shopHeader_row}	>
					<Col className={s.shopHeader_col} span={16} flex="auto">

						{/* Для кастомизации дизайна	 */}
						<ConfigProvider
			
							theme={{
								token: {
									// Отключить анимацию
									motion:false,  
									//fontWeightStrong:700,
								},
							
								components: {
									Menu: {
										horizontalItemSelectedColor: '#3d3d3d',
										horizontalLineHeight: '23px',
										lineWidth: 0,
										itemPaddingInline: '0  34px',
									},
								}
							}}
							>


							<Menu
								
								// theme="dark"
								mode="horizontal"
								defaultSelectedKeys={['1']}
								className={s.shopHeader_menu}>
								
									<Menu.Item key="1" > <NavLink to="/shop" className={s.menu__link }>All Plants</NavLink></Menu.Item> 
									<Menu.Item key="2" > <NavLink to="/shop">New Arrivals</NavLink></Menu.Item>
									<Menu.Item key="3" className={s.menu_item}> <NavLink to="/shop">Sale</NavLink></Menu.Item>
																	
							</Menu>
						</ConfigProvider>
					</Col>

					<Col className={s.shopHeader_col} span={8} flex="auto">	



						{/* Mobile Header menu ------sm = 900----------------------------------------------------------------- */}
						<div className={s.shopHeader_select} style={{ visibility: screens.lg ? "visible" : "hidden" }}>Short by:
							<Select
								variant="borderless"
								defaultValue="Default_sorting"
								style={{ width: 160 }}
								// onChange={handleChange}
								options={[
									{ value: 'Default_sorting', label: 'Default sorting' },
									{ value: 'low', label: 'Price: Low to High' },
									{ value: 'high', label: 'Price: High to Low' },
								]}
							/>
						</div>
					</Col>		

		
				</Row >
			</div>		


			{/* ---------Cards--------------------------------------------------------  */}
			<div>
				<div className={s.shopCardsSet}>
					<Row className={s.shopCardsSet_row} gutter={[{ xl: 41, lg: 41, xs: 20 }, { xl: 76, lg: 76, sm: 76, md: 40, xs: 40 }]}>

						<Col xl={8} lg={12} xs={12}>
							<ShopCard photo={ShopScreen_Content_img1} name="qwersrxsfd" price={123}/>
						</Col>
						<Col xl={8} lg={12} xs={12}>
							<ShopCard photo={ShopScreen_Content_img1} name="qwersrxs2" price={123}/>
						</Col>
						<Col xl={8} lg={12} xs={12}>
							<ShopCard photo={ShopScreen_Content_img1} name="qwersrxs3d" price={123}/>
						</Col>	
						<Col xl={8} lg={12} xs={12}>
							<ShopCard photo={ShopScreen_Content_img1} name="qwersrxsfd" price={123}/>
						</Col>
						<Col xl={8} lg={12} xs={12}>
							<ShopCard photo={ShopScreen_Content_img1} name="qwersrxs2" price={123}/>
						</Col>
						<Col xl={8} lg={12} xs={12}>
							<ShopCard photo={ShopScreen_Content_img1} name="qwersrxs3d" price={123}/>
						</Col>		

						{/* {shopCards.map(sc => <Col xl={8} lg={12} xs={12}>
							<ShopCard shopCard={sc} /> 
						</Col>
						)}*/}
					</Row>

					{/* ----Pagination-------------------------------------------------------------  */}
					<div className={s.shopCardsSet_pagination}>
						<Pagination defaultCurrent={1} total={50} />			
					</div>
				</div>		
			</div>				
		</Content>
	)
}


export default ShopContent;