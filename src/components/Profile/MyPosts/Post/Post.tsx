import React from 'react'
import styles from './Post.module.css'
import post from './../../../../assets/post/10.jpeg'
import { PostType } from '../../../../types/types'

const Postt = ({ id, message, likeCount }: PostType) => {
		return (
			<div className={ `${ styles.item } ${ styles.active }` }>
					<img style={ { width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover' } } src={ post }
							 alt="img" />
					{ message }
					<div>
							<span> like { likeCount } </span>
					</div>
			</div>
		)
}

export const Post = React.memo(Postt)

export default Post
