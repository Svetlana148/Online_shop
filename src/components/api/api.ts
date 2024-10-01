/** DAl (Data Access Layer)
 * Here are the REQUESTS TO THE SERVER
*/
import axios from 'axios';
import { BlogPostListType } from '../../features/BlogPostsSlice';


/** Template for a request to the server (hereinafter it is used everywhere for other requests) */

export const instance = axios.create({
	/** for cookie*/
	withCredentials: false,
	headers: { "Ocp-Apim-Subscription-Key": "87b20050038641e6b75c15e3f8934838" },
	baseURL: `https://apim-istore.azure-api.net/`,
});

/** General type for getting array of data GENERIC*/
export type GetItemsType = {
	items: Array<BlogPostListType>
	// totalCount: number
	// error: string | null
}

/** Type "enum" for listing server codes*/
export enum ResultCodesEnum {  
	Success = 0,
	Error = 1,
}
/**  a common Generic Type for all "Response"*/
/** D={}- default empty 
 * RC=ResultCodesEnum- default "ResultCodesEnum"
 * Type for data object: different
*/
export type APIResponseType<D = {}, RC = ResultCodesEnum> = { 
	data: D            
	resultCode: RC     
	messages: Array<string>
}
