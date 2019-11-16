import React from 'react';

import BookList from '../book-list';

const HomePage = () => {
	const foo = [
      {
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler' },
      {
        id: 2,
        title: 'Release It!',
        author: 'Michael T. Nygard'}
    ];
	return(
		<div>
			<div>Welcome to the Store!!</div>
			<BookList books={foo}/>
		</div>
	)
}

export default HomePage;