import request, { input, page, perPage, totalPages, resetPage } from "./js/pixabay-api.js";
import createMarkup, { gallery } from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const button = document.querySelector('.button')
const form = document.querySelector('.form')
const loader = document.querySelector('.loader')
let lightbox = new SimpleLightbox('.gallery a')
let btn = document.querySelector('.btn')
let query = ''

form.addEventListener('submit', handleSubmit)
btn.addEventListener('click', handleClick)


async function handleSubmit(evt) {
    evt.preventDefault()

    loader.style.display = 'block'
    query = input.value.trim()
    gallery.innerHTML = ''
    resetPage()

        try {
        const data = await request(query)

        if (data.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: "bottomRight"
            });
            btn.style.display = 'none'
            return
        } 

        gallery.insertAdjacentHTML('beforeend', createMarkup(data));
        lightbox.refresh(); 


        if (page > 1) {
            btn.style.display = 'block'
        }


    } catch (err) {
        console.error(err)
    } finally {
        loader.style.display = 'none'
    }

    form.reset()
}

async function handleClick() {
    loader.style.display = 'block'


    try {
        const data = await request(query)

        if (!data.length) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "bottomRight"
            })
            btn.style.display = 'none'
        }

        gallery.insertAdjacentHTML('beforeend', createMarkup(data))
        lightbox.refresh()

        scroll()

        if((page - 1) >= totalPages) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "bottomRight"
            })
            btn.style.display = 'none'
        }

    } catch (err) {
        console.error(err)
    } finally {
        loader.style.display = 'none'
    }
}

function scroll() {
    const pic = document.querySelectorAll('.pic');


    if (pic.length > 0) {
        const rect = pic[0].getBoundingClientRect().height; 

        window.scrollBy({
            top: rect * 2, 
            behavior: 'smooth' 
        });
    }
}
