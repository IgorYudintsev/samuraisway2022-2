import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReduser';
import usersReducer from './usersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './authReducer';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';


let rootReducer = combineReducers({
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		navBar: navbarReducer,
		usersPage: usersReducer,
		auth: authReducer,

})
export type AppStateType = ReturnType<typeof rootReducer>
const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
//универсальная типизация санок - AnyAction заменить на общий тип actions????
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
export type InferActionsTypes<T> = T extends {[key:string]: (...args: any[]) => infer U} ? U : never



//@ts-ignore
window.store = store

export default store;

