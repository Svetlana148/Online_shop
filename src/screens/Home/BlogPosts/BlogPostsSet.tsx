/** Renders a set of 4 Blogposts for Home page*/
import { Col, Row } from 'antd';
import { FC } from 'react';
import s from './BlogPostsSet.module.css';
import BlogPost from './BlogPost';
import { useAppSelector } from '../../../types/types'
import { selectLatestBlogPosts, useLatestBlogPost } from '../../../features/BlogPostsSlice'


/** Renders a set of 4 Blogposts for Home page*/
const BlogPostsSet: FC = () => {

	const latestBlogPosts = useAppSelector(selectLatestBlogPosts);
	/** HOOK requests the last 4 BlogPosts each time the current BlogPostsSet component is mounted*/
	useLatestBlogPost();

	return (
		<div data-testid="blog-posts-set">
			<div className={s.blogPostSet}>
				<div className={s.blogPostSet_title}>Our Blog Posts</div>
				<div className={s.blogPostSet_subtitle}>We are an online plant shop offering a wide range of cheap and trendy plants. </div>

				<Row className={s.blogPostSet_row} gutter={[{ xl: 44, lg: 30, xs: 20 }, { xl: 0, lg: 50, sm: 50, md: 40, xs: 40 }]}>
					{latestBlogPosts.map(bp => <Col xl={6} lg={12} xs={24}>
						<BlogPost blogPost={bp} />
					</Col>
					)}
				</Row>
			</div>
		</div>
	);
};
export default BlogPostsSet;