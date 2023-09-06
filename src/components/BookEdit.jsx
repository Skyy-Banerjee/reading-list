import React, { useState } from 'react';
import useBooksContext from '../hooks/use-hooks-context';

function BookEdit({ book, onSubmit }) {
	const [title, setTitle] = useState(book.title);
	const { editBookById } = useBooksContext();

	function handleChange(evt) {
		setTitle(evt.target.value);
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		onSubmit();
		editBookById(book.id, title);
	}

	return (
		<div>
			<form className="book-edit" onSubmit={handleSubmit}>
				<label htmlFor="title">Title: </label>
				<input
					type="text"
					id="title"
					className="input"
					value={title}
					onChange={handleChange}
				/>
				<button className="button is-primary">Save</button>
			</form>
		</div>
	);
}

export default BookEdit;
