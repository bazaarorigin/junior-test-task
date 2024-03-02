// LikeButton.js
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React,{ useState, useEffect } from 'react';

export const getLikes = () => new Set(JSON.parse(localStorage.getItem('likes') || '[]'));

export const LikeButton = ({ adId }) => {
  const [liked, setLiked] = useState(getLikes().has(adId));

  useEffect(() => {
    setLiked(getLikes().has(adId));
  }, [adId]);

  const handleLike = () => {
    const likes = getLikes();
    if (likes.has(adId)) {
      likes.delete(adId);
    } else {
      likes.add(adId);
    }
    localStorage.setItem('likes', JSON.stringify([...likes]));
    setLiked(likes.has(adId));
  };

  return (
    <IconButton onClick={handleLike} color={liked ? 'error' : 'default'}>
      <FavoriteIcon />
    </IconButton>
  );
};
