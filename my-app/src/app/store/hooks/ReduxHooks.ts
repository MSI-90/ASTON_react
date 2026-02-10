/*Кастомные хуки для работы с Redux*/

import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../Store.ts";

// создание хуков для комфортной работы с типами
// по сути это обычный useDispatch который возвращает нам dispatch, но типизированный
export const useAppDispatch = () =>
    useDispatch<AppDispatch>();

// типизированный useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;