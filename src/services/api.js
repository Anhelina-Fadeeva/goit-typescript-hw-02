import axios from 'axios';

const ACCESS_KEY = 'gfp5wQivCaobZS9Tg74LLGaDhsOUkU7zBFzc4097o7Y';

export const fetchArticles = async (page = 1, query) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&page=${page}&query=${query}`
  );

  return data;
};