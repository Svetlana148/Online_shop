//Все общение с сервером *(получить get; и заset-ать(post)-то чего не было нервере; и put-изменить то что есть на сервере)
import { ShopCardsListType, ShopFilterType } from '../../features/ShopSlice';
import { APIResponseType, instance } from './api';



// Группа запросов на сервер для Shop--------------------------
export const ShopAPI = {
	//Получить все карточки по фильтру
	getShopCardsList(shopFilter:ShopFilterType):Promise<ShopCardsListType> {
		return instance.get<ShopCardsListType>(`blog/latest?top=4`).then(res => res.data)
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