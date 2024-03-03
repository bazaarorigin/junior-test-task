import React from 'react';
import { Link } from 'react-router-dom';

const AdsList = ({ ad, onLikeClick }) => {
  return (
    <div
      style={{
        width: '250px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
      }}
    >
      <Link to={`/ads/${ad.id}`}>
        <img
          src={`thumbnail-url-for-${ad.id}`}
          alt={`Thumbnail for ${ad.title}`}
          style={{ width: '250px' }}
        />
      </Link>
      <div style={{ textAlign: 'center' }}>
        <p>{ad.title}</p>
        <p>{ad.city}</p>
        <p>{ad.price}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => onLikeClick(ad.id)} style={{ color: ad.liked ? 'red' : 'black' }}>
          Like
        </button>
      </div>
    </div>
  );
};

export default AdsList;
