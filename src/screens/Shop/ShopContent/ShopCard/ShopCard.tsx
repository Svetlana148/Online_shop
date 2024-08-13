import React from "react";
import s from "./ShopCard.module.css";
import { Col, Row } from "antd";
import { PhotosType } from "../../../../types/types";
import ShopScreen_Content_img1 from "../../../../resources/img/ShopScreen/ShopScreen_Content_img1.jpg";



type PropsType = {
	photo: PhotosType
	name: string
	price: number
}

const ShopCard : React.FC<PropsType> = (props) => {
	
	return (
		<div >
			<div className={s.shopContent_card}>
				<div className={s.shopContent_card_container}>
					<img   className={s.shopContent_img1} src={ShopScreen_Content_img1} alt="" />

					<div className={s.ShopScreen_textContainer}>
						<div className={s.ShopScreen_card_title}>props.blogPost.title</div>
						<div className={s.ShopScreen_card_price}>props.n</div>

						{/* <div className={s.blogPost_card_title}>{props.blogPost.title}</div>
						<div className={s.blogPost_card_text}>{props.blogPost.description} </div>*/}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShopCard;