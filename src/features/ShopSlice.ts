/** Slice for managing the shop state*/
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/redux-store'
import { PhotoType, useAppDispatch, useAppSelector } from '../types/types';
import { useEffect } from 'react';
import { selectUserProfileId } from './UserProfileSlice';
import { useSelector } from 'react-redux';
import { ShopAPI } from '../components/api/Shop-api';


// Define a type for the slice state
interface initialStateType {
	shopFilter: ShopFilterType,
	shopCardsList: ShopCardsListType,
	shopCategoryList: ShopCategoryListType,
}
//shopFilter
export interface ShopFilterType {
	categoryId: Array<string>
	size: Array<FilterSizeType>
	priceMin: number
	priceMax: number
	extraFilter: FilterExtraFilterType
	sort: FilterSortType
}
export type FilterSizeType = "small" | "medium" | "large" | ""
export type FilterExtraFilterType = "all" | "new" | "sale"
export type FilterSortType = "default" | "low" | "max"


//-------initialState-->>shopFilter-&-shopCards-----Paginator----------------------------
interface initialStateType {
	shopFilter: ShopFilterType,
	shopCardsList: ShopCardsListType,
	shopCategoryList: ShopCategoryListType,
	shopFilterPage: shopFilterPageType,
}


//---Paginator----
export type shopFilterPageType = 	{
	currentPage: number
	pageSize: number
	itemsCount: number
}

// -->>shopCards  :  shopCardsList --> shopCard
export type ShopCardsListType = Array<ShopCardType>
export interface ShopCardType {
	cardId: string
	photo: PhotoType
	title: string
	price: number
	salePrice: number | null
	salePercent: number | null
	isLike: boolean
	
	inBasket: boolean
}

//Type for  Payload
type ShopCardLikeType={
	cardId: string
	isLike: boolean
}

//shopCategory
export interface ShopCategoryType {
	categoryId: string
	name: string
	itemCount: number
}
export type ShopCategoryListType = ShopCategoryType[]


const initialState: initialStateType = {
	shopFilter: {
		categoryId: [],
		size: [],
		priceMin: 0,
		priceMax: 1500,
		extraFilter:"all" ,
		sort: "default",
	},

	shopCardsList: [
		{
			cardId: "1",
			photo: "https://stistore001.blob.core.windows.net/res/img/0213100222-Hibiscus-weiss-mit-Topf-Dallas-anthrazit-2er-Set.webp",
			title: "Barberton Daisy",
			price: 119,
			salePrice: null,
			salePercent: null,
			isLike: false,
			inBasket: false,
		},

		{
			cardId: "2",
			photo: "https://stistore001.blob.core.windows.net/res/img/0213100222-Hibiscus-weiss-mit-Topf-Dallas-anthrazit-2er-Set.webp",
			title: "Daisy",
			price: 119,
			salePrice: null,
			salePercent: null,
			isLike: false,
			inBasket: false,
		}
	],
	shopCategoryList: [
		{
			categoryId: "1",
			name: "House Plants",
			itemCount: 1,
		},
		{
			categoryId: "2",
			name: "Potter Plants",
			itemCount: 2,
		},
	],
	shopFilterPage:{
		currentPage: 1,
		pageSize: 9,
		itemsCount: 15,
	},
}


export const ShopSlice = createSlice({
	name: 'shop',

	// `createSlice` will infer the state type from the `initialState` argument
	initialState,

	reducers: {

		shop_setShopCardsList: (state, action: PayloadAction<ShopCardsListType>) => {
			state.shopCardsList = action.payload
		},
		shop_setCategoryList	: (state, action: PayloadAction<ShopCategoryListType>) => {
			state.shopCategoryList = action.payload
		},

		//For Filters
		shop_setFilterCategoryId: (state, action: PayloadAction<string[]>) => {
			state.shopFilter.categoryId = action.payload
		},
		shop_setFilterSize: (state, action: PayloadAction<FilterSizeType[]>) => {
			state.shopFilter.size = action.payload
		},
		shop_setFilterPriceMin: (state, action: PayloadAction<number>) => {
			state.shopFilter.priceMin = action.payload
		},
		shop_setFilterPriceMax: (state, action: PayloadAction<number>) => {
			state.shopFilter.priceMax = action.payload
		},
		shop_setFilterSort: (state, action: PayloadAction<FilterSortType>) => {
			state.shopFilter.sort = action.payload
		},
		shop_setFilterExtraFilter: (state, action: PayloadAction<FilterExtraFilterType>) => {
			state.shopFilter.extraFilter = action.payload
		},
		shop_clickShopCardLike: (state, action: PayloadAction<string>) => {
			ClickCardLike(action.payload);
		},
		shop_setShopCardLike: (state, action: PayloadAction<ShopCardLikeType >) => {
			state.shopCardsList.forEach(card => {
				if (card.cardId===action.payload.cardId) card.isLike=action.payload.isLike;
			});
		},


		//for Paginator
		// set in Store :
			//total number of cards
		shop_setShopItemsCount: (state, action: PayloadAction<number>) => {
			state.shopFilterPage.itemsCount = action.payload
		},
			//currentPage
		shop_setShopCurrentPage: (state, action: PayloadAction<number>) => {
		state.shopFilterPage.currentPage = action.payload
		},
			//pageSize
		shop_setShopPageSize: (state, action: PayloadAction<number>) => {
			state.shopFilterPage.pageSize = action.payload
		},
	},
})

// Reducer
export default ShopSlice.reducer;


//Actions
export const { 
	shop_setShopCardsList,

	shop_setFilterCategoryId,
	shop_setFilterSize,
	shop_setFilterPriceMin,
	shop_setFilterPriceMax,
	shop_setFilterSort,
	shop_setFilterExtraFilter,

	shop_clickShopCardLike,
	shop_setShopCardLike, 
	shop_setCategoryList,

	shop_setShopItemsCount,
	shop_setShopCurrentPage,
	shop_setShopPageSize,
} = ShopSlice.actions
	

// Selectors-----------------
export const selectShopCardsList = (state: RootState) => state.shop.shopCardsList;
export const selectShopCategoryList = (state: RootState) => state.shop.shopCategoryList;

export const selectFilterCategoryId = (state: RootState) => state.shop.shopFilter.categoryId;
export const selectFilterSize = (state: RootState) => state.shop.shopFilter.size;
export const selectFilterPriceMin = (state: RootState) => state.shop.shopFilter.priceMin;
export const selectFilterPriceMax = (state: RootState) => state.shop.shopFilter.priceMax;
export const selectFilterSort = (state: RootState) => state.shop.shopFilter.sort;
export const selectFilterExtraFilter = (state: RootState) => state.shop.shopFilter.extraFilter;
export const selectFilters = (state: RootState) => state.shop.shopFilter;

export const selectFilterPage = (state: RootState) => state.shop.shopFilterPage;


// BLL
// 1. Call request to the server (from "Shop-api.ts")--on ShopCardList--(filtered cards)------------------------------
export const ShopCardsList = () => {
	let filters = useAppSelector(selectFilters);
	let filterPage = useAppSelector(selectFilterPage);

	
	const dispatch = useAppDispatch();


	useEffect(() => {
		let fetchData = async () => {
			let res = await ShopAPI.getShopCardsList(filters, filterPage)
			dispatch(shop_setShopCardsList(res));
	  }
		fetchData();
	}, [dispatch, filters, filterPage]);
};


// 2. Call request to the server (from "Shop-api.ts")---on CardLike--------------------------------
export const ClickCardLike=(cardId:string)=>{

	const dispatch = useAppDispatch();

	//This is *Argument for dispatch(Action (*))  (* - Object-instance of type ShopCardLikeType)
	const shopCardLike: ShopCardLikeType = {
		cardId: cardId,
		isLike: false,
	};

	//Get ProfileId
	const userProfileId = useSelector(selectUserProfileId);
	let isLike: boolean = false;

	//Processing Likes-------------------------------------------------
	//forEach-view all
	const cardList = useSelector(selectShopCardsList);

	cardList.forEach(card => {
		if (card.cardId===cardId) {
			isLike=card.isLike;
			isLike=!isLike;
			if (isLike) ShopAPI.delCardLike(cardId, userProfileId)
				else ShopAPI.putCardLike(cardId, userProfileId );	

			shopCardLike.isLike=isLike;
			dispatch(shop_setShopCardLike(shopCardLike));
		};
	});
};


// 3. Call request to the server (from "Shop-api.ts")---on specific categories in the "Categories" menu--------------------------------

export const useShopCategoryList = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		let fetchData = async () => {
			let res = await ShopAPI.getShopCategoryList() 
			dispatch(shop_setCategoryList(res));
	  }
		fetchData();
	}, [dispatch]);
};


// 4. Call request to the server (from "Shop-api.ts")--on the total number of cards--------------------------------
export const ShopItemsCount = () => {
	let filters = useAppSelector(selectFilters);
	let filterPage = useAppSelector(selectFilterPage);
	const dispatch = useAppDispatch()

	useEffect(() => {
		let fetchData = async () => {
			let res = await ShopAPI.getShopItemsCount(filters, filterPage)
			dispatch(shop_setShopItemsCount(res));
		}
		fetchData();
	  }, [dispatch, filters, filterPage]);
};
