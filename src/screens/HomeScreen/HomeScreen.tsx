import React from 'react';
import HomePageCarousel from './HomeScreenCarousel/HomeScreenCarousel';
import HomeScreenFocusedItems from './HomeScreenFocusedItems';


const HomePage: React.FC = () => {

	return (

		<div>
			<HomePageCarousel />
			<HomeScreenFocusedItems />
			
		</div>

	);
};

export default HomePage;