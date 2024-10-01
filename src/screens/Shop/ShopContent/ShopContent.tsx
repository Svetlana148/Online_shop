/** Renders a content for a shop page
 * ShopContent component renders the main content of the shop page, including filters, sorting options, 
 * and the list of shop cards with pagination.
 */
import React from "react";
import s from "./ShopContent.module.css";
import { Content } from "antd/es/layout/layout";
import { Col, ConfigProvider, Grid, Menu, Pagination, Row, Select, MenuProps } from "antd";
import { NavLink } from "react-router-dom";
import ShopCard from "./ShopCard/ShopCard";
import { useAppDispatch, useAppSelector } from "../../../types/types";
import { FilterExtraFilterType, FilterSortType,  selectFilterExtraFilter, selectFilterPage, selectFilterSort, selectShopCardsList, shop_setFilterExtraFilter, shop_setFilterSort, shop_setShopCurrentPage, ShopCardsList, ShopItemsCount } from "../../../features/ShopSlice";
import { useSelector } from "react-redux";


const { useBreakpoint } = Grid;




/** Renders a content for a shop page*/
const ShopContent: React.FC = () => {

	/** get HOOKs*/
	const screens = useBreakpoint();
	const dispatch = useAppDispatch();

	/** To set default filters from Store*/
	const currentFilterExtraFilter = useSelector(selectFilterExtraFilter);
	const currentFilterSort = useSelector(selectFilterSort);

	/** dispatch the received Filter value to Store*/
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
	};


	/** Get from Store2 1. initialState, 2... filtered Cards*/
	const shopCardList = useAppSelector(selectShopCardsList); 
	/** Start synchronization with useEffect to track changes in Filtrs*/
	ShopCardsList(); 
	/** Start synchronization with useEffect to track the total number of cards*/
	ShopItemsCount();

	/** get from Store  1. selectItemsCount,   2. PageSize, 3.CurrentPage*/
	const shopFilterPage = useAppSelector(selectFilterPage); 
	const onChange=(page: number, pageSize: number)=>{
		dispatch(shop_setShopCurrentPage(page))
	}
	
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
						{shopCardList.map(sc => <Col xl={8} lg={12} xs={12}>
							<ShopCard shopCard={sc} /> 
						</Col>
						)}
					</Row>

					{/* ----Pagination-------------------------------------------------------------  */}
					<ConfigProvider
						theme={{
							token: {
								colorPrimary: '#fff'
							},
							components: {
								Pagination: {
									itemActiveBg: '#46A358',
								},
							}
						}}
					>

						<div className={s.shopCardsSet_pagination}>
							<Pagination defaultCurrent={shopFilterPage.currentPage} 
											total={shopFilterPage.itemsCount}
											pageSize={shopFilterPage.pageSize} 
											showSizeChanger={false}
											onChange={onChange}/>
						</div>
					</ConfigProvider>
				</div>
			</div>
		</Content>
	)
}

export default ShopContent;