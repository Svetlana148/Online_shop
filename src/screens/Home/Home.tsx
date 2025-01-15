/** Home page*/
import React from 'react';
import HomePageCarousel from './Carousel/ScreenHomeCarousel';
import HomeFocusedItems from './HomeFocusedItems/HomeFocusedItems';
import LatestBlogPostsSet from './LatestBlogPostsSet/LatestBlogPostsSet';


/** Home page*/
const ScreenHome: React.FC = () => {
	return (
		<div>
			<HomePageCarousel />
			<HomeFocusedItems />
			<LatestBlogPostsSet />
		</div>
	);
};

export default ScreenHome;