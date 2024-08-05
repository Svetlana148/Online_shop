import React from 'react';
import HomePageCarousel from './Carousel/ScreenHomeCarousel';
import HomeFocusedItems from './FocusedItems/FocusedItems';
import { BlogPostsSet } from './BlogPosts/BlogPostsSet';


const ScreenHome: React.FC = () => {

	return (

		<div>
			<HomePageCarousel />
			<HomeFocusedItems />
			<BlogPostsSet />
			

		</div>

	);
};

export default ScreenHome;