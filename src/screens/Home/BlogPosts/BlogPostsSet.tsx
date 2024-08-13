import { Col, Row } from 'antd';
import React, { FC, useEffect } from 'react';
import s from './BlogPostsSet.module.css';
import BlogPost from './BlogPost';

import { useAppSelector, useAppDispatch } from '../../../types/types'
import { selectLatestBlogPosts, useLatestBlogPost } from '../../../features/BlogPostsSlice'




// import { decrement, increment } from './counterSlice'







// Users  : React.FC<PropsType>  or     Users  : FC<PropsType> & import React, {FC} from 'react';
export const BlogPostsSet: FC = () => {

	const latestBlogPosts = useAppSelector(selectLatestBlogPosts);
	useLatestBlogPost(); //Наш HOOK, который запрашивает 4 последние BlogPost-а при каждом монтировании текущего-BlogPostsSet-а компонента 

	//------------------------------------------------------------------------------------------------------------------------

	return (
		<div>
			<div className={s.blogPostSet}>

				{/* {blogPosts.map(bP => <BlogPost blogPost={bP}	key={u.id}	/>	)} */}

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
