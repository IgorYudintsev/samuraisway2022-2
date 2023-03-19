export type PostType = {
		id: string
		message: string
		likeCount: number
}

export type DialogType = {
		id: string
		name: string
}

export type MessageType = {
		id: string
		message: string
}

export type FriendType = {
		id: string
		name: string
}

export type ProfilePageType = {
		posts: PostType[]
		newPostText: string

}

export type DialogsPageType = {
		dialogs: DialogType[]
		messages: MessageType[]
		newMessageText: string
}

export type SideBarPageType = {
		friends: FriendType[]
}

export type StateType = {
		profilePage: ProfilePageType
		dialogsPage: DialogsPageType
		sideBarPage: SideBarPageType
}

export type AppType = {
		store: StoreType
		state: StateType
		//dispatch: (action: ActionType) => void
}

export type StoreType = {
		_state: StateType
		getState: () => StateType
		_callSubcriber: (_state: StateType) => void
		subscribe: (observer: () => void) => void
		//dispatch: (action: ActionType) => void

}


/*export type AddPostActionType = {
		type: typeof ADD_POST
}

export type UpdateNewPostActionType = {
		type: typeof UPDATE_NEW_POST_TEXT
		newText: string
}

export type AddMessageActionType = {
		type: typeof ADD_MESSAGE
}
export type UpdateNewMessageActionType = {
		type: typeof UPDATE_NEW_MESSAGE_BODY,
		text: string
}

export type ActionType = AddPostActionType | UpdateNewPostActionType | AddMessageActionType | UpdateNewMessageActionType*/

export type ContactsType = {
		facebook: string
		website: string | null
		vk: string
		twitter: string
		instagram: string
		youtube: string | null
		github: string
		mainLink: string | null
}

export type PhotosType = {
		small: string | undefined
		large: string | undefined
}

export type ProfileType = {
		aboutMe: string
		userId: any
		lookingForAJob: true
		lookingForAJobDescription: string
		fullName: string
		contacts: ContactsType
		photos: PhotosType
}

export type UserType = {
		id: number
		name: string
		uniqueUrlName: null
		photos: PhotosType
		status: string
		followed: boolean
}

