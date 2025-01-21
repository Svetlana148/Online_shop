/** Renders list of Blog posts of blog for Blogs page*/
import React from "react";
import { BlogPostType } from "../../../features/BlogPostsSlice";
import s from './BlogPostInList.module.css';
import right_arrow_dark from '../../../resources/img/HomeScreen/right_arrow_dark.svg';
import { Col, Row } from "antd";




type PropsType = {
	blogPost: BlogPostType
}

let BlogPostInList: React.FC<PropsType> = (props) => {
	const { DateTime } = require("luxon");

	return (
		<div data-testid="blog-post">
			<div className={s.blogPost_card}>
				<div className={s.blogPost_card_container}>
					<Row className={s.blogPostSet_row} justify="center">
						<Col xl={12} lg={12} sm={24} md={24} xs={24} >
							<div className={s.blogPost_img_container}>
								<img className={s.blogPost_img} src={props.blogPost.titleImage} alt="" />
							</div>
						</Col>
						<Col xl={12} lg={12} sm={24} md={24} xs={24}>
							<div >
								<div className={s.blogPost_card_textContainer}>
									<div className={s.blogPost_card_subtitle}>
										{DateTime.fromISO(props.blogPost.postDate).toFormat('LLLL d')}
										&nbsp;|
										Read in {props.blogPost.timeToRead}	minutes
									</div>

									<div className={s.blogPost_card_title}>{props.blogPost.title}</div>

									<div className={s.blogPost_card_text}>{props.blogPost.description}</div>

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
						</Col>
					</Row>
				</div>
			</div>
		</div>
	)
};

export default BlogPostInList;