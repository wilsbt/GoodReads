import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './App.css'; // Import a stylesheet to add some styling to the app
import OffCanvasMenu from './OffCanvasMenu';
import Tile from './Tile';

function App() {
  const [books, setBooks] = useState([]); // This is where you will store the books that you have read

  // This function will be called when the user submits a new book
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the book title and author from the form inputs
    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;

    // Add the new book to the list of books
    setBooks([...books, { title, author }]);

    // Clear the form inputs
    event.target.elements.title.value = '';
    event.target.elements.author.value = '';
  }

  

  return (
    <div className="container">
      <header>
        <OffCanvasMenu/>
        <h1>My Reading List</h1>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Book Title:</label>
          <input type="text" name="title" required />
          <br />
          <label htmlFor="author">Author:</label>
          <input type="text" name="author" required />
          <br />
          <button type="submit" className="button">Add Book</button>
        </form>
        <h2>Recent Reads</h2>
        

        {books.length > 0 ? (
          books.map((book)=> (
            <Tile 
           cover=''
           title={book.title}
           author={book.author}
           rating={4}/>
            ))
          
    
        ) : (
          <p>No books have been added yet.</p>
        )}

      <h2>Next Up</h2>
      <Tile 
          cover="https://cdn2.penguin.com.au/covers/original/9780857501004.jpg"
          title="A brief history of time"
          author="Stephen Hawking"
          rating={4}/>
      </main>
    </div>
  );
}

export default App;

