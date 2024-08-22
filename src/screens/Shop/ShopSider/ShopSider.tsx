import React from "react";
import s from "./ShopSider.module.css";
import Sider from "antd/es/layout/Sider";
import { Button, ConfigProvider, Grid, Menu, Flex, Input, MenuProps } from "antd";
import PriseSlider from "./PriceSlider/PriceSlider";
import { FilterSizeType, selectFilterCategoryId, selectFilterSize, setFilterCategoryId, setFilterSize } from "../../../features/ShopSlice";
import { useAppDispatch } from "../../../types/types";
import { useSelector } from "react-redux";


const { useBreakpoint } = Grid;


type PropsType = {							
	
}

const ShopSider : React.FC<PropsType> = (props) => {

	//Получает Hook-и
	const screens = useBreakpoint();
	const dispatch = useAppDispatch();

	//Для установки по default-у   значения фильтров     из Store2 
	const currentFilterCategoryId = useSelector(selectFilterCategoryId);
	const currentFilterSize = useSelector(selectFilterSize);
	
	//dispatch-им полученное значение Filter-ра в Store2
	const onClickCategory: MenuProps['onClick'] = (e) => {
		dispatch(setFilterCategoryId(e.key));
	};
	const onClickSize: MenuProps['onClick'] = (e) => {
		dispatch(setFilterSize(e.key as FilterSizeType));
	};
	



	//Стиль для Sider-а
	const siderStyle: React.CSSProperties = {
		textAlign: 'start',
		lineHeight: '40px',
		color: '#3D3D3D',
		backgroundColor: '#FBFBFB',
		visibility: screens.lg ? "visible" : "hidden",
		margin: "0 50px 0 0"
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

			<Sider width={screens.lg ? "25%" : "0%"} style={siderStyle}>

				{/* ---1part Categories------------------------------------------------------- */}
				<div className={s.container1}>
					<div className={s.container2}>
						<div className={s.siderTitle}>Categories</div>

							<Menu
								onClick={onClickCategory}
								defaultSelectedKeys={[currentFilterCategoryId]}
								className={s.header_menu}>
								
									<Menu.Item key="1"  > 
										<div className={s.menu_itemContainer }>
											<div>House Plants</div>
											<div>(33)</div>
										</div>
									</Menu.Item> 
									<Menu.Item key="2" > 
										<div className={s.menu_itemContainer }>
											<div>Potter Plants</div>
											<div>(33)</div>
										</div>
									</Menu.Item> 
									<Menu.Item key="3" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
										<div className={s.menu_itemContainer }>
											<div>Seed</div>
											<div>(33)</div>
										</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="4" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
										<div className={s.menu_itemContainer }>
											<div>Small Plants</div>
											<div>(33)</div>
										</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="5" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
										<div className={s.menu_itemContainer }>
											<div>Big Plants</div>
											<div>(33)</div>
										</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="6" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
										<div className={s.menu_itemContainer }>
											<div>Succulents</div>
											<div>(33)</div>
										</div>
										{/* </NavLink> */}
									</Menu.Item>
									<Menu.Item key="7" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
										<div className={s.menu_itemContainer }>
											<div>Terrariums</div>
											<div>(33)</div>
										</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="8" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
										<div className={s.menu_itemContainer }>
											<div>Gardening</div>
											<div>(33)</div>
										</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="9" > 
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
								onClick={onClickSize}
								defaultSelectedKeys={[currentFilterSize]}
								className={s.header_menu}>
									<Menu.Item key="small" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Small</div>
												<div>(33)</div>
											</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="medium" > 
										{/* <NavLink to="/home" className={s.menu_link }> */}
											<div className={s.menu_itemContainer }>
												<div>Medium</div>
												<div>(33)</div>
											</div>
										{/* </NavLink> */}
									</Menu.Item> 
									<Menu.Item key="large" > 
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