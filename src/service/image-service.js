import axios from 'axios';

const API_KEY = 'Kw42wdFEGRga2bDGZKt7cBUvo6PXYscrJDC0KphTXMfH8ubNAHVgXLk4';

axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const response = await axios.get(`search?query=${query}&page=${page}`);

  return response.data;
};
