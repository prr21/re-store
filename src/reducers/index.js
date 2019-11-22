const initialState = {
	books: [],
	loading: true,
	error: null,
	cartItems: []
}

const upgradeBookOrder = (bookId, state, diff) => {
	const { books, cartItems } = state
	
	const book = books.find( ({ id }) => id === bookId )
	const indexId = cartItems.findIndex( ({ id }) => id === bookId );

	const item = cartItems[indexId];

	const newBook = updateBookItem( book, item, diff);
	const newBooks = updateCartItems(indexId, newBook, cartItems);

	return {...state, cartItems: newBooks};
}

const updateBookItem = ( book, item = {}, diff) => {

	const { 
		id = book.id,
		count = 0,
		total = 0,
		title = book.title } = item
	
	return {
		id,
		title,
		count: count + diff,
		total: total + diff * book.total
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

const reducer = (state = initialState, action) => {

	switch (action.type){
		case 'FETCH_BOOKS_REQUEST':
			return {
				...state,
				books: [],
				loading: true,
				error: null
			};

		case 'FETCH_BOOKS_SUCCESS':
			return {
				...state,
				books: action.payload,
				loading: false,
				error: null
			};

		case 'FETCH_BOOKS_FAILURE':
			return {
				...state,
				books: [],
				loading: false,
				error: action.payload
			}

		case 'BOOK_ADDED_TO_CART':
			return upgradeBookOrder(action.payload, state, 1);

		case 'BOOK_REMOVED_FROM_CART':
			return upgradeBookOrder(action.payload, state, -1);

		case 'ALL_BOOKS_REMOVED_FROM_CART':
			const item = state.cartItems.find( ({ id }) => id === action.payload );

			return upgradeBookOrder(action.payload, state, -item.count);

		default:
			return state
	}
}

export default reducer;