import { configureStore } from '@reduxjs/toolkit';
import blogPostsReducer, { setLatest, selectLatestBlogPosts, useLatestBlogPost } from './BlogPostsSlice';
import { BlogPostsAPI } from '../components/api/BlogPosts-api';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import React from 'react';

// Mock BlogPostsAPI
jest.mock('../components/api/BlogPosts-api');

const initialState = {
  blogPosts: {
    latestBlogPosts: [{
      id: 1,
      description: "",
      title: "",
      titleImage: "",
      timeToRead: 1,
      postDate: "2024-08-08T12:43:12",
    }],
  },
};

const createTestStore = () => configureStore({
  reducer: {
    blogPosts: blogPostsReducer,
  },
  preloadedState: initialState,
});

describe('blogPostsSlice', () => {
  let store;

  beforeEach(() => {
    store = createTestStore();
  });

  it('should handle initial state', () => {
    expect(store.getState().blogPosts).toEqual(initialState.blogPosts);
  });

  it('should handle setLatest', () => {
    const newPosts = [{
      id: 2,
      description: "New post",
      title: "New title",
      titleImage: "new-image.jpg",
      timeToRead: 5,
      postDate: "2024-09-09T12:43:12",
    }];
    store.dispatch(setLatest(newPosts));
    expect(store.getState().blogPosts.latestBlogPosts).toEqual(newPosts);
  });

  it('should select latest blog posts', () => {
    const state = store.getState();
    expect(selectLatestBlogPosts(state)).toEqual(initialState.blogPosts.latestBlogPosts);
  });
});

describe('useLatestBlogPost', () => {
  let store;

  beforeEach(() => {
    store = createTestStore();
  });

  it('should fetch and dispatch latest blog posts', async () => {
    const newPosts = [{
      id: 2,
      description: "New post",
      title: "New title",
      titleImage: "new-image.jpg",
      timeToRead: 5,
      postDate: "2024-09-09T12:43:12",
    }];
    BlogPostsAPI.getLatestBlogPosts.mockResolvedValue(newPosts);

    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    const { waitForNextUpdate } = renderHook(() => useLatestBlogPost(), { wrapper });

    waitForNextUpdate();

   // wait fo 5 second
    await new Promise((resolve) => setTimeout(resolve, 500));

    // await act(async () => {
    //   await waitForNextUpdate({ timeout: 10000 });
    // });

    expect(store.getState().blogPosts.latestBlogPosts).toEqual(newPosts);
  }, 10000); // Увеличиваем таймаут для этого теста до 10000 мс
});