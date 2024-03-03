const setToLS = (token: string, data: string) => {
  localStorage.setItem(token, data);
};

const getFromLS = (token: string) => localStorage.getItem(token);

const localStorageService = {
  setToLS,
  getFromLS
};

export default localStorageService;
