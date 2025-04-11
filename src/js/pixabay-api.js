import axios from "axios"
import createMarkup, { gallery } from './render-functions.js';

export const input = document.querySelector('.input')
export let page = 1
export let perPage = 15
export let totalPages = 0

export function resetPage() {
    page = 1
}

const api_key = __PIXABAY_API_KEY__


export default async function request(query, currentPage) {
    if(!query) {
        return Promise.resolve([])
    }

    // if (totalPages !== 0 && currentPage > totalPages) {
    //     return Promise.resolve([]);
    // }

    try {
    const fetch = await axios.get('https://pixabay.com/api/', {
        params: {
        key: api_key,
        q: query.toLowerCase(),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: currentPage,
        per_page: perPage
        }
    })

    const totalHits = fetch.data.totalHits
    totalPages = Math.ceil(totalHits / perPage)

    //  if (currentPage > totalPages) {
    //   return []
    // }

    return fetch.data.hits
} catch(err)  {
        return []
}
}