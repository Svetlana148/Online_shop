import React from 'react';
import { Carousel, Col, ConfigProvider, Row } from 'antd';
import s from './HomeScreenCarousel.module.css';
import HomeScreenCarousel_img1 from '../../../resources/img/HomeScreen/HomeScreenCarousel_1.png';





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
			},
		},
		}}>


		<Carousel afterChange={onChange}>
		
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
										of cheap and trendy plants. Use 
										<br /> our plants to create 
										an unique Urban Jungle. Order your favorite plants!
									</div>
								</div>
							</div>
						</Col>



						<Col span={10}>
								<img   className={s.homeScreenCarousel_img1} src={HomeScreenCarousel_img1} alt="" />
						</Col>
					</Row>
		
				</h3>
			</div>
		</div>



		<div>
			<h3 className={s.contentStyle}>2</h3>
		</div>
		<div>
			<h3 className={s.contentStyle}>3</h3>
		</div>
		
		</Carousel>
		</ConfigProvider>
	);
};

export default HomeScreenCarousel;