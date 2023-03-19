import React from 'react'
import MyPosts from './MyPosts';
import { AppStateType } from '../../../redux/redux-store';
import { connect } from 'react-redux';
import { PostType } from '../../../types/types';
import { actions } from '../../../redux/profileReducer';

type mapStateToPropsType = {
		posts: PostType[]
		newPostText: string
}

type mapDispatchToPropsType = {
		addPost: () => void
		updateNewPostText: (text: string) => void
}

export type ProfilePageMapType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
		return {
				posts: state.profilePage.posts,
				newPostText: state.profilePage.newPostText,
		}
}

const MyPostsContainer = connect(mapStateToProps, {
		addPost: actions.addPostActionCreator,
		updateNewPostText: actions.updateNewPostTextActionCreator,
})(MyPosts)

export default MyPostsContainer
