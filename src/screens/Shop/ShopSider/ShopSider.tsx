import React from "react";
import s from "./ShopSider.module.css";
import Sider from "antd/es/layout/Sider";
import { Button, ConfigProvider, Menu } from "antd";
import { NavLink } from "react-router-dom";
import PriseSlider from "./PriceSlider/PriceSlider";
import ShopScreen_Sider1 from "../../../resources/img/ShopScreen/ShopScreen_Sider1.jpg";





type PropsType = {							
	
}

const ShopSider : React.FC<PropsType> = (props) => {

	const siderStyle: React.CSSProperties = {
		textAlign: 'start',
		lineHeight: '40px',
		color: '#3D3D3D',
		backgroundColor: '#FBFBFB',
		// backgroundColor: '#FBFC',
	};

	return (
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

					{/* ---1part Categories------------------------------------------------------- */}
					<div className={s.container1}>
						<div className={s.container2}>
							<div className={s.siderTitle}>Categories</div>

								<Menu
									
									defaultSelectedKeys={['1']}
									className={s.header_menu}>
									
										<Menu.Item key="1" > 
											{/* <NavLink to="/home" className={s.menu_link }> */}
												<div className={s.menu_itemContainer }>
													<div>House Plants</div>
													<div>(33)</div>
												</div>
											{/* </NavLink> */}
										</Menu.Item> 
										<Menu.Item key="2" > 
											{/* <NavLink to="/home" className={s.menu_link }> */}
												<div className={s.menu_itemContainer }>
													<div>Potter Plants</div>
													<div>(33)</div>
												</div>
											{/* </NavLink> */}
										</Menu.Item> 
										<Menu.Item key="3" > 
											{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Seed</div>
												<div>(33)</div>
											</div>
											{/* </NavLink> */}
										</Menu.Item> 
										<Menu.Item key="3" > 
											{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Small Plants</div>
												<div>(33)</div>
											</div>
											{/* </NavLink> */}
										</Menu.Item> 
										<Menu.Item key="3" > 
											{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Big Plants</div>
												<div>(33)</div>
											</div>
											{/* </NavLink> */}
										</Menu.Item> 
										<Menu.Item key="3" > 
											{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Succulents</div>
												<div>(33)</div>
											</div>
											{/* </NavLink> */}
										</Menu.Item>
										<Menu.Item key="3" > 
											{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Terrariums</div>
												<div>(33)</div>
											</div>
											{/* </NavLink> */}
										</Menu.Item> 
										<Menu.Item key="3" > 
											{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Gardening</div>
												<div>(33)</div>
											</div>
											{/* </NavLink> */}
										</Menu.Item> 
										<Menu.Item key="3" > 
											{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Accessories</div>
												<div>(18)</div>
											</div>
											{/* </NavLink> */}
										</Menu.Item> 							
								</Menu>
														
						</div>
					</div>

					{/* ---2part PriseSlider------------------------------------------------------- */}
					<div className={s.container}>
						<div className={s.siderTitle}>Price Range</div>
							<div className={s.container22}>



								<div>
									<PriseSlider/>
								</div>




								<Button className={s.side_button}>Filter</Button>							
						</div>
					</div>

					{/* ---3part Size------------------------------------------------------- */}
					<div className={s.container1}>
						<div className={s.container2}>
							<div className={s.siderTitle}>Size</div>

								<Menu
									
									defaultSelectedKeys={['1']}
									className={s.header_menu}>
									
										<Menu.Item key="1" > 
											{/* <NavLink to="/home" className={s.menu_link }> */}
												<div className={s.menu_itemContainer }>
													<div>Small</div>
													<div>(33)</div>
												</div>
											{/* </NavLink> */}
										</Menu.Item> 
										<Menu.Item key="2" > 
											{/* <NavLink to="/home" className={s.menu_link }> */}
												<div className={s.menu_itemContainer }>
													<div>Medium</div>
													<div>(33)</div>
												</div>
											{/* </NavLink> */}
										</Menu.Item> 
										<Menu.Item key="2" > 
											{/* <NavLink to="/home" className={s.menu_link }> */}
												<div className={s.menu_itemContainer }>
													<div>Large</div>
													<div>(33)</div>
												</div>
											{/* </NavLink> */}
										</Menu.Item> 
								</Menu>
						</div>
					</div>

					<div className={s.sale}>
						<span>Super Sale</span>
						<div className={s.saleOff}>UP TO 75% OFF</div>
					</div>
				</Sider>
			
			</ConfigProvider>
		
	)
}


export default ShopSider;