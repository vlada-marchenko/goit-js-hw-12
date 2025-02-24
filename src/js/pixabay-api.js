import axios from "axios"
import createMarkup, { gallery } from './render-functions.js';

export const input = document.querySelector('.input')
export let page = 1
export let perPage = 40
export let totalPages = 0

export function resetPage() {
    page = 1
}


export default async function request(query) {
    if(!query) {
        return Promise.resolve([])
    }

    try {
    const fetch = await axios.get('https://pixabay.com/api/', {
        params: {
        key: '48786073-6183322621e5d0cfd6fc221bb',
        q: query.toLowerCase(),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: perPage
        }
    })

    const totalHits = fetch.data.totalHits
    totalPages = Math.ceil(totalHits / perPage)

     if (page > totalPages) {
      return []
    }

    page += 1
    return fetch.data.hits
} catch(err)  {
        return []
}
}