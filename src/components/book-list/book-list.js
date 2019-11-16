import React from 'react';
import BookListItem from '../book-list-item';

import './book-list.css';

const BookList = ({ books }) => {

	return (
		<ul>
			{
				books.map((book) => (
						<li key={book.id}><BookListItem book={book}/></li>
					)
				)
			}
		</ul>
	)
}

export default BookList;