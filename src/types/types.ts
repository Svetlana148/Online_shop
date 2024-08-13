
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/redux-store'


//New
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()





// типизация всего BlogPost-а
export type BlogPostType = { 
	id: number
	title:  string
	description:  string
	titleImage: string
	postDate : string
	timeToRead : number
}

export type BlogPostListType = Array<BlogPostType>

//Типизация Photo
export type PhotosType= string | null
