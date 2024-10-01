/** DAl (Data Access Layer)
 * Server Request Group for Shop page
*/
import { ShopCardsListType, ShopCategoryType, shopFilterPageType, ShopFilterType } from '../../features/ShopSlice';
import { APIResponseType, instance } from './api';


/** server response*/
export interface ServerShopCategoryType {
	id: string
	name: string
}

export interface ServerShopTotalCountType {
	totalCount: number
}


/** Server Request Group for Shop page*/
export const ShopAPI = {

	/** Assembles a query string*/
	_calculateQueryParamsString(shopFilter:ShopFilterType, filterPage: shopFilterPageType):string {

		let backendQuery = "";
		if(!!shopFilter.categoryId && shopFilter.categoryId.length > 0) backendQuery += "categoryId=" + shopFilter.categoryId;
		if(!!shopFilter.priceMin) backendQuery += "&priceMin=" + shopFilter.priceMin;
		if(!!shopFilter.priceMax) backendQuery += "&priceMax=" + shopFilter.priceMax;
		if(!!shopFilter.size && shopFilter.size.length > 0) backendQuery += "&size=" + shopFilter.size;
		if(!!shopFilter.extraFilter) backendQuery += "&extraFilter=" + shopFilter.extraFilter;
		if(!!shopFilter.sort) backendQuery += "&sort=" + shopFilter.sort;

		backendQuery += "&currentPage=" + filterPage.currentPage;
		backendQuery += "&pageSize=" + filterPage.pageSize;

		return backendQuery;
	},


	/** Get all CARDS with all filter restrictions*/
	getShopCardsList(shopFilter: ShopFilterType, filterPage: shopFilterPageType ):Promise<ShopCardsListType> {
		let backendQuery = this._calculateQueryParamsString(shopFilter, filterPage);
		return instance.get<ShopCardsListType>("shop/items?" + backendQuery)
			//С сервера придет : список Card-очек
			.then(res => res.data)
	},

	/** Get the total NUMBER of cards*/
	getShopItemsCount(shopFilter:ShopFilterType, filterPage: shopFilterPageType):Promise<number> {
		let backendQuery = this._calculateQueryParamsString(shopFilter, filterPage);

		return instance.get<ServerShopTotalCountType>("shop/itemsCount?" + backendQuery)
		/** a list of Cards comes from the server : */
			.then(res => res.data.totalCount)
	},		


	/** Processing likes*/
	/** Set the state "like=true". Send Click on the like on the card (set on Server: ""cardId", "userProfileId", "isLike")*/
	putCardLike(cardId:string, userProfileId:string ) {
		return instance.put<ShopCardsListType>(`blog/latest?top=4`).then(res => res.data)
	},
	/**  Delete the state "like=true".*/
	delCardLike(cardId: string, userProfileId:string) {
		return instance.delete(`like/${cardId}`).then(res => res.data) as Promise<APIResponseType>
	},


	/** Getting specific categories in the "Categories" menu ---(Sider-->menu for Categories)*/
	getShopCategoryList():Promise<ShopCategoryType[]> {
			return instance.get<ServerShopCategoryType[]>("catalog/0")
				.then(res => res.data.map( (srvCategory) => {
					const  appCategory:ShopCategoryType = {
						categoryId : srvCategory.id,
						name : srvCategory.name,
						itemCount : 0,
					}
					return appCategory;
				}  ))
	},
}
