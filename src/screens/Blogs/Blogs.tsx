/** Blogs for Blogs page*/
import { Col, Row } from "antd";
import React from "react";
import { useAppSelector } from "../../types/types";
import s from "./Blogs.module.css";
import { selectAllBlogPosts, useAllBlogPost } from "../../features/BlogPostsSlice";
import BlogPostInList from "./BlogPostInList/BlogPostInList";


type PropsType = {
}

/** Renders a set of Blogs for Blogs page*/
const Blogs: React.FC<PropsType> = () => {
	const allBlogPosts = useAppSelector(selectAllBlogPosts);
	/** HOOK requests the last 4 BlogPosts each time the current BlogPostsSet component is mounted*/
	useAllBlogPost();

	return (
		<div data-testid="blog-posts-set">
			<div className={s.blogPostSet}>
				<div className={s.blogPostSet_title}>Our Blog Posts</div>
				<div className={s.blogPostSet_subtitle}>We are an online plant shop offering a wide range of cheap and trendy plants. </div>

				<Row className={s.blogPostSet_row} gutter={[{ xl: 30, lg: 30, xs: 20 }, { xl: 40, lg: 76, sm: 76, md: 40, xs: 40 }]}>
					{allBlogPosts.map(bp => <Col xl={12} lg={12} sm={24} md={24} xs={24} >
						<a href={"blogs/"+bp.id.toString()}>
							<BlogPostInList blogPost={bp} />
						</a>
					</Col>
					)}
				</Row>
			</div>
		</div>
	)
}

export default Blogs;



