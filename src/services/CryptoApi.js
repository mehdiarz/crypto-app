const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-FM8J85wKLFwo7LLYPaXBfic4";

const getCoinList = (page = 1) => {
  return fetch(
    `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}`,
    {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'x-cg-demo-api-key': API_KEY
      }
    }
  );
};

export { getCoinList };