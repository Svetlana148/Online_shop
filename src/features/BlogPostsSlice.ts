import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/redux-store'
import {PhotoType, useAppDispatch, useAppSelector } from '../types/types';
import { useEffect, useState } from 'react';
import { BlogPostsAPI } from '../components/api/BlogPosts-api';




// SLICE------------------------------------------------------------------------

//Main----initialState-->BlogPostList-->BlogPost-----------------------------

//Типизируем initialState
// Define a type for the slice state
interface initialStateType {
  latestBlogPosts: BlogPostListType,
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
// ------------------------------------------------------------------------


// Define the initial state using that type
//Конкретный заяц
const initialState: initialStateType = {
  latestBlogPosts: [{
    id: 1,
    description: "hjhfkjfjfjjfmfg",
    title: "hjhfkjfjfjjfmfg",
    titleImage: "hjhfkjfjfjjfmfg",
    timeToRead: 1,
    postDate: "2024-08-08T12:43:12",
  }],
}





export const blogPostsSlice = createSlice({
  name: 'blogPosts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLatest: (state, action: PayloadAction<BlogPostListType>) => {
      state.latestBlogPosts = action.payload
    },
  },
})

//Actions----------------
export const { setLatest } = blogPostsSlice.actions

// Selectors-----------------
export const selectLatestBlogPosts = (state: RootState) => state.blogPosts.latestBlogPosts;

//1 Reducer
export default blogPostsSlice.reducer;



// BLL------------------------------------------------------------------------

export const useLatestBlogPost = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    BlogPostsAPI.getLatestBlogPosts()
      .then((data) => {
        dispatch(setLatest(data));
      })
      .catch((res) => console.error(res.status));
  }, [dispatch]);
};