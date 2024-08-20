import React, { useState } from "react";
import s from "./Shop.module.css";
import { Button, ConfigProvider, Grid, Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import { Slider, Switch } from 'antd';
import PriseSlider from "./ShopSider/PriceSlider/PriceSlider";
import Sider from "antd/es/layout/Sider";
import ShopContent from "./ShopContent/ShopContent";
import ShopSider from "./ShopSider/ShopSider";
import ShopSiderMobile from "./ShopSider/ShopSiderMobile/ShopSiderMobile";


const { useBreakpoint } = Grid;

type PropsType = {

}

const Shop: React.FC<PropsType> = (props) => {

	const screens = useBreakpoint();
	return (
		<div>
			<Layout className={s.shopLayout}>
				{screens.lg ? <ShopSider /> : <ShopSiderMobile />}
				<ShopContent />
			</Layout>
		</div>
	)
}


export default Shop;