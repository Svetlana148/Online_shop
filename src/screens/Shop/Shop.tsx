import React, { useState } from "react";
import s from "./Shop.module.css";
import { Button, ConfigProvider, Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import { Slider, Switch } from 'antd';
import PriseSlider from "./PriceSlider/PriceSlider";
import Sider from "antd/es/layout/Sider";


type PropsType = {							
	
}

const Shop : React.FC<PropsType> = (props) => {

	const contentStyle: React.CSSProperties = {
		textAlign: 'center',
		minHeight: 120,
		lineHeight: '120px',
		color: '#fff',
		backgroundColor: '#0958d9',
	};
	
	const siderStyle: React.CSSProperties = {
		textAlign: 'start',
		lineHeight: '40px',
		color: '#3D3D3D',
		backgroundColor: '#FBFBFB',
		// backgroundColor: '#FBFC',
	};



	
	return (
		<div >
			
			<h1>Shop  Shop  Shop </h1>
			<Layout>
				{/* Для кастомизации дизайна	 */}
				<ConfigProvider
				
				theme={{
					token: {
						// Отключить анимацию
						motion:false,  
						colorPrimaryActive: '#3d3dff',  
						// colorPrimaryText: '#3d3dff',
						// fontWeightStrong:900,
						colorBgBase: '#FBFBFB',
						
						
					},
				
					components: {
						Menu: {
							// horizontalItemSelectedColor: '#3d3d3d',
							itemSelectedBg: '#FBFBFB',
							fontSizeXL: 15,
							itemColor: '#3d3d3d',
							itemSelectedColor: '#46A358',
						},
					}
				}}
				>


				<Sider width="25%" style={siderStyle}>

				<div className={s.container1}>
					<div className={s.container2}>
						<div className={s.siderTitle1}>Categories</div>

							<Menu
								
								defaultSelectedKeys={['1']}
								className={s.header_menu}>
								
									<Menu.Item key="1" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>House plants</div>
												<div>(33)</div>
											</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="2" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>House plants</div>
												<div>(33)</div>
											</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="3" > 
										<NavLink to="/home" className={s.menu_link }>
											<div className={s.menu_itemContainer }>
												<div>House plants</div>
												<div>(33)</div>
											</div>
										</NavLink>
									</Menu.Item> 
									
																	
							</Menu>
													
					</div>
				</div>

				{/* ---2part------------------------------------------------------- */}
				<div className={s.container1}>
					<div className={s.container22}>
						<div className={s.siderTitle2}>Price Range</div>




							<div>
								<PriseSlider/>
							</div>




							<Button className={s.side_button}>Filter</Button>							
					</div>
				</div>
					
				</Sider>
				</ConfigProvider>
				<Content style={contentStyle}>Content</Content>
      </Layout>
			
		</div>
	)
}


export default Shop;