import { UserType } from '../types/types';
import { InferActionsTypes } from './redux-store';
import { usersAPI } from '../api/api-DAL';
import { Dispatch } from 'redux';


let initialState = {
		users: [] as Array<UserType>,
		pageSize: 10,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: true,
		isFollowing: [] as Array<number>, // array of users
}

export type InitialStateType = typeof initialState;

const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
		switch (action.type) {
				case 'FOLLOW':
						return { ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u) }
				case 'UNFOLLOW':
						return { ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u) }
				case 'SET-USERS':
						return { ...state, users: action.users }
				case 'SET-CURRENT-PAGE':
						return { ...state, currentPage: action.currentPage }
				case 'SET-TOTAL-USERS-COUNT':
						return { ...state, totalUsersCount: action.totalUsersCount }
				case 'TOGGLE_IS_FETCHING':
						return { ...state, isFetching: action.isFetching }
				case 'TOGGLE_IS_FOLLOWING':
						return {
								...state,
								isFollowing: action.isFetching
									? [...state.isFollowing, action.id]
									: state.isFollowing.filter(id => id !== action.id),
						}
				default:
						return state;
		}
};

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
		follow: (userId: number) => ({ type: 'FOLLOW', userId } as const),
		unFollow: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
		setUsers: (users: UserType[]) => ({ type: 'SET-USERS', users } as const),
		setCurrentPage: (currentPage: number) => ({ type: 'SET-CURRENT-PAGE', currentPage } as const),
		setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SET-TOTAL-USERS-COUNT', totalUsersCount } as const),
		toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
		toggleIsFollowing: (isFetching: boolean, id: number) => ({ type: 'TOGGLE_IS_FOLLOWING', isFetching, id } as const),

}

export const gerUsersThunkCreator = (currentPage: number, pageSize: number) => {
		return (dispatch: Dispatch<ActionsType>) => {

				dispatch(actions.toggleIsFetching(true))
				dispatch(actions.setCurrentPage(currentPage))

				usersAPI.getUsers(currentPage, pageSize).then(data => {

						dispatch(actions.toggleIsFetching(false))
						dispatch(actions.setUsers(data.items))
						dispatch(actions.setTotalUsersCount(data.totalCount))
				})
		}
}

export const followThunkCreator = (id: number) => {
		return (dispatch: Dispatch<ActionsType>) => {

				dispatch(actions.toggleIsFollowing(true, id))

				usersAPI.getFollow(id).then(data => {
						if (data.resultCode === 1) {dispatch(actions.follow(id))}
						dispatch(actions.toggleIsFollowing(false, id))


				})
		}
}

export const unFollowThunkCreator = (id: number) => {
		return (dispatch: Dispatch<ActionsType>) => {

				dispatch(actions.toggleIsFollowing(true, id))

				usersAPI.getUnFollow(id).then(data => {
						if (data.resultCode === 1) {dispatch(actions.unFollow(id))}
						dispatch(actions.toggleIsFollowing(false, id))
				})
		}
}



export default usersReducer;


/*
 export type followACType = {
 type: typeof FOLLOW
 userId: string
 }

 export type unFollowACType = {
 type: typeof UNFOLLOW
 userId: string
 }

 export type setUsersACType = {
 type: typeof SET_USERS
 users: UserType[]
 }
 export const followAC = (userId: string): followACType => ({ type: FOLLOW, userId });
 export const unFollowAC = (userId: string): unFollowACType => ({ type: UNFOLLOW, userId });
 export const setUsersAC = (users: UserType[]): setUsersACType => ({ type: SET_USERS, users });*/


/*
 export const FOLLOW = 'FOLLOW';
 export const UNFOLLOW = 'UNFOLLOW';
 export const SET_USERS = 'SET-USERS';
 export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
 export const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
 export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
 export const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'
 */


/*
 let initialState = {
 users: [
 /!*{ id: '1', img: "assets/person/2.jpeg", followed: true, name: 'Viktor', location: {country: 'Poland', city: 'Warsaw'}, status: "I am a boss" },
 { id: '2', img: "assets/person/1.jpeg", followed: true, name: 'Sasha', location: {country: 'Russia', city: 'Moscow'}, status: "I am looking for a job" },
 { id: '3', img: "assets/person/3.jpeg", followed: false, name: 'Susanna', location: {country: 'Ukraine', city: 'Kiev'}, status: "I am getting new knowledge" },
 { id: '4', img: "assets/person/4.jpeg", followed: false, name: 'Maria', location: {country: 'UK', city: 'London'}, status: "I am doing my homework" }
 *!/
 ] as Array<UserType>,
 pageSize: 10,
 totalUsersCount: 0,
 currentPage: 1,
 isFetching: true,
 isFollowing: [] as Array<number>, // array of users

 }*/
