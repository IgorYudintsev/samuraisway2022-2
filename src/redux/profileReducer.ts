import { PostType, ProfileType } from '../types/types';
import { v1 } from 'uuid';
import { InferActionsTypes } from './redux-store';
import { profileAPI, usersAPI } from '../api/api-DAL';
import { Dispatch } from 'redux';
import photo from './../assets/person/1.jpeg'


let initialState = {
		posts: [
				{ id: '1', message: 'Hi, how are you?', likeCount: 15 },
				{ id: '2', message: 'Hi!', likeCount: 11 },
				{ id: '3', message: 'Hi, how are you?', likeCount: 0 },
		] as Array<PostType>,
		newPostText: 'it' as string,
		profile: {
				userId: 27598,
				lookingForAJob: true,
				photos:
					{
							small: photo
					}
		} as ProfileType | null,
		status: 'Hello guys🤩🚀' as string,

}

export type InitialStateType = typeof initialState;

const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
		switch (action.type) {
				case 'ADD-POST':
						let newPost: { id: string, message: string, likeCount: number } = {
								id: v1(), message: state.newPostText, likeCount: 0,
						};
						return { ...state, newPostText: '', posts: [...state.posts, newPost] }
				case 'UPDATE-NEW-POST-TEXT':
						return { ...state, newPostText: action.newText };
				case 'SET-USER-PROFILE':
						return { ...state, profile: action.profile }
				case 'SET-STATUS':
						return { ...state, status: action.status }
				default:
						return state;
		}
};

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
		addPostActionCreator: () => ({ type: 'ADD-POST' } as const),
		updateNewPostTextActionCreator: (text: string) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text } as const),
		setUserProfile: (profile: ProfileType) => ({ type: 'SET-USER-PROFILE', profile } as const),
		setStatus: (status: string) => ({ type: 'SET-STATUS', status } as const),
}


// можно добавить универсальную типизацию санок
export const getUserProfileThunkCreator = (userId: any) => (dispatch: Dispatch<ActionsType>) => {
		profileAPI.getProfile(userId)
						.then(response => {
								if (response.status === 200) {
										dispatch(actions.setUserProfile(response.data))
								} else {
										throw Error('Connection error')
								}

						})
}

export const setStatusThunkCreator = (userId: any) => (dispatch: Dispatch<ActionsType>) => {
		profileAPI.getStatus(userId)
							.then(response => {
									console.log(response)

									dispatch(actions.setStatus(response.data))
							})
}

export const updateStatusThunkCreator = (status: string) => (dispatch: Dispatch<ActionsType>) => {
		profileAPI.updateStatus(status)
							.then(response => {
									if (response.data.resultCode === 0) {
											dispatch(actions.setStatus(status))
									}
							})
}


export default profileReducer;


/*export const ADD_POST = 'ADD-POST';
 export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
 export const SET_USER_PROFILE = 'SET-USER-PROFILE'*/


/*export type AddPostActionType = {
 type: typeof ADD_POST

 }
 export const addPostActionCreator = (): AddPostActionType => ({ type: ADD_POST });

 export type UpdateNewPostActionType = {
 type: typeof UPDATE_NEW_POST_TEXT
 newText: string
 }

 export const updataNewPostTextActionCreator = (text: string): UpdateNewPostActionType => ({
 type: UPDATE_NEW_POST_TEXT, newText: text,
 });*/