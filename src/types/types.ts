//файл с общими для всех компонент  типами

import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/redux-store'


//For Store
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()


export type PhotoType= string | undefined;



