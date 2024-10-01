/** Requests for BlogPosts to the server*/
import { BlogPostListType } from '../../features/BlogPostsSlice';
import { instance } from './api';

/** Requests for BlogPosts to the server*/
export const BlogPostsAPI = {
	getLatestBlogPosts():Promise<BlogPostListType> {
		return instance.get<BlogPostListType>(`blog/latest?top=4`).then(res => res.data)
	},
}

	