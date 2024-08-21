import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/redux-store'
import { PhotoType, useAppDispatch, useAppSelector } from '../types/types';
import { useEffect, useState } from 'react';
import { BlogPostsAPI } from '../components/api/BlogPosts-api';




// SLICE------------------------------------------------------------------------

//Типизируем initialState
// Define a type for the slice state


//---Main----initialState-->>shopFilter-&-shopCards----------------------------
interface initialStateType {
	shopFilter: ShopFilterType,
	shopCardsList: ShopCardsListType,
}
	//-->>shopFilter
export interface ShopFilterType {
	categoryId: string
	size: FilterSizeType
	priceMin: number
	priceMax: number
	sort: FilterSortType
	extraFilter: FilterExtraFilterType
}
export type FilterSizeType = "small"|"medium"|"large"
export type FilterSortType = "default"|"low"|"max"
export type FilterExtraFilterType = "all"|"new"|"sale"


	// -->>shopCards  :  shopCardsList --> shopCard
export type ShopCardsListType = Array<ShopCardType>
interface ShopCardType {
	id: number
	photo:  PhotoType
	title: string
	price: number
	salePrice: number|null
	salePercent: number|null
	like: boolean
	inBasket: boolean
}

//Конкретный заяц
const initialState: initialStateType  = {
	shopFilter: {
		categoryId: "1",
		size: "small",
		priceMin: 100,
		priceMax: 1500,
		sort: "default",
		extraFilter: "all",
	},

	shopCardsList: [
		{id: 1,
		photo:  "https://stistore001.blob.core.windows.net/res/img/0213100222-Hibiscus-weiss-mit-Topf-Dallas-anthrazit-2er-Set.webp",
		title: "Barberton Daisy",
		price: 119,
		salePrice: null,
		salePercent:null,
		like: false,
		inBasket: false,},

		{id: 2,
		photo:  "https://stistore001.blob.core.windows.net/res/img/0213100222-Hibiscus-weiss-mit-Topf-Dallas-anthrazit-2er-Set.webp",
		title: "Daisy",
		price: 119,
		salePrice: null,
		salePercent:null,
		like: false,
		inBasket: false,}
	],
}


//----------------------------





export const shopSlice = createSlice({
	name: 'shop',

  // `createSlice` will infer the state type from the `initialState` argument
	//`createSlice` выведет тип состояния из аргумента `initialState`
	initialState,

	//1reducers внутри имеет неск.разделов: (1action + его обработка) этим  reducers-ом
	reducers: {
		//создаем и ActionCrearor-ы, и swich-case-ы
		//Запись в Store2
		setShopCardsList: (state, action: PayloadAction<ShopCardsListType>) => {
			state.shopCardsList = action.payload
		},

		//Для Filtr-ов
		setFilterCategoryId: (state, action: PayloadAction<string>) => {
			state.shopFilter.categoryId = action.payload
		},
		setFilterSize: (state, action: PayloadAction<FilterSizeType>) => {
			state.shopFilter.size = action.payload
		},
		setFilterPriceMin: (state, action: PayloadAction<number>) => {
			state.shopFilter.priceMin = action.payload
		},
		setFilterPriceMax: (state, action: PayloadAction<number>) => {
			state.shopFilter.priceMax = action.payload
		},
		setFilterSort: (state, action: PayloadAction<FilterSortType>) => {
			state.shopFilter.sort = action.payload
		},
		setFilterExtraFilter: (state, action: PayloadAction<FilterExtraFilterType>) => {
			state.shopFilter.extraFilter = action.payload
		},
	},
})

// Reducer----------------
export default shopSlice.reducer;

//Actions--1объект со всеми Action-ами--------------
export const { setShopCardsList,  
					setFilterCategoryId, 
					setFilterSize,
					setFilterPriceMin,
					setFilterPriceMax,
					setFilterSort,
					setFilterExtraFilter} = shopSlice.actions

// Selectors-----------------
export const selectShopCardsList = (state: RootState) => state.shop.shopCardsList;
export const selectFilterCategoryId = (state: RootState) => state.shop.shopFilter.categoryId;
export const selectFilterSize = (state: RootState) => state.shop.shopFilter.size;
export const selectFilterPriceMin = (state: RootState) => state.shop.shopFilter.priceMin;
export const selectFilterPriceMax = (state: RootState) => state.shop.shopFilter.priceMax;
export const selectFilterSort = (state: RootState) => state.shop.shopFilter.sort;
export const selectFilterExtraFilter = (state: RootState) => state.shop.shopFilter.extraFilter;

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