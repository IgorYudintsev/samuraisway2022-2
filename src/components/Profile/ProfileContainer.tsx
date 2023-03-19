import React from 'react';
import Profile from './Profile';
import { AppStateType } from '../../redux/redux-store';
import { connect } from 'react-redux';
import {
		getUserProfileThunkCreator,
		setStatusThunkCreator,
		updateStatusThunkCreator,
} from '../../redux/profileReducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';


type mapStateToPropsType = ReturnType<typeof mapStateToProps>

type mapDispatchToPropsType = {
		getUserProfileThunkCreator: (userId: any) => void
		setStatusThunkCreator: (userId: any) => void
		updateStatusThunkCreator: (status: string) => void
		/*	getProfile: (userId: number) => void
		 getStatus: (userId: number) => void
		 updateStatus: (status: string) => void*/

}

export type ProfilePageMapType = mapStateToPropsType & mapDispatchToPropsType

type PathParamType = {
		userId: any
}

type CommonPathParamType = RouteComponentProps<PathParamType> & ProfilePageMapType


class ProfileContainer extends React.Component<CommonPathParamType> {
		constructor(props: CommonPathParamType) {
				super(props);
		}

		componentDidMount() {

				let userId: number | null = +this.props.match.params.userId;
				if (!userId) {
						userId = +'27598';
				}
				if (!userId) {
						console.error('ID should exists in URI params or in state (\'authorizedUserId\')');
				} else {
						this.props.getUserProfileThunkCreator(userId)
						this.props.setStatusThunkCreator(userId)
				}
		}


		render() {
				return <Profile { ...this.props }
												profile={ this.props.profile }
												status={ this.props.status }
												updateStatus={ this.props.updateStatusThunkCreator } />
		}

}

let mapStateToProps = (state: AppStateType) => ({
		profile: state.profilePage.profile,
		status: state.profilePage.status,

})

export default compose<React.ComponentType>(
	connect(mapStateToProps, { getUserProfileThunkCreator, setStatusThunkCreator, updateStatusThunkCreator }),
	withRouter,
)(ProfileContainer);


/*
 let AuthRedirectComponent = (props: any) => {
 if(!props.isAth) return <Redirect to={'./login'}/>
 return <ProfileContainer { ... props} />
 }
 */


/*
 let mapStateToPropsForRedirect = (state: AppStateType) => ({
 isAuth: state.auth.isAuth
 } as MapPropsType);

 type MapPropsType = {
 isAuth: boolean
 }
 type DispatchPropsType = {
 }

 export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

 const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
 let {isAuth, ...restProps} = props

 if (!isAuth) return <Redirect to='/login'/>

 return <WrappedComponent {...restProps as WCP}/>
 }

 let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(
 mapStateToPropsForRedirect, {})
 (RedirectComponent)

 return ConnectedAuthRedirectComponent;
 }

 */


//export default connect(mapStateToProps, { setUserProfile: actions.setUserProfile })(WithUrlDataContainerComponent);


/*
 {
 "aboutMe": "я круто чувак 1001%",
 "contacts": {
 "facebook": "facebook.com",
 "website": null,
 "vk": "vk.com/dimych",
 "twitter": "https://twitter.com/@sdf",
 "instagram": "instagra.com/sds",
 "youtube": null,
 "github": "github.com",
 "mainLink": null
 },
 "lookingForAJob": true,
 "lookingForAJobDescription": "не ищу, а дурачусь",
 "fullName": "samurai dimych",
 "userId": 2,
 "photos": {
 "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
 "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
 }
 }
 */


/*
 axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
 .then(response => {
 if (response.status === 200) {
 this.props.setUserProfile(response.data)
 } else {
 throw Error('Connection error')
 }

 })*/


/*
 usersAPI.getProfile(userId)
 .then(response => {
 if (response.status === 200) {
 this.props.setUserProfile(response.data)
 } else {
 throw Error('Connection error')
 }

 })
 */
