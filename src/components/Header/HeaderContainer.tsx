import React from 'react';
import { actions, getAuthUserDataThunkCreator } from '../../redux/authReducer';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api-DAL';


type mapStateToPropsType = {
		id: number | null
		email: string | null
		login: string | null
		isAuth: boolean
}

type mapDispatchToPropsType = {
		//setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => void
		getAuthUserDataThunkCreator: () => void
}

export type AuthMapType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<AuthMapType, AppStateType> {
		componentDidMount() {
				this.props.getAuthUserDataThunkCreator()
		}

		render() {
				return (
					<Header { ...this.props } />
				)
		}
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
		return {
				id: state.auth.id,
				email: state.auth.email,
				login: state.auth.login,
				isAuth: state.auth.isAuth,
		}
}

export default connect(mapStateToProps, { getAuthUserDataThunkCreator, })(HeaderContainer)













//export default connect(mapStateToProps, { setAuthUserData: actions.setAuthUserData, })(HeaderContainer)

/*axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
 withCredentials: true
 })*/


/*
authAPI.me()
			 .then(res => {
					 if (res.data.resultCode === 0) {
							 let { id, email, login, isAuth } = res.data.data
							 this.props.setAuthUserData(id, email, login, isAuth)
					 }
			 })*/
