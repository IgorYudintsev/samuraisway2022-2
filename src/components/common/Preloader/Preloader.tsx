import React from 'react';
import preloader from '../../Users/Spinner-1s-200px.svg';

const Preloader = () => {
		return (
			<div style={{textAlign: 'center'}}> <img src={ preloader } alt='img'/></div>
		);
};

export default Preloader;