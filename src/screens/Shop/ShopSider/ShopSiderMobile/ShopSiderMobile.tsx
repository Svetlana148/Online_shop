/* Mobile Header menu   sm = 900*/
import React, { useState } from "react";
import s from "../ShopSider.module.css";
import { Button, ConfigProvider, Menu, Input, Drawer, MenuProps } from "antd";
import PriseSlider from "../PriceSlider/PriceSlider";
import filterButtonMobile from "../../../../resources/img/ShopScreen/filterButtonMobile.svg";
import { SearchOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../../../types/types";
import { useSelector } from "react-redux";
import { FilterSizeType, FilterSortType, selectFilterCategoryId, selectFilterSize, selectFilterSort, shop_setFilterCategoryId, shop_setFilterSize, shop_setFilterSort } from "../../../../features/ShopSlice";


/* Mobile Header menu   sm = 900*/
/**
 * ShopSiderMobile component for rendering a mobile sidebar with filtering options.
 *
 * @component
 * @param {PropsType} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered ShopSiderMobile component.
 */
const ShopSiderMobile: React.FC = () => {

	//get Hooks
	const dispatch = useAppDispatch();

	//To set the default filter values ​​from Store
	const currentFilterCategoryId = useSelector(selectFilterCategoryId);
	const currentFilterSize = useSelector(selectFilterSize);
	const currentFilterSort = useSelector(selectFilterSort);


	//dispatch the received value of Filter-pa to Store
	const onSelectCategory: MenuProps['onSelect'] = (e) => {
		dispatch(shop_setFilterCategoryId(e.selectedKeys));
	};
	const onDeselectCategory: MenuProps['onDeselect'] = (e) => {
		dispatch(shop_setFilterCategoryId(e.selectedKeys));
	};

	const onSelectSize: MenuProps['onSelect'] = (e) => {
		dispatch(shop_setFilterSize(e.selectedKeys as FilterSizeType[]));
	};
	const onDeselectSize: MenuProps['onDeselect'] = (e) => {
		dispatch(shop_setFilterSize(e.selectedKeys as FilterSizeType[]));
	};
	
	const onClickSort: MenuProps['onClick'] = (e) => {
		dispatch(shop_setFilterSort(e.key as FilterSortType));
	};

	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<div className={s.shopScreenMobile}>
			<Input placeholder="Find your plants" variant="filled" prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} />

			<div className={s.MobileMenuButton} onClick={showDrawer}>
				<div className={s.filterButtonMobile}>
					<img src={filterButtonMobile} alt="" />
				</div>
			</div>

			<Drawer title="Filter" onClose={onClose} open={open}>
				<ConfigProvider
					theme={{
						token: {
							motion: false,
							colorPrimaryActive: '#3d3dff',
						},

						components: {
							Menu: {
								horizontalItemSelectedColor: '#3d3d3d',
							},
						}
					}}
				>
					{/* ---1part Categories------------------------------------------------------- */}
					<div className={s.container1}>
						<div className={s.container2}>
							<div className={s.siderTitle}>Categories</div>
							<Menu
								onSelect={onSelectCategory}
								onDeselect={onDeselectCategory}
								multiple={true}
								defaultSelectedKeys={currentFilterCategoryId}
								className={s.header_menu}>
								<Menu.Item key="1" >
									<div className={s.menu_itemContainer}>
										<div>House Plants</div>
									</div>
								</Menu.Item>
								<Menu.Item key="2" >
									<div className={s.menu_itemContainer}>
										<div>Potter Plants</div>
									</div>
								</Menu.Item>
								<Menu.Item key="3" >
									<div className={s.menu_itemContainer}>
										<div>Seed</div>
									</div>
								</Menu.Item>
								<Menu.Item key="4" >
									<div className={s.menu_itemContainer}>
										<div>Small Plants</div>
									</div>
								</Menu.Item>
								<Menu.Item key="5" >
									<div className={s.menu_itemContainer}>
										<div>Big Plants</div>
									</div>
								</Menu.Item>
								<Menu.Item key="6" >
									<div className={s.menu_itemContainer}>
										<div>Succulents</div>
									</div>
								</Menu.Item>
								<Menu.Item key="7" >
									<div className={s.menu_itemContainer}>
										<div>Terrariums</div>
									</div>
								</Menu.Item>
								<Menu.Item key="8" >
									<div className={s.menu_itemContainer}>
										<div>Gardening</div>
									</div>
								</Menu.Item>
								<Menu.Item key="9" >
									<div className={s.menu_itemContainer}>
										<div>Accessories</div>
									</div>
								</Menu.Item>
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
								multiple={true}
								// onClick={onClickSize}
								defaultSelectedKeys={currentFilterSize}
								className={s.header_menu}>
								<Menu.Item key="small" >
									<div className={s.menu_itemContainer}>
										<div>Small</div>
									</div>
								</Menu.Item>
								<Menu.Item key="medium" >
									<div className={s.menu_itemContainer}>
										<div>Medium</div>
									</div>
								</Menu.Item>
								<Menu.Item key="large" >
									<div className={s.menu_itemContainer}>
										<div>Large</div>
									</div>
								</Menu.Item>
							</Menu>
						</div>
					</div>

					{/* ---4part Sort------------------------------------------------------- */}
					<div className={s.container1}>
						<div className={s.container2}>
							<div className={s.siderTitle}>Sort by</div>
							<Menu
								onClick={onClickSort}
								defaultSelectedKeys={[currentFilterSort]}
								className={s.header_menu}>
								<Menu.Item key="default" >
									<div className={s.menu_itemContainer}>
										<div>Default sorting</div>
									</div>
								</Menu.Item>
								<Menu.Item key="low" >
									<div className={s.menu_itemContainer}>
										<div>Price: Low to High</div>
									</div>
								</Menu.Item>
								<Menu.Item key="max" >
									<div className={s.menu_itemContainer}>
										<div>Price: High to Low</div>
									</div>
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