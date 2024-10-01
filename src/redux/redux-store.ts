import { configureStore, Tuple } from '@reduxjs/toolkit'
import { Action, combineReducers} from 'redux'; 
import {thunk, ThunkAction, ThunkDispatch } from 'redux-thunk'; 

import authReducer from './auth-reducer'
import blogPostsReducer from '../features/BlogPostsSlice'
import shopReducer from '../features/ShopSlice'
import userProfileReducer from '../features/UserProfileSlice'
import commonSliceReducer from '../features/CommonSlice'




//import blogPostsReducer from './BlogPosts-reducer';










// let rootReducer = combineReducers({
// 	blogPostData : blogPostsReducer,
// });
// type RootReducerType = typeof rootReducer; 				
// typeof положит В RootReducerType типизированные подпункты(profilePage, ...) глобальногоState-а(AppState)
//export type AppStateType = ReturnType<RootReducerType> 
//ReturnType Определит что лежит в <RootReducerType> и вернет его в AppStateType







// Общий ТИП  "InferActionsTypes" для всех reducer-ов ----------------------------------------------
// "T extends(...)" - Если Т это "(...)"
//type PropertiesTypes<T> = T extends {[key:string]: infer U} ? U : never // "infer" - определяет тип "U" - AC-тора 



/**
 * InferТипизирует все "actions". Возвращает все то, что ф-ции_Из_аctions возвращают в {} с типамиЭтихВозвратов
*/
//export type InferActionsTypes<T extends {[key:string]: (...args: any[])=>any}> = ReturnType<PropertiesTypes<T>> //"<T extends..." - ограничение для передаваемого "Т"




//Типизируем ThunkCreator-ы ------------------------------------------------------------------------------------------------
//Общий тип "BaseThunkType" для всех  ThunkCreator-ов ------------------------------------------------------------------------------------------------


//A - ActionsTypes - Action-ы, которые можно  dispatch-ить из thunk-и (A extends Action это Action-ы из Redux-а)
//R - что ф-ция возвращает (Promise<void> - по умолчанию - ничего)
//AppStateType - весь State
//unknown - extra параметры
//ThunkAction - ф-ция из "redux-thunk"
//export type BaseThunkType<A extends Action, R =Promise<void>> = ThunkAction<R, AppStateType, unknown, A>





const store = configureStore({
	reducer: {
		//auth: authReducer,
		blogPosts: blogPostsReducer,
		shop: shopReducer,
		userProfile: userProfileReducer,
		common: commonSliceReducer,
	}
});
export default store;


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch