import React, { useState } from "react";
import s from "../ShopSider.module.css";
import Sider from "antd/es/layout/Sider";
import { Button, ConfigProvider, Grid, Menu, Flex, Input, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import PriseSlider from "../PriceSlider/PriceSlider";
import filterButtonMobile from "../../../../resources/img/ShopScreen/filterButtonMobile.svg";
import { SearchOutlined } from "@ant-design/icons";




type PropsType = {

}



/* Mobile Header menu ------sm = 900----------------------------------------------------------------- */
const ShopSiderMobile: React.FC<PropsType> = (props) => {

	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<div className={s.shopScreenMobile}>
			<Input placeholder="Find your plants" variant="filled"  prefix={<SearchOutlined  style={{ color: 'rgba(0,0,0,.25)' }} />}/>
		
			<div className={s.MobileMenuButton}  onClick={showDrawer}>
				<div className={s.filterButtonMobile}>
					<img src={filterButtonMobile} alt="" />
				</div>
			</div>

			<Drawer title="Filter" onClose={onClose} open={open}>
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
								horizontalItemSelectedColor: '#3d3d3d',
							},
						}
					}}
					>


					{/* <Menu
						// mode="horizontal"
						defaultSelectedKeys={['1']}
						className={s.header_menu}>
						
							<Menu.Item key="1" > <NavLink to="/home" className={s.menu__link }>Home</NavLink></Menu.Item> 
							<Menu.Item key="2" className={s.menu_item}> <NavLink to="/shop">Shop</NavLink></Menu.Item>
							<Menu.Item key="3" className={s.menu_item}> <NavLink to="/blogs">Blogs</NavLink></Menu.Item>
															
						
					</Menu> */}

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
											</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="2" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Potter Plants</div>
											</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="3" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
										<div className={s.menu_itemContainer }>
											<div>Seed</div>
										</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="4" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
										<div className={s.menu_itemContainer }>
											<div>Small Plants</div>
										</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="5" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
										<div className={s.menu_itemContainer }>
											<div>Big Plants</div>
										</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="6" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
										<div className={s.menu_itemContainer }>
											<div>Succulents</div>
										</div>
										{/* </NavLink> */}
									</Menu.Item>
									<Menu.Item key="7" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
										<div className={s.menu_itemContainer }>
											<div>Terrariums</div>
										</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="8" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
										<div className={s.menu_itemContainer }>
											<div>Gardening</div>
										</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="9" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
										<div className={s.menu_itemContainer }>
											<div>Accessories</div>
										</div>
										{/* </NavLink> */}
									</Menu.Item> 							
							</Menu>
													
					</div>
				</div>

				{/* ---2part PriseSlider------------------------------------------------------- */}
				<div className={s.container1}>
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
											</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="2" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Medium</div>
											</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="3" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Large</div>
											</div>
										{/* </NavLink> */}
									</Menu.Item> 
							</Menu>
					</div>
				</div>

				{/* ---4part Size------------------------------------------------------- */}
				<div className={s.container1}>
					<div className={s.container2}>
						<div className={s.siderTitle}>Sort by</div>
							<Menu
								defaultSelectedKeys={['1']}
								className={s.header_menu}>
									<Menu.Item key="1" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Default sorting</div>
											</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="2" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Price: Low to High</div>
											</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="3" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Price: High to Low</div>
											</div>
										{/* </NavLink> */}
									</Menu.Item> 
							</Menu>
					</div>
				</div>

				
				</ConfigProvider>
			</Drawer>
		</div>
	)
}

export default ShopSiderMobile;