/** PriceSlider component allows users to select a price range using a slider */
import React from "react";
import s from "./PriseSlider.module.css";
import { Slider } from "antd";
import { useSelector } from "react-redux";
import { selectFilterPriceMax, selectFilterPriceMin, shop_setFilterPriceMax, shop_setFilterPriceMin } from "../../../../features/ShopSlice";
import { useAppDispatch } from "../../../../types/types";


type PriceSliderType = {
}

/**
 * PriceSlider component allows users to select a price range using a slider.
 * It dispatches the selected price range to the store.
 *
 * @component
 * @param {PriceSliderType} props - The props for the PriceSlider component.
 * @returns {JSX.Element} The rendered PriceSlider component.
 */
const PriceSlider: React.FC<PriceSliderType> = (props) => {

	//get Hook
	const dispatch = useAppDispatch();

	//To set the default filter values ​​from Store
	const currentFilterPriceMin = useSelector(selectFilterPriceMin);
	const currentFilterPriceMax = useSelector(selectFilterPriceMax);

	//dispatch the received value of Filter to Store
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


