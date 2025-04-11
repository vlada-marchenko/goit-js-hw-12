import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"

export const gallery = document.querySelector('.gallery')
export let lightbox = new SimpleLightbox('.gallery a')

export default function createMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
    `
    <li class="pic">
      <a href="${largeImageURL}" target="_blank">
        <div class="pic-card">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" width="100%" height="220px"/>
          <div class="info">
            <p class="info-item"><b> <span>Likes</span></b> ${likes}</p>
            <p class="info-item"><b> <span>Views</span></b> ${views}</p>
            <p class="info-item"><b> <span>Comments</span></b> ${comments}</p>
            <p class="info-item"><b> <span>Downloads</span></b> ${downloads}</p>
          </div>
        </div>
      </a>
    </li>
    `
    ).join(''); 
}


export function renderGallery(arr) {
  const markup = createMarkup(arr);
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}