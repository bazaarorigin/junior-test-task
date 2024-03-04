export const getLike = (id: number) => window.localStorage.getItem(`${id}`) === "true";

export const setLike = (id: number, isLiked: boolean) => {
  window.localStorage.setItem(`${id}`, String(isLiked));
};
