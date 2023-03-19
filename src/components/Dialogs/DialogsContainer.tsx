import React from 'react'
import { actions, InitialStateType } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


type mapStateToPropsType = {
		dialogsPage: InitialStateType
}

type mapDispatchToPropsType = {
		addMessage: () => void
		changeMessage: (text: string) => void
}
export type DialogsPageMapType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
		return {
				dialogsPage: state.dialogsPage,
		}
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, {...actions}),
	withAuthRedirect
)(Dialogs)


/*
 let AuthRedirectComponent = (props: DialogsPageMapType) => {
 if(!props.isAth) return <Redirect to={'./login'}/>
 return <Dialogs { ... props} />
 }*/
