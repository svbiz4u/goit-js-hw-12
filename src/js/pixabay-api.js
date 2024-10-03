export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '46275525-feefee5c0dcabc611e373a7fd';

export function fetchData(query) {
    return fetch(
      `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&per_page=15&safesearch=true&orientation=horizontal`
    ).then(responce => {
      if (!responce.ok) {
        throw new Error(response.statusText);
      }
      return responce.json();
    });
  }



//   import axios from "axios";



//     import axios from "axios";

// axios.get('https://pixabay.com/api/')
// 	.then(response => {
// 		console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	})

