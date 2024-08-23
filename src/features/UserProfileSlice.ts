import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/redux-store'
import { PhotoType, useAppDispatch, useAppSelector } from '../types/types';
import { useEffect, useState } from 'react';
import { BlogPostsAPI } from '../components/api/BlogPosts-api';




// SLICE------------------------------------------------------------------------

//Типизируем initialState
// Define a type for the slice state


//-------------------------------

export interface UserProfilerType {
	profileId: string
	isLogged: boolean
	account: UserAccountType
	address: UserAddressType
}
export type UserAccountType = {
	firstName: string
	lastName: string
	email: string
	phone: string
	userName: string
	currentPassword: string
	newPassword: string
}
export type UserAddressType  = {
	country: string
	city: string
	street: string
	state: string
	zip: number
}



//Конкретный заяц
const initialState: UserProfilerType = {
	profileId: "1",
	isLogged: true,
	account:
	{	firstName: "Klara",
		lastName: "Bebe",
		email: "bebe@gmail.com",
		phone: "12345678",
		userName: "UserBEBE",
		currentPassword: "123",
		newPassword: "321",
	},
	address:
	{	country: "USA",
		city: "New-York",
		street: "Morriz",
		state: "New-York",
		zip: 55551,
	},
}
//----------------------------





export const UserProfileSlice = createSlice({
	name: 'userProfile',

	// `createSlice` will infer the state type from the `initialState` argument
	//`createSlice` выведет тип состояния из аргумента `initialState`
	initialState,

	//1reducers внутри имеет неск.разделов: (1action + его обработка) этим  reducers-ом
	reducers: {
		//создаем и ActionCrearor-ы, и swich-case-ы
		//Запись в Store2
		userProfile_setAccount: (state, action: PayloadAction<UserAccountType>) => {
			state.account = action.payload
		},
	},
})

// Reducer----------------
export default UserProfileSlice.reducer;

//Actions--1объект со всеми Action-ами--------------
export const { userProfile_setAccount,
	} = UserProfileSlice.actions

// Selectors-----------------
export const selectUserProfileId = (state: RootState) => state.userProfile.profileId;


// BLL-Запрос на сервер-----------------------------------------------------------------------

// export const useLatestBlogPost = () => {

// 	const dispatch = useAppDispatch()

// 	useEffect(() => {
// 		BlogPostsAPI.getLatestBlogPosts()
//       .then((data) => {
// 			dispatch(setLatest(data));
//       })
//       .catch((res) => console.error(res.status));
// 	}, [dispatch]);
// };