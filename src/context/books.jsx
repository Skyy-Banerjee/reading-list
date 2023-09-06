import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
	const [books, setBooks] = useState([]);

	const fetchBooks = useCallback(async () => {
		const resp = await axios.get('http://localhost:5174/books');
		setBooks(resp.data);
	}, []);

	async function editBookById(id, newTitle) {
		const resp = await axios.put(`http://localhost:5174/books/${id}`, {
			title: newTitle,
		});

		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, ...resp.data };
			}
			return book;
		});

		setBooks(updatedBooks);
	}

	async function deleteBookById(id) {
		const resp = await axios.delete(`http://localhost:5174/books/${id}`);

		const updatedBooks = books.filter((book) => book.id !== id);
		setBooks(updatedBooks);
	}

	async function createBook(title) {
		const resp = await axios.post('http://localhost:5174/books', {
			title: title,
		});
		const updatedBooks = [...books, resp.data];
		setBooks(updatedBooks);
	}
	const valueToShare = {
		books,
		deleteBookById,
		editBookById,
		createBook,
		fetchBooks,
	};
	return (
		<BooksContext.Provider value={valueToShare}>
			{children}
		</BooksContext.Provider>
	);
}

export { Provider };
export default BooksContext;
