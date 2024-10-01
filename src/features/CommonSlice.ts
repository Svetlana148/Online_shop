/** Slice for common application properties */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/redux-store'


//Main----initialState-->BlogPostList-->BlogPost-----------------------------

// Define a type for the slice state
interface initialStateType {
	appHeaderActiveLink: string
}

// Define the initial state using that type
const initialState: initialStateType = {
	appHeaderActiveLink: "1",
}


/**
 * Slice for common application properties
 * 
 * @component
 * 
 * @param {Object} state - The current state of the slice.
 * @param {PayloadAction<string>} action - The action dispatched to the slice.
 * 
 * @returns {void}
 */

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

//Actions
export const { setAppHeaderActiveLink } = CommonSlice.actions

// Selectors
export const selectAppHeaderActiveLink = (state: RootState) => state.common.appHeaderActiveLink;

//1 Reducer
export default CommonSlice.reducer;



