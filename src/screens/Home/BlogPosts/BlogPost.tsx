/** Renders 1 post of blog for Home page*/
import React from 'react';
import s from './BlogPost.module.css';
import right_arrow_dark from '../../../resources/img/HomeScreen/right_arrow_dark.svg';
import { BlogPostType } from '../../../features/BlogPostsSlice';


type PropsType = {
	blogPost: BlogPostType
}

let BlogPost: React.FC<PropsType> = (props) => {
	const { DateTime } = require("luxon");

	return (
		<div data-testid="blog-post">
			<div className={s.blogPost_card}>
				<div className={s.blogPost_card_container}>
					<div >
						<img className={s.blogPost_img} src={props.blogPost.titleImage} alt="" />
					</div>

					<div className={s.blogPost_card_textContainer}>
						<div className={s.blogPost_card_subtitle}>
							{DateTime.fromISO(props.blogPost.postDate).toFormat('LLLL d')}
							&nbsp;|
							Read in {props.blogPost.timeToRead}	minutes
						</div>

						<div className={s.blogPost_card_title}>{props.blogPost.title}</div>

						<div className={s.blogPost_card_text}>{props.blogPost.description}
						</div>

						<div className={s.blogPost_link}>
							<a href="/shop">
								<div className={s.blogPost_linkContainer}>
									<div className={s.blogPost_link_textArrow}>Read More</div>
									<img className={s.blogPost_link_arrow} src={right_arrow_dark} alt="" />
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default BlogPost;
