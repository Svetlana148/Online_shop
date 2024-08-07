import React, { useState } from "react";
import s from "./PriseSlider.module.css";
import { Slider } from "antd";


type PriceSliderType = {							
	
}

const PriceSlider : React.FC<PriceSliderType> = (props) => {

	const [minPrice, setMinPrice] = useState(37);
	const [maxPrice, setMaxPrice] = useState(1500);
	const onPriceChange = (value: number[]) => {
		setMinPrice(value[0])
		setMaxPrice(value[1])
		};

	return (
		<div >
			<Slider 
			min={39}
			max={1500}
			onChange={onPriceChange}
			range defaultValue={[minPrice, maxPrice]} />
			<div className={s.sliderText}>
				Price: <span>min-{minPrice}  max-{maxPrice}</span>
			</div>
		</div>
	)
}


export default PriceSlider;


