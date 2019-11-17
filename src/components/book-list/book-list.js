import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';

import { booksLoaded } from '../../actions';
import compose from '../../utils';
import BookListItem from '../book-list-item';

import './book-list.css';

class BookList extends Component {

	componentDidMount(){
		const { bookstoreService, booksLoaded } = this.props;

		const data = bookstoreService.getBooks();
		booksLoaded(data)
	}

	render(){
		const { books } = this.props
		return (
			<ul> {
				books.map((book) => (
						<li key={book.id}><BookListItem book={book}/></li>
					)
				)}
			</ul>
		)
	}
}

const mapStateToProps = ({ books }) => {
	return { books } 
}

const mapDispatchToProps = {
	booksLoaded
}

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList)