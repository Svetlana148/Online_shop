import React from "react";
import s from "./ShopContent.module.css";
import { Content } from "antd/es/layout/layout";
import { Col, ConfigProvider, Grid, Menu, Pagination, Row, Select, MenuProps } from "antd";
import { NavLink } from "react-router-dom";
import ShopCard from "./ShopCard/ShopCard";
import ShopScreen_Content_img1 from "../../../resources/img/ShopScreen/ShopScreen_Content_img1.jpg";
import { useAppDispatch, useAppSelector } from "../../../types/types";
import { FilterExtraFilterType, FilterSortType, selectFilterExtraFilter, selectFilterSort, selectShopCardsList, shop_setFilterExtraFilter, shop_setFilterSort, ShopCardsList } from "../../../features/ShopSlice";
import { useSelector } from "react-redux";

const { useBreakpoint } = Grid;


type PropsType = {

}

const ShopContent: React.FC<PropsType> = (props) => {

	//Получает Hook-и
	const screens = useBreakpoint();
	const dispatch = useAppDispatch();

	//Для установки по default-у   значения фильтров     из Store2 
	const currentFilterExtraFilter = useSelector(selectFilterExtraFilter);
	const currentFilterSort = useSelector(selectFilterSort);

	//dispatch-им полученное значение Filter-ра в Store2
	const onClickExtraFilter: MenuProps['onClick'] = (e) => {
		dispatch(shop_setFilterExtraFilter(e.key as FilterExtraFilterType));
	};
	const onClickSort = (value: string) => {
		dispatch(shop_setFilterSort(value as FilterSortType));
	};



	const contentStyle: React.CSSProperties = {
		textAlign: 'center',
		minHeight: 120,
		lineHeight: '120px',
		backgroundColor: '#fff',
		// padding: '41px 24px',
	};

	//Достаем из Store2  1. initialState,   2... отфильтрованные Cards 
	const shopCardList = useAppSelector(selectShopCardsList); 
	ShopCardsList(); //Запускаем синхронизацию с useEffect-ом для слежки за изменениями в Filtrs

	return (
		<Content style={contentStyle}>

			{/* ---------Header--------------------------------------------------------  */}
			<div className={s.shopHeader}>
				<Row className={s.shopHeader_row}	>
					<Col className={s.shopHeader_col} span={16} flex="auto">

						<ConfigProvider
							theme={{
								token: {
									// Отключить анимацию
									motion: false,
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
								onClick={onClickExtraFilter}
								defaultSelectedKeys={[currentFilterExtraFilter]}
								className={s.shopHeader_menu}>

								<Menu.Item key="all" > <NavLink to="/shop" className={s.menu__link}>All Plants</NavLink></Menu.Item>
								<Menu.Item key="new" > <NavLink to="/shop">New Arrivals</NavLink></Menu.Item>
								<Menu.Item key="sale" className={s.menu_item}> <NavLink to="/shop">Sale</NavLink></Menu.Item>

							</Menu>
						</ConfigProvider>
					</Col>

					<Col className={s.shopHeader_col} span={8} flex="auto">



						{/* Mobile Header menu ------sm = 900 */}
						<div className={s.shopHeader_select} style={{ visibility: screens.lg ? "visible" : "hidden" }}>Short by:
							<Select
								onChange={onClickSort}
								variant="borderless"
								defaultValue={currentFilterSort}
								style={{ width: 160 }}
								// onChange={handleChange}
								options={[
									{ value: 'default', label: 'Default sorting' },
									{ value: 'low', label: 'Price: Low to High' },
									{ value: 'max', label: 'Price: High to Low' },
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
{/* 					<Col xl={8} lg={12} xs={12}>
							<ShopCard photo={ShopScreen_Content_img1} name="qwersrxs3d" price={123} />
						</Col> */}

						{shopCardList.map(sc => <Col xl={8} lg={12} xs={12}>
							<ShopCard shopCard={sc} /> 
						</Col>
						)}
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