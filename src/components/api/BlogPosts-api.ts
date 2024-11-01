/** Requests for BlogPosts to the server*/
import { BlogPostListType } from '../../features/BlogPostsSlice';
import { instance } from './api';

/** Requests for BlogPosts to the server*/
export const BlogPostsAPI = {
	async getLatestBlogPosts():Promise<BlogPostListType> {
		const res = await instance.get<BlogPostListType>(`blog/latest?top=4`);
		return res.data;
	},
}

	