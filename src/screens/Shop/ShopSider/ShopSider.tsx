import React from "react";
import s from "./ShopSider.module.css";
import Sider from "antd/es/layout/Sider";
import { Button, ConfigProvider, Grid, Menu, Flex, Input, MenuProps } from "antd";
import PriseSlider from "./PriceSlider/PriceSlider";
import { FilterSizeType, selectFilterCategoryId, selectFilterSize, selectShopCategoryList, shop_setFilterCategoryId, shop_setFilterSize, useShopCategoryList } from "../../../features/ShopSlice";
import { useAppDispatch, useAppSelector } from "../../../types/types";
import { useSelector } from "react-redux";


const { useBreakpoint } = Grid;


type PropsType = {

}

const ShopSider: React.FC<PropsType> = (props) => {

	//Получает Hook-и
	const screens = useBreakpoint();
	const dispatch = useAppDispatch();
	const categoryIdItems = useAppSelector(selectFilterCategoryId);
	
	const shopCategoryList = useAppSelector(selectShopCategoryList);
	useShopCategoryList(); //Наш HOOK


	//Для установки по default-у   значения фильтров     из Store2 ------------------------
	const currentFilterCategoryId = useSelector(selectFilterCategoryId);
	const currentFilterSize = useSelector(selectFilterSize);

	//dispatch-им полученное значение Filter-ра в Store2------------------------
	const onSelectCategory: MenuProps['onSelect'] = (e) => {
		dispatch(shop_setFilterCategoryId(e.selectedKeys));
	};
	const onDeselectCategory: MenuProps['onDeselect'] = (e) => {
		dispatch(shop_setFilterCategoryId(e.selectedKeys));
	};
	// const onClickCategory: MenuProps['onClick'] = (e) => {
	// 	dispatch(shop_setFilterCategoryId(e.key));
	// };

	const onSelectSize: MenuProps['onSelect'] = (e) => {
		dispatch(shop_setFilterSize(e.selectedKeys as FilterSizeType[]));
	};
	const onDeselectSize: MenuProps['onDeselect'] = (e) => {
		dispatch(shop_setFilterSize(e.selectedKeys as FilterSizeType[]));
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
					motion: false,
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
							// onClick={onClickCategory}
							onSelect={onSelectCategory}
							onDeselect={onDeselectCategory}
							multiple={true}
							defaultSelectedKeys={currentFilterCategoryId}
							className={s.header_menu}>

							{shopCategoryList.map(cl => {

								return < >
								<Menu.Item key={cl.categoryId}  >
									<div className={s.menu_itemContainer}>
										<div>{cl.name}</div>
										<div>{cl.itemCount}</div>
									</div>
								</Menu.Item>
								</>
								})
							}
							
						</Menu>

					</div>
				</div>

				{/* ---2part PriseSlider------------------------------------------------------- */}
				<div className={s.container1}>
					<div className={s.siderTitle}>Price Range</div>

					<div className={s.container22}>
						<div>
							<PriseSlider />
						</div>
						<Button className={s.side_button}>Filter</Button>
					</div>
				</div>

				{/* ---3part Size------------------------------------------------------- */}
				<div className={s.container1}>
					<div className={s.container2}>
						<div className={s.siderTitle}>Size</div>
						<Menu
							onSelect={onSelectSize}
							onDeselect={onDeselectSize}
							// onClick={onClickSize}
							multiple={true}
							defaultSelectedKeys={currentFilterSize}
							className={s.header_menu}>
							<Menu.Item key="small" >
								{/* <NavLink to="/home" className={s.menu_link }> */}
								<div className={s.menu_itemContainer}>
									<div>Small</div>
									<div>(33)</div>
								</div>
								{/* </NavLink> */}
							</Menu.Item>
							<Menu.Item key="medium" >
								{/* <NavLink to="/home" className={s.menu_link }> */}
								<div className={s.menu_itemContainer}>
									<div>Medium</div>
									<div>(33)</div>
								</div>
								{/* </NavLink> */}
							</Menu.Item>
							<Menu.Item key="large" >
								{/* <NavLink to="/home" className={s.menu_link }> */}
								<div className={s.menu_itemContainer}>
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