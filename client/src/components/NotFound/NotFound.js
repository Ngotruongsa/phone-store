import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound(prop) {
  return (
    <main className='not-found-main'>
      <h1 className='not-found-title'>404</h1>
      <div className='not-found-message'>Page Not Found</div>
      <button className='not-found-button'>
        <Link
          to='/'
          className='not-found-link'
        >
          <span className='not-found-link-bg' />
          <span className='not-found-link-text'>
            <span>Go Home</span>
          </span>
        </Link>
      </button>
    </main>
  );
}

export default NotFound;
