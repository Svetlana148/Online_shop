import React from 'react';
import s from './BlogPost.module.css';
// import blogPostPhoto from '../../img/User.png';
import {NavLink} from  'react-router-dom';
import BlogPost_img1 from '../../../resources/img/HomeScreen/BlogPost_img1.jpg';
import right_arrow_dark from '../../../resources/img/HomeScreen/right_arrow_dark.svg';


// import {usersAPI} from '../api/users-api';
// import { UserType } from '../../types/types';





//Типизируем "props-ы" для к-ты "BlogPost"
type PropsType = {
	// blogPost: blogPostType
}


//({blogPost})=>
let BlogPost: React.FC<PropsType> = ()=>{

return (
	<div>
		{/* <div>
			<span>
				<div>
					<NavLink to = {'/profile/' +user.id}>
						<img src={user.photos.small !=null ? user.photos.small : userPhoto} className={styles.usersPhoto} alt="" />
					</NavLink>
				</div>
			</span>

			<span>
				<span>
					<div>{user.name}</div>
					<div>{user.status}</div>
				</span>
			</span>
		</div> */}

			<div className={s.blogPost_row_card}>
				<div className={s.blogPost_row_card_container}>
					<div  className={s.blogPost_row_img}>
						<img  className={s.blogPost_row_img} src={BlogPost_img1} alt="" />
					</div>

					<div className={s.blogPost_row_card_textContainer}>
						<div className={s.blogPost_row_card_subtitle}>September 12  I Read in 6 minutes</div>

						<div className={s.blogPost_row_card_title}>Cactus & Succulent Care Tips</div>

						<div className={s.blogPost_row_card_text}>
							Cacti are succulents are easy care plants for any home or patio. 
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
