/** Renders 1 Blog post of blog for Blog page*/
import React from "react";
import s from "./BlogPostLarge.module.css";
import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../types/types";
import { selectBlogPostsLarge, setLargeBlogPostId, useBlogPostLarge } from "../../../features/BlogPostsSlice";
import { RootState } from "../../../redux/redux-store";


// type PropsType = {
// 	blogPost: BlogPostType
// }

let BlogPostLarge: React.FC = () => {
	const { DateTime } = require("luxon");

	const{blogPostId}= useParams();
	const dispatch = useAppDispatch();
	dispatch(setLargeBlogPostId(blogPostId));
	
	const blogPostLarge = useAppSelector(selectBlogPostsLarge);
	useBlogPostLarge();
	

	if (!blogPostLarge) {
		return <div>Blog post not found</div>
	}
	return (
		<div data-testid="blog-post">
			
			<div className={s.blogPost_card}>


					<div className={s.blogPost_card_container1}>

						{/* <div className={s.blogPost_img_container2}>
							<img className={s.blogPost_img} src={blogPostLarge.titleImage} alt="" />
						</div>
						<div className={s.blogPost_card_textContainer}>
							<div className={s.blogPost_card_subtitle}>
								{DateTime.fromISO(blogPostLarge.postDate).toFormat('LLLL d')}
								&nbsp;|
								Read in {blogPostLarge.timeToRead}	minutes
							</div>

							<div className={s.blogPost_card_title}>{blogPostLarge.title}</div>


							<div className={s.blogPost_card_text}>{blogPostLarge.description}
							</div>
						</div> */}

							{/* <img className={s.blogPost_img} src={blogPostLarge.titleImage} alt="" /> */}
							<div className={s.blogPost_card_Container}>
								<img className={s.blogPost_img} src={blogPostLarge.titleImage} alt="" />

								<div className={s.blogPost_card_subtitle}>
									{DateTime.fromISO(blogPostLarge.postDate).toFormat('LLLL d')}
									&nbsp;|
									Read in {blogPostLarge.timeToRead}	minutes
								</div>

								<div className={s.blogPost_card_title}>{blogPostLarge.title}</div>

								<p className={s.blogPost_card_text}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
									 Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
									  sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. 
									  Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, 
									  commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, 
									  eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
									   facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue
										, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accum
										san porttitor, facilisis luctus, metus</p>

										<p className={s.blogPost_card_text}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
									 Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
									  sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. 
									  Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, 
									  commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, 
									  eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
									   facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue
										, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accum
										san porttitor, facilisis luctus, metus</p>

										<p className={s.blogPost_card_text}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
									 Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
									  sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. 
									  Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, 
									  commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, 
									  eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
									   facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue
										, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accum
										san porttitor, facilisis luctus, metus</p>
						</div> 
				</div>
			</div>
		</div>
	)
};

export default BlogPostLarge;



