//Это DAl (Data Access Layer) - уровень. 
//Все общение с сервером *(получить get; и за-set-ать(post)-то чего не было нервере; и put-изменить то что есть на сервере)
import { FilterSizeType, ShopCardsListType, ShopCategoryType, ShopFilterType } from '../../features/ShopSlice';
import { APIResponseType, instance } from './api';


//Что приходит с Server-а---------------------------------------------------------

export interface ServerShopCategoryType {
	id: string
	name: string
}





// Группа запросов на сервер для Shop----------------------------------------------
export const ShopAPI = {
	//Получить все карточки со всеми фильтровыми ограничениями--------------------
	getShopCardsList(shopFilter:ShopFilterType):Promise<ShopCardsListType> {
		
		//[?categoryId][&priceMin][&priceMax][&size][&extraFilter][&sortBy]
		let backendQuery = `shop/items?`;
		if(!!shopFilter.categoryId && shopFilter.categoryId.length > 0) backendQuery += "categoryId=" + shopFilter.categoryId;
		if(!!shopFilter.priceMin) backendQuery += "&priceMin=" + shopFilter.priceMin;
		if(!!shopFilter.priceMax) backendQuery += "&priceMax=" + shopFilter.priceMax;
		if(!!shopFilter.size) backendQuery += "&size=" + shopFilter.size;
		if(!!shopFilter.extraFilter) backendQuery += "&extraFilter=" + shopFilter.extraFilter;
		if(!!shopFilter.sort) backendQuery += "&sort=" + shopFilter.sort;

		return instance.get<ShopCardsListType>(backendQuery)
			//На сервер уйдет :   shop/items?categoryId=5
			//С сервера придет : список Card-очек
			.then(res => res.data)
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
