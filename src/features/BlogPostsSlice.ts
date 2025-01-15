/** Slice for managing blog posts state */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/redux-store'
import {PhotoType, useAppDispatch } from '../types/types';
import { useEffect } from 'react';
import { BlogPostsAPI } from '../components/api/BlogPosts-api';


// Define a type for the slice state
interface initialStateType {
  latestBlogPosts: BlogPostListType,
  allBlogPosts: BlogPostListType,
}

//-->BlogPostList
export type BlogPostListType = Array<BlogPostType>

//-->BlogPost-->Photo
export type BlogPostType = { 
	id: number
	title:  string
	description:  string
	titleImage: PhotoType
	postDate : string
	timeToRead : number
}

// Define the initial state using that type
const initialState: initialStateType = {
  latestBlogPosts: [{
    id: 1,
    description: "",
    title: "",
    titleImage: "",
    timeToRead: 1,
    postDate: "2024-08-08T12:43:12",
  }],
  allBlogPosts: [{
    id: 1,
    description: "",
    title: "",
    titleImage: "",
    timeToRead: 1,
    postDate: "2024-08-08T12:43:12",
  }],
}

/**
 * Slice for managing blog posts state.
 * 
 * @component
 * 
 * @param {Object} state - The current state of the blog posts.
 * @param {Object} action - The action to be handled.
 * @param {BlogPostListType} action.payload - The payload containing the latest blog posts.
 * 
 * @returns {void}
 */
export const blogPostsSlice = createSlice({
  name: 'blogPosts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLatestBlogPosts: (state, action: PayloadAction<BlogPostListType>) => {
      state.latestBlogPosts = action.payload
    },
    setAllBlogPosts: (state, action: PayloadAction<BlogPostListType>) => {
      state.allBlogPosts = action.payload
    },
  },
})

//Actions
export const { setLatestBlogPosts } = blogPostsSlice.actions
export const { setAllBlogPosts } = blogPostsSlice.actions


// Selectors
export const selectLatestBlogPosts = (state: RootState) => state.blogPosts.latestBlogPosts;
export const selectAllBlogPosts = (state: RootState) => state.blogPosts.allBlogPosts;


//SliceReducers
export default blogPostsSlice.reducer;

//Hooks
/** BLL
 * Custom hook to fetch and dispatch the latest blog posts.
 *
 * @component
 * @returns {void} This hook does not return a value.
 */

//for Home page
export const useLatestBlogPost = () => {
  const dispatch = useAppDispatch()
  useEffect( () => {
    const fetchData = async() => {
      let data = await BlogPostsAPI.getLatestBlogPosts()
      dispatch(setLatestBlogPosts(data)) 
    }
    fetchData();
  }, [dispatch]);
};

//for Blogs page
export const useAllBlogPost = () => {
  const dispatch = useAppDispatch()
  useEffect( () => {
    const fetchData = async() => {
      let data = await BlogPostsAPI.getAllBlogPosts()
      dispatch(setAllBlogPosts(data)) 
    }
    fetchData();
  }, [dispatch]);
};