import { updateShoppingCart } from './shopping-cart';
import { updateBookList } from './book-list';

const reducer = (state, action) => {
	return {
		shoppingCart: updateShoppingCart(state,action),
		bookList: updateBookList(state,action)
	}
}

export default reducer;