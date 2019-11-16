import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
	return (
		<div className='error-block'>
			<div className='error-info text-center'>
				<p className='text-dark'><b>Произошла ошибка!</b></p>
				<span>Мы уже работаем над тем, как её исправить</span>
			</div>
		</div>
	)
}

export default ErrorIndicator;