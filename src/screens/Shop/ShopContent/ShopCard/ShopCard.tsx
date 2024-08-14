import React from "react";
import s from "./ShopCard.module.css";
import { Col, Row } from "antd";
import { PhotosType } from "../../../../types/types";
import ShopScreen_Content_img1 from "../../../../resources/img/ShopScreen/ShopScreen_Content_img1.jpg";
import ShopScreen_Content_Basket from "../../../../resources/img/ShopScreen/Basket.svg";
import ShopScreen_Content_Like from "../../../../resources/img/ShopScreen/Like.svg";
import ShopScreen_Content_Search from "../../../../resources/img/ShopScreen/Search.svg";




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
					<div className={s.shopContent_card_imgContainer}>
						<img   className={s.shopContent_img1} src={ShopScreen_Content_img1} alt="" />
						<div className={s.shopContent_card_saleContainer}>
							<div className={s.shopContent_card_sale}>13% OFF</div>
						</div>
						<div className={s.shopContent_card_likeContainer}>
							<img src={ShopScreen_Content_Basket} alt="" />
							<img src={ShopScreen_Content_Like} alt="" />
							<img src={ShopScreen_Content_Search} alt="" />
						</div>
					</div>

					<div className={s.ShopScreen_textContainer}>
						<div className={s.ShopScreen_card_title}>props.blogPost.title</div>
						<div className={s.ShopScreen_card_price}> $119.00 &nbsp;
							<span className={s.shopContent_card_saleTextContainer}> $229.00 </span>
						</div>

						{/* <div className={s.blogPost_card_title}>{props.blogPost.title}</div>
						<div className={s.blogPost_card_text}>{props.blogPost.description} </div>*/}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShopCard;