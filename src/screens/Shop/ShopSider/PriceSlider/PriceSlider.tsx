import React, { useState } from "react";
import s from "./PriseSlider.module.css";
import { Slider } from "antd";
import { useSelector } from "react-redux";
import { selectFilterPriceMax, selectFilterPriceMin, shop_setFilterPriceMax, shop_setFilterPriceMin } from "../../../../features/ShopSlice";
import { useAppDispatch } from "../../../../types/types";


type PriceSliderType = {
}

const PriceSlider: React.FC<PriceSliderType> = (props) => {

	//Получает Hook-и
	const dispatch = useAppDispatch();

	//Для установки по default-у   значения фильтров     из Store2 
	const currentFilterPriceMin = useSelector(selectFilterPriceMin);
	const currentFilterPriceMax = useSelector(selectFilterPriceMax);


	//dispatch-им полученное значение Filter-ра в Store2
	const onPriceChange = (value: number[]) => {
		dispatch(shop_setFilterPriceMin(value[0]))
		dispatch(shop_setFilterPriceMax(value[1]))
	};



	return (
		<div >
			<Slider
				min={0}
				max={1500}
				onChange={onPriceChange}
				range defaultValue={[currentFilterPriceMin, currentFilterPriceMax]} />
			<div className={s.sliderText}>
				Price: <span>min-{currentFilterPriceMin}  max-{currentFilterPriceMax}</span>
			</div>
		</div>
	)
}


export default PriceSlider;


