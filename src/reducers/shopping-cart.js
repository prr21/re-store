const updateOrder = (bookId, state, coeff) => {
	const { 
		bookList: { books }, 
		shoppingCart: { cartItems, orderTotal, numItems } 
	} = state
	
	const book = books.find( ({ id }) => id === bookId )
	const indexId = cartItems.findIndex( ({ id }) => id === bookId );

	const bookPrice = book.total;
	const item = cartItems[indexId];

	const newBook = updateItem( book, item, coeff);

	return {
		cartItems: updateCartItems(indexId, newBook, cartItems),
		numItems: numItems + coeff,
		orderTotal: orderTotal + coeff * bookPrice
	};
}

const updateItem = ( book, item = {}, coeff) => {

	const { 
		id = book.id,
		count = 0,
		total = 0,
		title = book.title } = item
	
	return {
		id,
		title,
		count: count + coeff,
		total: total + coeff * book.total
	}
}

const updateCartItems = (indexId, newBook, cartItems) => {
	if (newBook.count === 0) {
		return [
			...cartItems.slice(0,indexId),
			...cartItems.slice(indexId + 1)
		]
	}
	if (indexId === -1) {
		return [ ...cartItems, newBook ]
	}

	return [
			...cartItems.slice(0,indexId),
			newBook,
			...cartItems.slice(indexId + 1) 
		]
}

const updateShoppingCart = (state, action) => {

	if (state === undefined) {
		return {
			cartItems: [],
			numItems: 0,
			orderTotal: 0
		}
	}

	switch (action.type){
		case 'BOOK_ADDED_TO_CART':
			return updateOrder(action.payload, state, 1)

		case 'BOOK_REMOVED_FROM_CART':
			return updateOrder(action.payload, state, -1)

		case 'ALL_BOOKS_REMOVED_FROM_CART':
			const item = state.shoppingCart.cartItems.find( ({ id }) => id === action.payload );

			return updateOrder(action.payload, state, -item.count);

		default:
			return state.shoppingCart
	}
}

export { updateShoppingCart };