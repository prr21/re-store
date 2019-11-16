import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CartPage, NotFoundPage } from '../pages';
import './app.css';

const App = () => {
	return (
		<div className='d-flex justify-content-around align-items-center mt-4'>
			<Switch>

				<Route path='/' exact
					component={HomePage}>
				</Route>

				<Route path='/cart-page' 
					component={CartPage}>
				</Route>

				<Route component={NotFoundPage}/>

			</Switch>
		</div>
	)
}

export default App;