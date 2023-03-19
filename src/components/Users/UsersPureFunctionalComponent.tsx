import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/person/1.jpeg';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../types/types';


type UsersPropsType = {
		totalUsersCount: number
		pageSize: number
		currentPage: number
		users: Array<UserType>
		onPageChanged: (pageNumber: number) => void
		isFollowing: number []
		followThunkCreator: (id: number) => void
		unFollowThunkCreator: (id: number) => void
}

const UsersPureFunctionalComponent = (props: UsersPropsType) => {

		const { totalUsersCount, pageSize, currentPage, users, onPageChanged } = props

		let pagesCount = Math.ceil(totalUsersCount / pageSize / 250)

		let pages = []
		for (let i = 1; i <= pagesCount; i++) {
				pages.push(i)
		}

		return (
			<div>

					<div>
							{ pages.map(p => {

									return <span key={ p } className={ currentPage === p ? styles.selectedPage : '' }
															 onClick={ (e) => {onPageChanged(p)} }>{ p }</span>
							}) }
					</div>

					{
							users.map(u => <div key={ u.id }>

									<span>
											<div>
														<NavLink to={ '/profile' + u.id }>
													<img style={ { width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover' } }
															 src={ u.photos.small ? u.photos.small : userPhoto } alt="img" />
														</NavLink>
											</div>

											<div>

													{
															u.followed

																? <button disabled={ props.isFollowing.some(id => id === u.id) } onClick={ () => {
																		props.followThunkCreator(u.id)
																} }>Follow</button>

																: <button disabled={ props.isFollowing.some(id => id === u.id) } onClick={ () => {
																		props.unFollowThunkCreator(u.id)
																} }>Unfollow</button>
													}

											</div>
									</span>
									<span style={ { display: 'flex', alignItems: 'center', justifyContent: 'space-around' } }>
											<span>
													<div>{ u.name }</div>
													<div>{ u.status }</div>
											</span>
											<span>
													<div>{ 'u.location.country' }</div>
													<div>{ 'u.location.city' }</div>
											</span>
									</span>
							</div>)
					}
			</div>
		);
};

export default UsersPureFunctionalComponent;























/*							axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${ u.id }`, {}, {
 withCredentials: true,
 headers: {
 'API-KEY': '020eede9-536a-43e1-ba0a-ab142c34e29e'
 }
 })
 .then(response => {
 if (response.data.resultCode === 0) {
 follow(u.id)
 }
 })*/

/*	axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${ u.id }`,{
 withCredentials: true,
 headers: {
 'API-KEY': '020eede9-536a-43e1-ba0a-ab142c34e29e'
 }
 })
 .then(response => {
 if (response.data.resultCode === 1) {
 unfollow(u.id)
 }
 })*/