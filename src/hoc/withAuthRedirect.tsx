import React, { ComponentType } from 'react';
import { AppStateType } from '../redux/redux-store';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


type MapPropsType = {
		isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType) => ({
		isAuth: state.auth.isAuth,
} as MapPropsType);


export function withAuthRedirect<T>(Component: ComponentType<T>) {

		function RedirectComponent(props: MapPropsType) {
				let {isAuth, ...restProps} = props

				if (!isAuth) return <Redirect to={ './login' } />

				return <Component { ...restProps as T } />
		}

		let ConnectedAuthRedirectedComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
		return ConnectedAuthRedirectedComponent;
}


/*import React, { ComponentType } from 'react';
 import { AppStateType } from '../redux/redux-store';
 import { Redirect } from 'react-router-dom';
 import { connect } from 'react-redux';


 let mapStateToPropsForRedirect = (state: AppStateType) => ({
 isAuth: state.auth.isAuth
 } as MapPropsType);

 type MapPropsType = {
 isAuth: boolean
 }
 type DispatchPropsType = {
 }



 export function withAuthRedirect<T>(Component: ComponentType<T>) {
 class RedirectComponent extends React.Component<MapPropsType & DispatchPropsType> {

 render() {
 if(!this.props.isAuth) return <Redirect to={'./login'}/>
 return <Component { ...this.props as unknown  as T} />
 }
 }
 let ConnectedAuthRedirectedComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
 return ConnectedAuthRedirectedComponent;
 }*/
