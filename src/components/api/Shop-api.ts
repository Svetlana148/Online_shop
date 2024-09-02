//Это DAl (Data Access Layer) - уровень. 
//Все общение с сервером *(получить get; и за-set-ать(post)-то чего не было нервере; и put-изменить то что есть на сервере)
import { FilterSizeType, ShopCardsListType, ShopCategoryType, shopFilterPageType, ShopFilterType } from '../../features/ShopSlice';
import { APIResponseType, instance } from './api';


//Что приходит с Server-а---------------------------------------------------------

export interface ServerShopCategoryType {
	id: string
	name: string
}

export interface ServerShopTotalCountType {
	totalCount: number
}



// Группа запросов на сервер для Shop----------------------------------------------
export const ShopAPI = {

	//Собирает строку запроса
	_calculateQueryParamsString(shopFilter:ShopFilterType, filterPage: shopFilterPageType):string {

		//Filters
		//[?categoryId][&priceMin][&priceMax][&size][&extraFilter][&sortBy]
		let backendQuery = "";
		if(!!shopFilter.categoryId && shopFilter.categoryId.length > 0) backendQuery += "categoryId=" + shopFilter.categoryId;
		if(!!shopFilter.priceMin) backendQuery += "&priceMin=" + shopFilter.priceMin;
		if(!!shopFilter.priceMax) backendQuery += "&priceMax=" + shopFilter.priceMax;
		if(!!shopFilter.size && shopFilter.size.length > 0) backendQuery += "&size=" + shopFilter.size;
		if(!!shopFilter.extraFilter) backendQuery += "&extraFilter=" + shopFilter.extraFilter;
		if(!!shopFilter.sort) backendQuery += "&sort=" + shopFilter.sort;

		let itemsCount = `shop/itemsitemsCount?`;
		backendQuery += "&itemsCount=" + filterPage.itemsCount;
		backendQuery += "&currentPage=" + filterPage.currentPage;
		backendQuery += "&pageSize=" + filterPage.pageSize;

		return backendQuery;
	},



	//Получить все КАРТОЧКИ со всеми фильтровыми ограничениями--------------------
	getShopCardsList(shopFilter: ShopFilterType, filterPage: shopFilterPageType ):Promise<ShopCardsListType> {
		let backendQuery = this._calculateQueryParamsString(shopFilter, filterPage);
		return instance.get<ShopCardsListType>("shop/items?" + backendQuery)
			//С сервера придет : список Card-очек
			.then(res => res.data)
	},

	//Получить общее КОЛИЧЕСТВО карточек --------------------
	getShopItemsCount(shopFilter:ShopFilterType, filterPage: shopFilterPageType):Promise<number> {
		let backendQuery = this._calculateQueryParamsString(shopFilter, filterPage);

		return instance.get<ServerShopTotalCountType>("shop/itemsCount?" + backendQuery)
			//С сервера придет : список Card-очек
			.then(res => res.data.totalCount)
	},		



	//Обработка like-ов-----------------------------------------------------------------------------
	//Поставить состояние like=true. Отправить Click по like-у на карточке  (set-аем на Server : cardId  userProfileId  isLike)
	putCardLike(cardId:string, userProfileId:string ) {
		return instance.put<ShopCardsListType>(`blog/latest?top=4`).then(res => res.data)
	},
	//Убрать состояние like=true
	delCardLike(cardId: string, userProfileId:string) {
		return instance.delete(`like/${cardId}`).then(res => res.data) as Promise<APIResponseType>
	},
	//----------------------------------



	//Получение конкретных категорий в меню "Categories" ------(Sider-->menu для Categories)--------------------------------------------------
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
