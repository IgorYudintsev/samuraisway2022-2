import React from 'react';
import { UsersPageMapType } from './UsersContainer';
import axios from 'axios';
import userPhoto from './../../assets/person/1.jpeg'


export const Users = (props: UsersPageMapType) => {

		let getUsers = () => {
				if (props.users.length === 0) {
						axios.get('https://social-network.samuraijs.com/api/1.0/users')
								// .then(response => props.setUsers(response.data.items))
				}
		}

		return (

			<div>


					<button onClick={ getUsers }>Get users</button>
					{
							props.users.map(u => <div key={ u.id }>

									<span>
											<div><img style={ { width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover' } }
																src={ u.photos.small ? u.photos.small : userPhoto } alt="img" /></div>
											<div>
													{
															/*u.followed
																? <button onClick={ () => {props.follow(u.id)} }>Follow</button>
																: <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>*/
													}

											</div>
									</span>
									<span style={ { display: 'flex', alignItems: 'center', justifyContent: 'space-around' } }>
											<span>
													<div>{ u.name }</div>
													<div>{ u.status }</div>
											</span>
											<span>
													<div>{ 'u.location.country' }</div>
													<div>{ 'u.location.city' }</div>
											</span>
									</span>
							</div>)
					}
			</div>
		);
};



/*if (props.users.length === 0) {
 props.setUsers([
 {
 id: '1',
 img: 'assets/person/2.jpeg',
 followed: true,
 name: 'Viktor',
 location: { country: 'Poland', city: 'Warsaw' },
 status: 'I am a boss',
 },
 {
 id: '2',
 img: 'assets/person/1.jpeg',
 followed: true,
 name: 'Sasha',
 location: { country: 'Russia', city: 'Moscow' },
 status: 'I am looking for a job',
 },
 {
 id: '3',
 img: 'assets/person/3.jpeg',
 followed: false,
 name: 'Susanna',
 location: { country: 'Ukraine', city: 'Kiev' },
 status: 'I am getting new knowledge',
 },
 {
 id: '4',
 img: 'assets/person/4.jpeg',
 followed: false,
 name: 'Maria',
 location: { country: 'UK', city: 'London' },
 status: 'I am doing my homework',
 },

 ])
 }*/
