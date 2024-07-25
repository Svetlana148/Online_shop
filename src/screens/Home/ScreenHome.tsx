import React from 'react';
import ScreenHomePageCarousel from './Carousel/ScreenHomeCarousel';
import ScreenHomeFocusedItems from './FocusedItems/FocusedItems';
import { BlogPostsSet } from './BlogPosts/BlogPostsSet';


const ScreenHome: React.FC = () => {

	return (

		<div>
			<ScreenHomePageCarousel />
			<ScreenHomeFocusedItems />
			<BlogPostsSet />
			

		</div>

	);
};

export default ScreenHome;