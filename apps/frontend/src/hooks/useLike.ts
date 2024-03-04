import { MouseEventHandler, useCallback, useState } from 'react';
import { getLike, setLike } from '../utils/likeHelper';

const useLike = (id: number) => {
  const [isLiked, setIsLiked] = useState(getLike(id));

  const onLike = useCallback<MouseEventHandler>((e) => {
    e?.preventDefault();
    e?.stopPropagation();

    const currentLiked = getLike(id);

    setLike(id, !currentLiked);
    setIsLiked(!currentLiked);
  }, [id]);

  return {
    isLiked,
    onLike
  };
};

export default useLike;
