//Все общение с сервером *(получить get; и заset-ать(post)-то чего не было нервере; и put-изменить то что есть на сервере)
import { ShopCardsListType, ShopFilterType } from '../../features/ShopSlice';
import { APIResponseType, instance } from './api';



// Группа запросов на сервер для Shop--------------------------
export const ShopAPI = {
	//Получить все карточки по фильтру
	getShopCardsList(shopFilter:ShopFilterType):Promise<ShopCardsListType> {
		
		//[?categoryId][&priceMin][&priceMax][&size][&extraFilter][&sortBy]
		let backendQuery = `shop/items?`;
		if(!!shopFilter.categoryId) backendQuery += "categoryId=" + shopFilter.categoryId;
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
}