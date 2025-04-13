import request, { input, page, totalPages, resetPage, incrementPage } from "./js/pixabay-api.js";
import { 
    renderGallery, 
    clearGallery
  } from './js/render-functions.js'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import "simplelightbox/dist/simple-lightbox.min.css";

// const button_search = document.querySelector('.button')
const form = document.querySelector('.form')
const loader = document.querySelector('.loader')
let btnLoad = document.querySelector('.btn')
let query = ''
let currentPage = 1;


form.addEventListener('submit', handleSubmit)
btnLoad.addEventListener('click', handleClick)

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

    if (!query) {
        hideElement(loader)
        return
    }

    clearGallery()
    // currentPage = 1;
    resetPage()
    // currentPage = 1

        try {
            const { hits, totalHits } = await request(query, page)

        if (!hits.length) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: "bottomRight"
            });
            hideElement(btnLoad)
            return
        } 

        renderGallery(hits)

        
        // const totalPages = Math.ceil(data.totalHits / perPage)

        if (page < totalPages) {
            showElement(btnLoad)
        } else {
            hideElement(btnLoad)
        }


    } catch (err) {
        console.error(err)
        hideElement(btnLoad)
    } finally {
        hideElement(loader)
        // form.reset()
    }


}

async function handleClick() {
    showElement(loader)
    incrementPage()

    try {
        const { hits } = await request(query, page)

        if (!hits.length) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "bottomRight"
            })
            hideElement(btnLoad)
            return
        }

        renderGallery(hits)
        scroll()

        // const totalPages = Math.ceil(data.totalHits / perPage)

        if (page  >= totalPages) {
            hideElement(btnLoad)
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "bottomRight"
            });
        }

    } catch (err) {
        console.error(err)
        hideElement(btnLoad)
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
