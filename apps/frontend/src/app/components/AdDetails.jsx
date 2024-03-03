import React, { useState } from 'react';
import AdCard from './AdCard';
import FiltersDialog from './FiltersDialog';
import { Link } from 'react-router-dom';

const AdsList = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [likedAds, setLikedAds] = useState(
    JSON.parse(localStorage.getItem('likedAds')) || []
  );

  const ads = [
    { id: 1, title: 'Ad Title 1', city: 'City A', price: '$100', liked: false },
    { id: 2, title: 'Ad Title 2', city: 'City B', price: '$150', liked: false },
  ];

  const handleLikeClick = (id) => {
    const updatedAds = ads.map((ad) =>
      ad.id === id ? { ...ad, liked: !ad.liked } : ad
    );
    setLikedAds(updatedAds.filter((ad) => ad.liked));
    localStorage.setItem('likedAds', JSON.stringify(likedAds));
  };

  return (
    <div>
      <center>
        <h1>List of ads</h1>
        <button onClick={() => setFiltersOpen(true)}>Filters</button>
      </center>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          padding: '20px',
        }}
      >
        {ads.map((ad) => (
          <AdCard key={ad.id} ad={ad} onLikeClick={handleLikeClick} />
        ))}
      </div>
      <FiltersDialog open={filtersOpen} onClose={() => setFiltersOpen(false)} />
    </div>
  );
};

export default AdsList;
