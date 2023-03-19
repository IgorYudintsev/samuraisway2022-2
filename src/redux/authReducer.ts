import { InferActionsTypes } from './redux-store';
import { authAPI } from '../api/api-DAL';
import { Dispatch } from 'redux';



let initialState = {
		id: null as number | null,
		email: null as string | null,
		login:null as string | null,
		isAuth: false,
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
		switch (action.type) {
				case 'SET-USER-DATA':
						return { ...state,  ...action.data, isAuth: true}
				default:
						return state;
		}
};

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
		setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => (
			{ type: 'SET-USER-DATA', data: {id, email, login}, isAuth } as const),

}

export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch<ActionsType>) => {
		authAPI.me()
					 .then(res => {
							 if (res.data.resultCode === 0) {
									 let { id, email, login, isAuth } = res.data.data
									 dispatch(actions.setAuthUserData(id, email, login, isAuth))
							 }
					 })
}

export default authReducer;




/*export const SET_USER_DATA = 'SET-USER-DATA';*/

