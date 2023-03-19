import React from 'react'
import Preloader from '../../common/Preloader/Preloader';
import { ProfileType } from '../../../types/types';
import ProfileStatus from './ProfileStatus'


export type ProfilePropsType = {
		profile: ProfileType | null
		status: string
		updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfilePropsType) => {
		const { profile, status, updateStatus } = props

		if (!profile) {
				return <Preloader />
		}
		return (

			<div>

					{/*<div className={ styles.content }>
							<img style={ { width: '100%', height: '250px', objectFit: 'cover' } } src={ ProfilePhoto } alt="img" />
					</div>*/}

					<div>
							<img src={ profile.photos.small } style={ { borderRadius: '50%', objectFit: 'cover' } } />
							<div style={{fontSize: '24px'}}>{ profile.fullName }</div>
							<div>{ profile.aboutMe }</div>
						{/*	<div>{ profile.contacts.facebook }</div>
							<div>{ profile.contacts.github }</div>
							<div>{ profile.contacts.vk }</div>
							<div>{ profile.contacts.instagram }</div>
							<div>{ profile.contacts.twitter }</div>

							<div>{ profile.lookingForAJob }</div>
							<div>{ profile.lookingForAJobDescription }</div>*/}
							<ProfileStatus status={status} updateStatus={updateStatus}/>


					</div>
			</div>
		)
}

export default ProfileInfo
