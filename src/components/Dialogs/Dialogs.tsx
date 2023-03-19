import React, { ChangeEvent } from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import { DialogsPageMapType } from './DialogsContainer';
import { Redirect } from 'react-router-dom';


/*type DialogsType = {
		dialogsPage: DialogsPageType
		//dialogs: DialogType[]
		//messages: MessageType[]
		//newMessageText: string
		addMessage: () => void
		changeMessage: (text: string) => void
}*/

const Dialogs = (props: DialogsPageMapType) => {

		let dialogItems = props.dialogsPage.dialogs.map(d => {
				return <DialogItem key={d.id} id={ d.id } name={ d.name } />
		})

		let messageItems =  props.dialogsPage.messages.map(m => (
			<MessageItem key={m.id} id={ m.id } message={ m.message } />
		))

		let newMessageText =  props.dialogsPage.newMessageText

		const onAddMessage = () => props.addMessage()
		const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => props.changeMessage(e.currentTarget.value)

	/*	if(!props.isAth) return <Redirect to={'./login'}/>*/

		return (
			<>
					<div className={ styles.dialogs }>
							<div className={ styles.dialogsItems }>{ dialogItems }</div>
							<div className={ styles.messages }>{ messageItems }</div>
					</div>

					<div>
							<div className={ styles.sendForm }>
									<textarea
										className={ styles.textarea }
										value={ newMessageText }
										onChange={ onChangeMessage }
										placeholder={ 'Type your message' }
									/>
									<button className={ styles.button } onClick={ onAddMessage }>
											Send
									</button>
							</div>
					</div>
			</>
		)
}

export default Dialogs
