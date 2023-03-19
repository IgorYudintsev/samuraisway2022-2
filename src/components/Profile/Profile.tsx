import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types/types';



export type ProfilePropsType = {
		profile: ProfileType | null
		status: string
		updateStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {

		const {profile, status, updateStatus} = props

		return (
			<>
					<ProfileInfo profile={profile}
											 status={ status }
											 updateStatus={ updateStatus }/>
					<MyPostsContainer />
			</>
		)
}

export default Profile
