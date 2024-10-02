/** Configures and creates the Redux store with the specified reducers */
import { configureStore } from '@reduxjs/toolkit'
import blogPostsReducer from '../features/BlogPostsSlice'
import shopReducer from '../features/ShopSlice'
import userProfileReducer from '../features/UserProfileSlice'
import commonSliceReducer from '../features/CommonSlice'

/**
 * Configures and creates the Redux store with the specified reducers.
 *
 * @component
 * @param {Object} reducers - An object containing the reducers for the store.
 * @param {Function} reducers.blogPosts - Reducer for handling blog posts state.
 * @param {Function} reducers.shop - Reducer for handling shop state.
 * @param {Function} reducers.userProfile - Reducer for handling user profile state.
 * @param {Function} reducers.common - Reducer for handling common state.
 * @returns {Store} The configured Redux store.
 */
const store = configureStore({
	reducer: {
		blogPosts: blogPostsReducer,
		shop: shopReducer,
		userProfile: userProfileReducer,
		common: commonSliceReducer,
	}
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch