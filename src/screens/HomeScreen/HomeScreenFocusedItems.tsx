import React from 'react';
import { Button, Col, Row } from 'antd';
import s from './HomeScreenFocusedItems.module.css';
import right_arrow_white from '../../resources/img/HomeScreen/right_arrow_white.svg';

const HomeScreenFocusedItems: React.FC = () => {
	

	return (
		<Row className={s.homeScreenFocusedItems_row} gutter={28}>

			{/* ----1card------------------------------------------------ */}
			<Col xl={12} lg={24} xs={24}>
				
				<Row className={s.homeScreenFocusedItems_row1}>
					<Col span={10} >	
						<div className={s.homeScreenFocusedItems_card_space}>
							<div className={ [s["homeScreenFocusedItems_cardImg"], s["homeScreenFocusedItems_cardImg1"] ].join(" ")}>
							</div>
						</div>
						<div className={s.homeScreenFocusedItems_card_background}></div>
					</Col>

					<Col span={14} >
						<div className={s.homeScreenFocusedItems_card_container}>
							<div className={s.homeScreenFocusedItems_card_background}>
								<div className={s.homeScreenFocusedItems_card_background_container}>
									<div className={s.homeScreenFocusedItems_card_title}>Summer cactus<br />& succulents </div>
										<div className={s.homeScreenFocusedItems_card_text}>
											We are an online plant shop offering a wide range of cheap and trendy plants
									</div>
									<Button className={s.homeScreenFocusedItems_button}>Find More
											<img className={s.homeScreenFocusedItems_arrow} src={right_arrow_white} alt="" />
									</Button>
								</div>
							</div>
						</div>	
					</Col>
				</Row>
				
			</Col>
			

			{/* ----2card------------------------------------------------ */}
			<Col xl={12} lg={24} xs={24}>
				<Row className={s.homeScreenFocusedItems_row2}>
					<Col span={10} >	
					<div className={s.homeScreenFocusedItems_card_space}>
							<div className={ [s["homeScreenFocusedItems_cardImg"], s["homeScreenFocusedItems_cardImg2"] ].join(" ")}>
							</div>
						</div>
						<div className={s.homeScreenFocusedItems_card_background}></div>
					</Col>

					<Col span={14} >
						<div className={s.homeScreenFocusedItems_card_container}>
							<div className={s.homeScreenFocusedItems_card_background}>
								<div className={s.homeScreenFocusedItems_card_background_container}>
									<div className={s.homeScreenFocusedItems_card_title}>Styling Trends
									<br />& much more </div>
										<div className={s.homeScreenFocusedItems_card_text}>
											We are an online plant shop offering a wide range of cheap and trendy plants
									</div>
									<Button className={s.homeScreenFocusedItems_button}>Find More
											<img className={s.homeScreenFocusedItems_arrow} src={right_arrow_white} alt="" />
									</Button>
								</div>
							</div>
						</div>	
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default HomeScreenFocusedItems;