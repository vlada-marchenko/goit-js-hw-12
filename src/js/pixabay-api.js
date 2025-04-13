import axios from "axios"

export const input = document.querySelector('.input')
export let page = 1
export let perPage = 15
export let totalPages = 0

export function resetPage() {
    page = 1
    totalPages = 0
}

const api_key = '48786073-6183322621e5d0cfd6fc221bb'


export default async function request(query, currentPage) {
    if(!query) {
        return Promise.resolve({ hits: [], totalHits: 0 });
        // return Promise.resolve(null)
    }

    // if (totalPages && currentPage > totalPages) {
    //     return Promise.resolve([]);
    // }

    // if (totalPages && currentPage > totalPages) {
    //     return { hits: [], totalHits: 0 };
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

    const { totalHits, hits } = fetch.data;
    totalPages = Math.ceil(totalHits / perPage);

    // if (currentPage > totalPages && totalPages !== 0) {
    //     return { hits: [], totalHits };
    //   }

    // const totalHits = fetch.data.totalHits
    // totalPages = Math.ceil(totalHits / perPage)

    //  if (currentPage > totalPages) {
    //   return []
    // }

    return { hits, totalHits }
} catch(err)  {
        console.error('API request failed:', err)
        return { hits: [], totalHits: 0 }
}
}

export function incrementPage() {
    page += 1;
}