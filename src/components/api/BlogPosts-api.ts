//Запросы о BlogPosts на сервер 
import { BlogPostType, BlogPostListType } from '../../types/types';
import { instance } from './api';



// Группа запросов на сервер для BlogPosts--------------------------
export const BlogPostsAPI = {
	getLatestBlogPosts():Promise<BlogPostListType> {
		return instance.get<BlogPostListType>(`blog/latest?top=4`).then(res => res.data)
	},
}

	