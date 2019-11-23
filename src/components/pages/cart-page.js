import React from 'react';
import { withRouter } from 'react-router-dom';

import ShoppingCartTable from '../shopping-cart-table';

const CartPage = ({ history }) => {

	return(
		<div>
			<button className="btn btn-primary btn-lg"
				onClick={ () => 
					history.goBack()
				}>
				{'<— Назад'}
			</button>
			<ShoppingCartTable />
		</div>
	)
}

export default withRouter(CartPage);
