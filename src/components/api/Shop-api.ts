//Запросы  на сервер на ShopCardsList
import { ShopCardsListType, ShopFilterType } from '../../features/ShopSlice';
import { instance } from './api';



// Группа запросов на сервер для Shop--------------------------
export const ShopAPI = {
	getShopCardsList(shopFilter:ShopFilterType):Promise<ShopCardsListType> {
		return instance.get<ShopCardsListType>(`blog/latest?top=4`).then(res => res.data)
	},
}
