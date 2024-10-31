import { useState } from 'react';
import Book from './Book';
import Display from './Display';

const App = () => {
    const [books, setBooks] = useState([]);
    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('success');

    const addBook = (newBook) => {
        setBooks([...books, newBook]);
        setMessage('Your book has been successfully added');
        setAlertType('success');
        setTimeout(() => setMessage(''), 5000);
    };

    const removeBook = (index) => {
        const updatedBooks = books.filter((_, i) => i !== index);
        setBooks(updatedBooks);
        setMessage('Book removed successfully');
        setAlertType('error');
        setTimeout(() => setMessage(''), 5000);
    };

    return (
        <div>
            <h1 className="title">Library Management System</h1>
            {message && <Display message={message} type={alertType} />}
            <Book onAddBook={addBook} onRemoveBook={removeBook} books={books} />
        </div>
    );
};

export default App;
