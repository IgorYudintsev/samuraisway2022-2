import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { actions, followThunkCreator, gerUsersThunkCreator, unFollowThunkCreator } from '../../redux/usersReducer';
import UsersPureFunctionalComponent from './UsersPureFunctionalComponent';
import Preloader from '../common/Preloader/Preloader';
import { UserType } from '../../types/types';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


type mapStateToPropsType = {
		users: UserType[]
		pageSize: number
		totalUsersCount: number
		currentPage: number
		isFetching: boolean
		isFollowing: number[]
}

type mapDispatchToPropsType = {
		setCurrentPage: (currentPage: number) => void
		gerUsersThunkCreator: (currentPage: number, pageSize: number) => void
		followThunkCreator: (id: number) => void
		unFollowThunkCreator: (id: number) => void

}

type OwnPropsType = {}

export type UsersPageMapType = mapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPageMapType> {
		constructor(props: UsersPageMapType) {
				super(props);
		}

		componentDidMount() {
				this.props.gerUsersThunkCreator(this.props.currentPage, this.props.pageSize)
		}

		onPageChanged = (pageNumber: number) => {
				this.props.gerUsersThunkCreator(pageNumber, this.props.pageSize)
		}


		render() {

				return <>
						{ this.props.isFetching ? <Preloader /> : null }

						<UsersPureFunctionalComponent totalUsersCount={ this.props.totalUsersCount }
																					pageSize={ this.props.pageSize }
																					currentPage={ this.props.currentPage }
																					users={ this.props.users }
																					onPageChanged={ this.onPageChanged }
																					isFollowing={ this.props.isFollowing }
																					followThunkCreator={this.props.followThunkCreator}
																					unFollowThunkCreator={this.props.unFollowThunkCreator}


						/>
				</>
		}
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
		return {
				users: state.usersPage.users,
				pageSize: state.usersPage.pageSize,
				totalUsersCount: state.usersPage.totalUsersCount,
				currentPage: state.usersPage.currentPage,
				isFetching: state.usersPage.isFetching,
				isFollowing: state.usersPage.isFollowing,
		}
}

export default compose<React.ComponentType>(
	connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
			setCurrentPage: actions.setCurrentPage,
			gerUsersThunkCreator: gerUsersThunkCreator,
			followThunkCreator: followThunkCreator,
			unFollowThunkCreator: unFollowThunkCreator,
	}),
	withAuthRedirect
)(UsersContainer);



/*
let withRedirect = withAuthRedirect(UsersContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
		setCurrentPage: actions.setCurrentPage,
	 	gerUsersThunkCreator: gerUsersThunkCreator,
		followThunkCreator: followThunkCreator,
		unFollowThunkCreator: unFollowThunkCreator,
})(withRedirect)
*/


//before adding thunks
/*
 import React from 'react';
 import { connect } from 'react-redux';
 import { AppStateType } from '../../redux/redux-store';
 import { actions } from '../../redux/usersReducer';
 import UsersPureFunctionalComponent from './UsersPureFunctionalComponent';
 import Preloader from '../common/Preloader/Preloader';
 import { usersAPI } from '../../api/api-DAL';
 import { UserType } from '../../types/types';


 type mapStateToPropsType = {
 users: UserType[]
 pageSize: number
 totalUsersCount: number
 currentPage: number
 isFetching: boolean
 isFollowing: number[]
 }

 type mapDispatchToPropsType = {
 follow: (userId: number) => void
 unfollow: (userId: number) => void
 setUsers: (users: UserType[]) => void
 setCurrentPage: (currentPage: number) => void
 setTotalUsersCount: (totalUsersCount: number) => void
 toggleIsFetching: (isFetching: boolean) => void
 toggleIsFollowing: (isFetching: boolean, id: number) => void

 }
 type OwnPropsType = {}
 export type UsersPageMapType = mapStateToPropsType & mapDispatchToPropsType

 class UsersContainer extends React.Component<UsersPageMapType> {
 constructor(props: UsersPageMapType) {
 super(props);
 }

 componentDidMount() {
 this.props.toggleIsFetching(true)

 usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

 this.props.toggleIsFetching(false)
 this.props.setUsers(data.items)
 this.props.setTotalUsersCount(data.totalCount)
 })

 }

 onPageChanged = (pageNumber: number ) => {
 this.props.setCurrentPage(pageNumber)
 this.props.toggleIsFetching(true)

 usersAPI.getUsers(pageNumber, this.props.pageSize)
 .then(data => {
 this.props.toggleIsFetching(false)
 this.props.setUsers(data.items)

 })

 }


 render() {

 return <>
 { this.props.isFetching ? <Preloader /> : null }

 <UsersPureFunctionalComponent totalUsersCount={ this.props.totalUsersCount }
 pageSize={ this.props.pageSize }
 currentPage={ this.props.currentPage }
 users={ this.props.users }
 onPageChanged={ this.onPageChanged }
 follow={ this.props.follow }
 unfollow={ this.props.unfollow }
 isFollowing={ this.props.isFollowing }
 toggleIsFollowing={ this.props.toggleIsFollowing }


 />
 </>
 }
 }

 const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
 return {
 users: state.usersPage.users,
 pageSize: state.usersPage.pageSize,
 totalUsersCount: state.usersPage.totalUsersCount,
 currentPage: state.usersPage.currentPage,
 isFetching: state.usersPage.isFetching,
 isFollowing: state.usersPage.isFollowing,
 }
 }

 export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
 follow: actions.follow,
 unfollow: actions.unFollow,
 setUsers: actions.setUsers,
 setCurrentPage: actions.setCurrentPage,
 setTotalUsersCount: actions.setTotalUsersCount,
 toggleIsFetching: actions.toggleIsFetching,
 toggleIsFollowing: actions.toggleIsFollowing,
 })(UsersContainer)*/
