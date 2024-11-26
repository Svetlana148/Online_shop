/** Home page*/
import React from 'react';
import HomePageCarousel from './Carousel/ScreenHomeCarousel';
import HomeFocusedItems from './HomeFocusedItems/HomeFocusedItems';
import BlogPostsSet from './BlogPosts/BlogPostsSet';


/** Home page*/
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