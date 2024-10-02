/** Shop page*/
import React from "react";
import s from "./Shop.module.css";
import { Grid, Layout } from "antd";
import ShopContent from "./ShopContent/ShopContent";
import ShopSider from "./ShopSider/ShopSider";
import ShopSiderMobile from "./ShopSider/ShopSiderMobile/ShopSiderMobile";


const { useBreakpoint } = Grid;

type PropsType = {
}

/** Shop page*/
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