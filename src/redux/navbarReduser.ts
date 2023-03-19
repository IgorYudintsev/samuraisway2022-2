import { FriendType } from '../types/types';

let initialState = {
    friends: [
        {id: '1', name: "Viktor"},
        {id: '2', name: "Sasha"},
        {id: '3', name: "Gleb"},
    ] as FriendType[],
}

type InitialStateType = typeof initialState

const navbarReducer = (state = initialState, action: any): InitialStateType => {
    return state;
};

export default navbarReducer;