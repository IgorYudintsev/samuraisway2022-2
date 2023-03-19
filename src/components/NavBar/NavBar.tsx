import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<NavLink to='/profile'>Profile</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/dialogs'>Messages</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/news'>News</NavLink>
			</div>
			<div className={`${styles.item} ${styles.active}`}>
				<NavLink to='/musics'>Music</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/settings'>Settings</NavLink>
			</div>
				<div className={styles.item}>
						<NavLink to='/users'>Users</NavLink>
				</div>
		</nav>
	)
}


export default NavBar
