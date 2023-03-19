import { InferActionsTypes } from './redux-store';

export type DialogType = {
		id: string
		name: string
}

export type MessageType = {
		id: string
		message: string
}

let initialState = {
		dialogs: [
				{ id: '1', name: 'Sveta' },
				{ id: '2', name: 'Viktor' },
				{ id: '3', name: 'Vadim' },
				{ id: '4', name: 'Andrey' },
				{ id: '5', name: 'Gleb' },
				{ id: '6', name: 'Sasha' },
		] as Array<DialogType>,
		messages: [
				{ id: '1', message: 'Hello  😀' },
				{ id: '2', message: 'Hi 🥳' },
				{ id: '3', message: 'How are you? 🧑‍🚀' },
				{ id: '4', message: 'Yo 🤩' },
				{ id: '5', message: 'Sound great! 😉' },
				{ id: '6', message: 'That\'s right! 💯' },
		] as Array<MessageType>,
		newMessageText: '' as string,
}

export type InitialStateType = typeof initialState;

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
		switch (action.type) {
				case 'ADD_MESSAGE':
						let newPost: { id: string, message: string } = { id: '7', message: state.newMessageText };
						return { ...state, newMessageText: ' ', messages: [...state.messages, newPost] };
				case 'UPDATE_NEW_MESSAGE_BODY':
						return { ...state, newMessageText: action.text};
				default:
						return state;
		}
};

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
		sendMessageActionCreator: () => ({ type: 'ADD_MESSAGE' } as const),
		updateNewMessageActionCreator: (text: string) => ({
				type: 'UPDATE_NEW_MESSAGE_BODY',
				text: text,
		} as const),
}

export default dialogsReducer;




/*export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';*/















/*export type AddMessageActionType = {
 type: typeof ADD_MESSAGE
 }

 export const sendMessageActionCreator = (): AddMessageActionType => ({ type: ADD_MESSAGE });

 export type UpdateNewMessageActionType = {
 type: typeof UPDATE_NEW_MESSAGE_BODY,
 text: string
 }

 export const updateNewMessageActionCreator = (text: string): UpdateNewMessageActionType => ({
 type: UPDATE_NEW_MESSAGE_BODY,
 text: text,
 });*/

/*export const actions = {
 sendMessage: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody} as const)
 }*/



