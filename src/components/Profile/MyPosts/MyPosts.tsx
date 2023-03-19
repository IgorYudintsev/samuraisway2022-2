import React, { ChangeEvent } from 'react'
import Post from './Post/Post'
import styles from './MyPosts.module.css'
import { ProfilePageMapType } from './MyPostsContainer';

/*
type MyPostsType = {
		posts: PostType[]
		newPostText: string
		addPost: () => void
		updateNewPostText: (text: string) => void
}
*/


const MyPostss = (props: ProfilePageMapType) => {

		let postElements = props.posts.map(p => (
			<Post key={ p.id } id={ p.id } message={ p.message } likeCount={ p.likeCount } />
		))

		const onAddPost = () => props.addPost()
		const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.updateNewPostText(e.currentTarget.value)


		return (
			<div className={ styles.postsBlock }>
					<h3>My posts</h3>
					<div>
							<div>
									<textarea value={ props.newPostText } onChange={ onPostChange } />
							</div>
							<div>
									<button onClick={ onAddPost }> Add post</button>
							</div>
					</div>
					<div>
							<div className={ styles.posts }>{ postElements }</div>
					</div>
			</div>
		)
}

const MyPosts = React.memo(MyPostss)

export default MyPosts
