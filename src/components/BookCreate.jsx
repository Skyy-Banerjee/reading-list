import React, { useState } from 'react';
import useBooksContext from '../hooks/use-hooks-context';

function BookCreate() {
	const [title, setTitle] = useState('');
	const { createBook } = useBooksContext();

	function handleChange(evt) {
		setTitle(evt.target.value);
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		// onCreate(title);
		createBook(title);
		setTitle('');
	}
	return (
		<div className="book-create">
			<h3>Add a book</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title: </label>
				<input
					type="text"
					className="input"
					id="title"
					value={title}
					onChange={handleChange}
				/>
				<button className="button">Create!</button>
			</form>
		</div>
	);
}

export default BookCreate;
