import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { BookstoreServiceProvider } from './components/bookstore-service-context';
import ErrorBoundary from './components/error-boundary';
import BookstoreService from './services'

import App from './components/app';
import store from './store';
// import Spinner from '../spinner';

const bookstoreService = new BookstoreService();

ReactDom.render(
	<Provider store={store}>
		<ErrorBoundary>
			<BookstoreServiceProvider value={bookstoreService}>
				<Router>

					<App />

				</Router>
			</BookstoreServiceProvider>
		</ErrorBoundary>
	</Provider>,
	document.getElementById('root')
)