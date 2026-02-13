import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import postReducer from '../../../entities/post/model/slice/postSlice.ts';
import commentReducer from '../../../entities/comment/model/slice/commentSlice.ts';

// RTK Query
import {userApi} from '../../../entities/user/api/userApi.ts';
import {albumApi} from "../../../entities/album/api/albumsApi.ts";
import {postsApi} from "../../../entities/post/api/postsApi.ts";
import {commentApi} from "../../../entities/comment/api/commentApi.ts";

// корневой редьюсер стора
// можно использовать просто объект
const rootReducer = combineReducers({
    post: postReducer,
    comment: commentReducer,
    [userApi.reducerPath]: userApi.reducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
})

// конфигурация стора
// так как это toolkit то вместо setupStore указываем configureStore
// так как это toolkit то нет нужды подключать devTools и middleware так как это идет из коробки
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
              .concat(userApi.middleware)
              .concat(albumApi.middleware)
              .concat(postsApi.middleware)
              .concat(commentApi.middleware)
    });
}

// тип состояния
export type RootState = ReturnType<typeof rootReducer>;

// тип самого стора
export type AppStore = ReturnType<typeof setupStore>;

// тип диспатча хранилища
export type AppDispatch = AppStore['dispatch'];