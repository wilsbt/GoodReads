import React, { useState, useEffect } from 'react';
import './Tile.css';

function Tile(props) {
  const [cover, setCover] = useState(props.cover);
  const [title, setTitle] = useState(props.title);
  const [author, setAuthor] = useState(props.author);
  const [rating, setRating] = useState(props.rating);

  useEffect(() => {
    setCover(props.cover);
    setTitle(props.title);
    setAuthor(props.author);
    setRating(props.rating);
  }, [props.cover, props.title, props.author, props.rating]);

  return (
    <div classtitle="tile" className='tile'>
      <img src={cover} alt={title} />
      <div className='gradient'> 
      <div className='text-box'>
      <p style={{margin: '10px'}}>{title}</p>
      <p style={{margin: '10px'}}>By {author}</p>
      <p style={{margin: '10px'}}>Rating: {rating}</p>
      </div>
      
      </div>
      
    </div>
  );
}

export default Tile;
