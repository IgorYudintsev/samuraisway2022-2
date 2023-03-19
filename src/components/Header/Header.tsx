import React from 'react'
import logo from '../../logo.png'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

type HeaderType = {
		isAuth: boolean
		login: string | null
}
const Header = (props: HeaderType) => {
	return (
		<header className={styles.header}>
			<img src={logo} alt='img' />
				<div className={styles.loginBlock}>
						{props.isAuth
							? props.login
							: <NavLink to={'/login'}>Login</NavLink>
						}

				</div>
		</header>
	)
}

export default Header
