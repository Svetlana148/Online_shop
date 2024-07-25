import React from 'react';
import { Button, Carousel, Col, ConfigProvider, Row } from 'antd';
import s from './ScreenHomeCarousel.module.css';
import right_arrow from '../../../resources/img/HomeScreen/right_arrow.svg';





const ScreenHomeCarousel: React.FC = () => {
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
						colorBgContainer: "#46A358",
					},
				},
			}}>


			<Carousel afterChange={onChange} autoplay={true}>

				{/* ----1Card------------------------------------ */}
				<div>
					<div>
						<h3 className={s.contentStyle}>

							<Row className={s.homeCarousel_row}>
								<Col span={14}>
									<div className={s.homeCarousel_card}>
										<div className={s.homeCarousel_card_container}>

											<div className={s.homeCarousel_card_subtitle}>Welcome to GreenShop</div>

											<div className={s.homeCarousel_card_title}>
												Let’s Make a <br />Better <span>Planet</span></div>

											<div className={s.homeCarousel_card_text}>
												We are an online plant shop offering a wide range
												of cheap and trendy plants.
												<br />Use our plants to create an unique Urban Jungle. Order your favorite plants!
											</div>

											<Button className={s.homeCarousel_button}>SHOP NOW</Button>
											<div className={s.homeCarousel_arrow}>
												<a href="/shop">
													<div className={s.homeCarousel_arrowContainer}>
														<div className={s.homeCarousel_shopArrow_textArrow}>SHOP NOW</div>
														<img className={s.homeCarousel_shopArrow_arrow} src={right_arrow} alt="" />
													</div>
												</a>
											</div>

										</div>
									</div>
								</Col>


								<Col span={10} >
									<div className={[s["homeCarousel_cardImg"], s["homeCarousel_cardImg1"]].join(" ")}>
									</div>
								</Col>
							</Row>

						</h3>
					</div>
				</div>


				{/* ----2Card------------------------------------ */}
				<div>
					<h3 className={s.contentStyle}>

						<Row className={s.homeCarousel_row}>
							<Col span={14}>
								<div className={s.homeCarousel_card}>
									<div className={s.homeCarousel_card_container}>

										<div className={s.homeCarousel_card_subtitle}>Welcome to GreenShop</div>

										<div className={s.homeCarousel_card_title}>
											Let’s Make a <br />Better <span>Planet</span></div>

										<div className={s.homeCarousel_card_text}>
											We are an online plant shop offering a wide range
											of cheap and trendy plants.
											<br />Use our plants to create an unique Urban Jungle. Order your favorite plants!
										</div>

										<Button className={s.homeCarousel_button}>SHOP NOW</Button>
										<div className={s.homeCarousel_arrow}>
											<a href="/shop">
												<div className={s.homeCarousel_arrowContainer}>
													<div className={s.homeCarousel_shopArrow_textArrow}>SHOP NOW</div>
													<img className={s.homeCarousel_shopArrow_arrow} src={right_arrow} alt="" />
												</div>
											</a>
										</div>
									</div>
								</div>
							</Col>


							<Col span={10} >
								<div className={[s["homeCarousel_cardImg"], s["homeCarousel_cardImg2"]].join(" ")}>

								</div>
							</Col>
						</Row>

					</h3>
				</div>

				{/* ----3Card------------------------------------ */}
				<div>
					<h3 className={s.contentStyle}>

						<Row className={s.homeCarousel_row}>
							<Col span={14}>
								<div className={s.homeCarousel_card}>
									<div className={s.homeCarousel_card_container}>

										<div className={s.homeCarousel_card_subtitle}>Welcome to GreenShop</div>

										<div className={s.homeCarousel_card_title}>
											Let’s Make a <br />Better <span>Planet</span></div>

										<div className={s.homeCarousel_card_text}>
											We are an online plant shop offering a wide range
											of cheap and trendy plants.
											<br />Use our plants to create an unique Urban Jungle. Order your favorite plants!
										</div>

										<Button className={s.homeCarousel_button}>SHOP NOW</Button>
										<div className={s.homeCarousel_arrow}>
											<a href="/shop">
												<div className={s.homeCarousel_arrowContainer}>
													<div className={s.homeCarousel_shopArrow_textArrow}>SHOP NOW</div>
													<img className={s.homeCarousel_shopArrow_arrow} src={right_arrow} alt="" />
												</div>
											</a>
										</div>
									</div>
								</div>
							</Col>


							<Col span={10} >
								<div className={[s["homeCarousel_cardImg"], s["homeCarousel_cardImg3"]].join(" ")}>
									{/* <img   className={s.homeCarousel_img1} src={homeCarousel_img1} alt="" /> */}
								</div>
							</Col>
						</Row>

					</h3>
				</div>

			</Carousel>
		</ConfigProvider>
	);
};

export default ScreenHomeCarousel;