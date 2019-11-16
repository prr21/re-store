import React from 'react';

import './book-list-item.css';

const BookListItem = ({ book }) => {
	return (
		<React.Fragment>
			<span>{book.author}</span>
			<span>{book.title}</span>
		</React.Fragment>
	)
}

export default BookListItem;