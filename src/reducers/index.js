const initialState = {
	books: [],
	loading: true,
	error: null,
	cartItems: []
}

const updateCartItems = (indexId, newBook, cartItems) => {
	if (indexId === -1) {
		return [ ...cartItems, newBook ]
	}

	return [
			...cartItems.slice(0,indexId),
			newBook,
			...cartItems.slice(indexId + 1) 
		]
}

const updateBookItem = ( book, item = {} ) => {

	const { 
		id = book.id,
		count = 0,
		total = 0,
		title = book.title } = item
	
	return {
		id,
		title,
		count: count + 1,
		total: total + book.total
	}
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

		case 'ADDED_TO_CART':
			const bookId = action.payload;
			const book = state.books.find(book => book.id === bookId);

			const indexId = state.cartItems.findIndex(({ id }) => id === bookId)
			const item = state.cartItems[indexId];

			const newBook = updateBookItem(book, item)
			const newBooks = updateCartItems(indexId, newBook, state.cartItems)

			return {
				...state,
				cartItems: newBooks
			}

		default:
			return state
	}
}

export default reducer;