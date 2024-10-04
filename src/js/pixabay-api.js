import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46275525-feefee5c0dcabc611e373a7fd';

export async function fetchData(query, page, perPage) {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        per_page: perPage,
        page: page,
        safesearch: true,
        orientation: 'horizontal',
      },
    });
    return response.data;
  }