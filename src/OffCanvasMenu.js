import React, { useState } from 'react';

function OffCanvasMenu() {
  // Declare a new state variable, which we'll call "open"
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div>
      {/* Render a hamburger icon that toggles the menu open or closed when clicked */}
      <button onClick={handleClick} className="hamburgerButton">
        <i className="hamburger"></i>
      </button>

      {/* Render the menu */}
      <nav className={open ? 'open' : ''}>
        <div className='close' onClick={handleClick}>
          {open ? 'x' : ''}
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Add some styles to position the menu off the canvas and slide it in when activated */}
      <style>{`
        ul {
          list-style: none;
        }

        .close {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 30px;
          cursor: pointer;
        }

        nav {
          position: fixed;
          top: 0;
          left: -100%;
          width: 80%;
          height: 100%;
          background: white;
          transition: left 0.5s;
        }

        nav.open {
          left: 0;
        }
        .hamburgerButton {
          position: fixed;
          top: 0;
          left: 0;
        }

        .hamburger {
          display: block;
          cursor: pointer;
        }
        
        .hamburger::before,
        .hamburger::after {
          content: '';
          width: 25px;
          height: 3px;
          background: #333;
          display: block;
        }
        
        .hamburger::before {
          margin-bottom: 3px;
        }
        
       
        
        
        
        
        
      `}</style>
    </div>
  );
}

export default OffCanvasMenu;