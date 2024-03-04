'use client';

import React, { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface AdsItemLikeProps {
  id: string;
}

const AdsItemLike: React.FC<AdsItemLikeProps> = ({ id }) => {
  const [liked, setLiked] = useState(false);

  const likeAdsItem = (
    e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (liked) {
      localStorage.removeItem(id);
      setLiked(false);
      return;
    }

    setLiked(true);
    localStorage.setItem(id, 'like');
  };

  useEffect(() => {
    setLiked(!!localStorage.getItem(id));
  }, [id]);

  return (
    <IconButton
      aria-label="like"
      size="small"
      disableRipple
      onClick={likeAdsItem}
    >
      {liked ? (
        <FavoriteIcon fontSize="inherit" />
      ) : (
        <FavoriteBorderIcon fontSize="inherit" />
      )}
    </IconButton>
  );
};

export default AdsItemLike;
