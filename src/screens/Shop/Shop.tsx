import React, { useState } from "react";
import s from "./Shop.module.css";
import { Button, ConfigProvider, Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import { Slider, Switch } from 'antd';
import PriseSlider from "./ShopSider/PriceSlider/PriceSlider";
import Sider from "antd/es/layout/Sider";
import ShopContent from "./ShopContent/ShopContent";
import ShopSider from "./ShopSider/ShopSider";


type PropsType = {							
	
}

const Shop : React.FC<PropsType> = (props) => {


	
	


	
	return (
		<div >
			
			<h1>Shop  Shop  Shop </h1>
			<Layout>
		

				<ShopSider/>
				<ShopContent/>
			
      </Layout>
			
		</div>
	)
}


export default Shop;