/** Renders 1 Card for a content of a shop page*/
import React from "react";
import s from "./ShopCard.module.css";
import ShopScreen_Content_Basket from "../../../../resources/img/ShopScreen/Basket.svg";
import ShopScreen_Content_Like from "../../../../resources/img/ShopScreen/Like.svg";
import ShopScreen_Content_Search from "../../../../resources/img/ShopScreen/Search.svg";
import LikeMobile from "../../../../resources/img/ShopScreen/LikeMobile.svg";
import { ShopCardType } from "../../../../features/ShopSlice";


type PropsType = {
	shopCard: ShopCardType
}

/**
 * Renders 1 Card for a content of a shop page
 * ShopCard component displays a card with shop item details including image, title, price, and sale information.
 * 
 * @component
 * @param {PropsType} props - The properties object.
 * @param {Object} props.shopCard - The shop card data.
 * @param {string} props.shopCard.photo - The URL of the shop item photo.
 * @param {string} props.shopCard.title - The title of the shop item.
 * @param {number} props.shopCard.price - The price of the shop item.
 * @param {number} [props.shopCard.salePercent] - The sale percentage of the shop item, if any.
 * @param {number} [props.shopCard.salePrice] - The sale price of the shop item, if any.
 * 
 * @returns {JSX.Element} The rendered ShopCard component.
 */
const ShopCard : React.FC<PropsType> = (props) => {
	
	return (
		<div >
			<div className={s.shopContent_card}>
				<div className={s.shopContent_card_container}>
					<div className={s.shopContent_card_imgContainer}>
						<img   className={s.shopContent_img1} src={props.shopCard.photo} alt="" />
						<div className={s.shopContent_card_saleContainer} 
						style={{visibility: (props.shopCard.salePercent !=null ? "visible" : "hidden")}}>
							<div className={s.shopContent_card_sale}>{props.shopCard.salePercent}% OFF</div>
						</div>
						<img   className={s.shopContent_likeMobile} src={LikeMobile} alt="" />
					
						<div className={s.shopContent_card_likeContainer}>
							<img src={ShopScreen_Content_Basket} alt="" />
							<img src={ShopScreen_Content_Like} alt="" />
							<img src={ShopScreen_Content_Search} alt="" />
						</div>
					</div>

					<div className={s.ShopScreen_textContainer}>
						<div className={s.ShopScreen_card_title}>{props.shopCard.title}</div>
						<div className={s.ShopScreen_card_price}> ${props.shopCard.price} &nbsp;
							<span className={s.shopContent_card_saleTextContainer} 
							style={{visibility: (props.shopCard.salePrice !=null ? "visible" : "hidden")}}> ${props.shopCard.salePrice} </span>
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