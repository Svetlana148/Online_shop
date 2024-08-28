//Это DAl (Data Access Layer) - уровень. 
//Здесь все ЗАПРОСЫ НА СЕРВЕР-----------------------------------------
//current user support--------------------------------------- 
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BlogPostListType } from '../../features/BlogPostsSlice';


//  Шаблон запроса на сервер (далее везде он используется при др. запросах)--------------------------
export const instance = axios.create({
	// чтобы прилипла Coocke
	withCredentials: false,
	headers: { "Ocp-Apim-Subscription-Key": "87b20050038641e6b75c15e3f8934838" },
	baseURL: `https://apim-istore.azure-api.net/`,
});

//Типы--------------------------------------------------------------
//Тип "enum" для перечисления серверных кодов 
// export enum ResultCodesEnum {  
// 	Success = 0,
// 	Error = 1,
// }

// export enum ResultCodesCaptchaEnum {
// 	CaptchaIsRequired = 10
// }

//Общий тип для получения массива данных GNERIC
export type GetItemsType = {
	items: Array<BlogPostListType>
	// totalCount: number
	// error: string | null
}


export enum ResultCodesEnum {  //Тип "enum" для перечисления серверных кодов 
	Success = 0,
	Error = 1,
}
//Делаем общий Тип-Generic для всех "Response"...................
export type APIResponseType<D = {}, RC = ResultCodesEnum> = { //D={}- по умолчанию пустой  RC=ResultCodesEnum- по умолчанию"ResultCodesEnum"
	data: D            // Тип для объекта data: разное
	resultCode: RC     //Тип "enum" для перечисления серверных кодов(здесь применяем)
	messages: Array<string>
}
