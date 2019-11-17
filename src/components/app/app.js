import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CartPage, NotFoundPage } from '../pages';
import ShopHeader from '../shop-header';
import './app.css';

const App = () => {
	return (
		<main role="main" className="container">
      <ShopHeader numItems={5} total={210}/>
			<Switch>

				<Route path='/' exact
					component={HomePage}>
				</Route>

				<Route path='/cart-page' 
					component={CartPage}>
				</Route>

				<Route component={NotFoundPage}/>

			</Switch>
		</main>
	)
}

export default App;