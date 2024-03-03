import React, { useState } from 'react';

const FiltersDialog = ({ open, onClose }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [search, setSearch] = useState('');

  const handleApplyFilters = () => {
    console.log('Filters applied:', { minPrice, maxPrice, city, district, search });
    onClose();
    useEffect(() => {
      minPrice
      return () => {
        setMinPrice(
          console.log(minPrice)
        )
      }
    }, [])

    useEffect(() => {
      city
      return () => {
        setCity(
          console.log(city)
        )
      }
    }, [])

    useEffect(() => {
      district
      return () => {
        setDistrict(
          console.log(district)
        )
      }
    }, [])

    useEffect(() => {
      search
      return () => {
        setSearch(
          console.log(search)
        )
      }
    }, [])
  };

  return (
    open && (
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          background: '#fff',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
        }}
      >
        <h2>Filters</h2>
        <button onClick={handleApplyFilters}>Apply Filters</button>
        <button onClick={onClose}>Close</button>
      </div>
    )
  );
};

export default FiltersDialog;
