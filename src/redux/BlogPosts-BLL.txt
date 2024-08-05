import { BlogPostListType } from './../types/types';
import React, { useEffect, useState } from "react";
import {BlogPostsAPI} from "../components/api/BlogPosts-api";

const initialState: BlogPostListType =[]


const BlogPostLatest = ():BlogPostListType => {

	const [BlogPosts, SetBlogPosts] = useState(initialState);

	useEffect(() => {
		BlogPostsAPI.getLatestBlogPosts()
			.then((data) => { SetBlogPosts(data) })
			.catch((res) => console.error(res.status));
	}, []);

	return BlogPosts;
};

export default BlogPostLatest;


