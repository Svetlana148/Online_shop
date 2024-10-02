/** Initial state for the user profile slice*/
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/redux-store'


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


export const UserProfileSlice = createSlice({
	name: 'userProfile',

	// `createSlice` will infer the state type from the `initialState` argument
	initialState,

	reducers: {
		userProfile_setAccount: (state, action: PayloadAction<UserAccountType>) => {
			state.account = action.payload
		},
	},
})

// Reducer
export default UserProfileSlice.reducer;

//Actions--1 Object with all Actions
export const { userProfile_setAccount,
	} = UserProfileSlice.actions

// Selectors
export const selectUserProfileId = (state: RootState) => state.userProfile.profileId;
