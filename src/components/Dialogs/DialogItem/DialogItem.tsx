import React from 'react'
import styles from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import { DialogType } from '../../../types/types'

const DialogItem = ({ id, name }: DialogType) => {
		let path = '/dialogs/' + id
		return (
			<div className={ styles.dialog + ' ' + styles.active }>
					<NavLink to={ path }>{ name }</NavLink>
			</div>
		)
}

export default DialogItem
