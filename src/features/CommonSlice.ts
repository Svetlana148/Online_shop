import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/redux-store'
import { useEffect, useState } from 'react';

// SLICE------------------------------------------------------------------------


//Main----initialState-->BlogPostList-->BlogPost-----------------------------

//Типизируем initialState
// Define a type for the slice state
interface initialStateType {
	appHeaderActiveLink: string
}

// ------------------------------------------------------------------------


// Define the initial state using that type
//Конкретный заяц
const initialState: initialStateType = {
	appHeaderActiveLink: "1",
}





export const CommonSlice = createSlice({
	name: 'commonSlice',
  // `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setAppHeaderActiveLink: (state, action: PayloadAction<string>) => {
      state.appHeaderActiveLink = action.payload
		},
	},
})

//Actions----------------
export const { setAppHeaderActiveLink } = CommonSlice.actions

// Selectors-----------------
export const selectAppHeaderActiveLink = (state: RootState) => state.common.appHeaderActiveLink;

//1 Reducer
export default CommonSlice.reducer;



