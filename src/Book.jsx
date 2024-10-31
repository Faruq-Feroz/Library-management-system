import { useState } from 'react';

const Book = ({ onAddBook, onRemoveBook, books }) => {
    const [bookName, setBookName] = useState('');
    const [author, setAuthor] = useState('');
    const [type, setType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bookName.length < 2 || author.length < 2) {
            return; 
        }
        onAddBook({ name: bookName, author, type });
        setBookName('');
        setAuthor('');
        setType('');
    };

    const handleRemoveBook = (index) => {
        onRemoveBook(index);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredBooks = books.filter(book =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <form id="libraryForm" className="library-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    placeholder="Book Name"
                    required
                />
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                    required
                />
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            value="Fantasy"
                            checked={type === 'Fantasy'}
                            onChange={(e) => setType(e.target.value)}
                            required
                        />
                        Fantasy
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Romance"
                            checked={type === 'Romance'}
                            onChange={(e) => setType(e.target.value)}
                        />
                        Romance
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Fiction"
                            checked={type === 'Fiction'}
                            onChange={(e) => setType(e.target.value)}
                        />
                        Fiction
                    </label>
                </div>
                <button type="submit" className="btn">Add Book</button>
            </form>

            <input 
                type="text" 
                placeholder="Search for books..." 
                className="search-input" 
                value={searchTerm} 
                onChange={handleSearch} 
            />

            <table>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <tr key={index}>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.type}</td>
                                <td>
                                    <button className="remove-btn" onClick={() => handleRemoveBook(index)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>No books found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Book;
