import request, { input, page, perPage, totalPages, resetPage } from "./js/pixabay-api.js";
import createMarkup, { gallery, renderGallery } from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import "simplelightbox/dist/simple-lightbox.min.css";

const button_search = document.querySelector('.button')
const form = document.querySelector('.form')
const loader = document.querySelector('.loader')
let btn_load = document.querySelector('.btn')
let query = ''
let currentPage = 1;

form.addEventListener('submit', handleSubmit)
btn_load.addEventListener('click', handleClick)

function showElement(element) {
    element.style.display = 'block'
}

function hideElement(element) {
    element.style.display = 'none'
}

async function handleSubmit(evt) {
    evt.preventDefault()

    showElement(loader)
    query = input.value.trim()
    gallery.innerHTML = ''
    currentPage = 1;
    resetPage()

        try {
        const data = await request(query, currentPage)

        if (data.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: "bottomRight"
            });
            hideElement(btn_load)
            return
        } 

        renderGallery(data);

        

        if (page <= totalPages) {
            showElement(btn_load)
        } else {
            hideElement(btn_load)
        }

        currentPage += 1;

    } catch (err) {
        console.error(err)
    } finally {
        hideElement(loader)
    }

    form.reset()
}

async function handleClick() {
    showElement(loader)


    try {
        const data = await request(query, currentPage)

        if (!data.length) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "bottomRight"
            })
            hideElement(btn_load)
            return
        }

        renderGallery(data);


        scroll()

        if(page > totalPages) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "bottomRight"
            })
            hideElement(btn_load)
        }

        currentPage += 1;

    } catch (err) {
        console.error(err)
    } finally {
        hideElement(loader)
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
