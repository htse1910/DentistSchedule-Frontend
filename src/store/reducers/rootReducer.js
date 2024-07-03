import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import appReducer from "./appReducer";
import userReducer from "./userReducer";
import adminReducer from './adminReducer';

// Cấu hình persist cho userReducer
const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
    ...persistCommonConfig,
    key: 'user',
    whitelist: ['isLoggedIn', 'userInfo'] // Chỉ persist các thuộc tính này
};

// Cấu hình persist cho appReducer
const appPersistConfig = {
    ...persistCommonConfig,
    key: 'app',
    whitelist: ['language'] // Chỉ persist thuộc tính này
};

// Tạo persistReducer cho userReducer
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export default (history) => combineReducers({
    router: connectRouter(history),
    user: persistedUserReducer, // Áp dụng persistReducer cho userReducer
    app: appReducer, // Không áp dụng persistReducer cho appReducer
    admin: adminReducer
});
