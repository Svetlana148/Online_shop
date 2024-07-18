import React from 'react';
import { Button, Carousel, Col, ConfigProvider, Row } from 'antd';
import s from './HomeScreenCarousel.module.css';
// import HomeScreenCarousel_cardImg1 from '../../../resources/img/HomeScreen/HomeScreenCarousel_1.png';





	const HomeScreenCarousel: React.FC = () => {
	const onChange = (currentSlide: number) => {
		console.log(currentSlide);
	};

	return (

		<ConfigProvider

		theme={{
	
		components: {
			Carousel: {
				dotHeight: 8,
				dotWidth: 8,
				dotActiveWidth: 8,
				colorBgContainer:"#46A358",
			},
		},
		}}>


		<Carousel afterChange={onChange}>
		
		{/* ----1Card------------------------------------ */}
		<div>
			<div>			
				<h3 className={s.contentStyle}>
					
					<Row className={s.homeScreenCarousel_row}>
						<Col span={14}>
							<div className={s.homeScreenCarousel_card}>
								<div className={s.homeScreenCarousel_card_container}>

									<div className={s.homeScreenCarousel_card_subtitle}>Welcome to GreenShop</div>

									<div className={s.homeScreenCarousel_card_title}>
										Let’s Make a <br />Better <span>Planet</span></div>

									<div className={s.homeScreenCarousel_card_text}>
										We are an online plant shop offering a wide range 
										of cheap and trendy plants. 
										<br />Use our plants to create an unique Urban Jungle. Order your favorite plants!
									</div>

									<Button className={s.homeScreenCarousel_button}>SHOP NOW</Button>
								</div>
							</div>
						</Col>


						<Col span={10} >
							<div className={ [s["homeScreenCarousel_cardImg"], s["homeScreenCarousel_cardImg1"] ].join(" ")}>
							</div>
						</Col>
					</Row>
		
				</h3>
			</div>
		</div>


		{/* ----2Card------------------------------------ */}
		<div>
			<h3 className={s.contentStyle}>
					
					<Row className={s.homeScreenCarousel_row}>
						<Col span={14}>
							<div className={s.homeScreenCarousel_card}>
								<div className={s.homeScreenCarousel_card_container}>

									<div className={s.homeScreenCarousel_card_subtitle}>Welcome to GreenShop</div>

									<div className={s.homeScreenCarousel_card_title}>
										Let’s Make a <br />Better <span>Planet</span></div>

									<div className={s.homeScreenCarousel_card_text}>
										We are an online plant shop offering a wide range 
										of cheap and trendy plants. 
										<br />Use our plants to create an unique Urban Jungle. Order your favorite plants!
									</div>
								</div>
							</div>
						</Col>


						<Col span={10} >
						<div className={ [s["homeScreenCarousel_cardImg"], s["homeScreenCarousel_cardImg2"] ].join(" ")}>

							</div>
						</Col>
					</Row>
		
			</h3>
		</div>

		{/* ----3Card------------------------------------ */}
		<div>
		<h3 className={s.contentStyle}>
					
					<Row className={s.homeScreenCarousel_row}>
						<Col span={14}>
							<div className={s.homeScreenCarousel_card}>
								<div className={s.homeScreenCarousel_card_container}>

									<div className={s.homeScreenCarousel_card_subtitle}>Welcome to GreenShop</div>

									<div className={s.homeScreenCarousel_card_title}>
										Let’s Make a <br />Better <span>Planet</span></div>

									<div className={s.homeScreenCarousel_card_text}>
										We are an online plant shop offering a wide range 
										of cheap and trendy plants. 
										<br />Use our plants to create an unique Urban Jungle. Order your favorite plants!
									</div>
								</div>
							</div>
						</Col>


						<Col span={10} >
						<div className={ [s["homeScreenCarousel_cardImg"], s["homeScreenCarousel_cardImg3"] ].join(" ")}>
								{/* <img   className={s.homeScreenCarousel_img1} src={HomeScreenCarousel_img1} alt="" /> */}
							</div>
						</Col>
					</Row>
		
				</h3>
		</div>
		
		</Carousel>
		</ConfigProvider>
	);
};

export default HomeScreenCarousel;