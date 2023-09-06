import React, { useState} from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-hooks-context';

function BookShow({ book }) {
	const [showEdit, setShowEdit] = useState(false);
	const { deleteBookById } = useBooksContext();

	function handleDelete() {
		deleteBookById(book.id);
	}

	function handleEdit() {
		setShowEdit(!showEdit);
	}

	function handleSubmit() {
		setShowEdit(false);
	}

	let content = <h3>{book.title}</h3>;
	if (showEdit) {
		content = <BookEdit book={book} onSubmit={handleSubmit} />;
	}

	return (
		<div className="book-show">
			<img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
			<div>{content}</div>
			<div className="actions">
				<button className="edit" onClick={handleEdit}>
					Edit
				</button>
				<button className="delete" onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default BookShow;
