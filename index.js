import{a as q,S as L,i as p}from"./assets/vendor-CiduK07e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const S=document.querySelector(".input");let c=1,h=15,d=0;function w(){c=1,d=0}const P="48786073-6183322621e5d0cfd6fc221bb";async function y(e,r){if(!e)return Promise.resolve({hits:[],totalHits:0});try{const i=await q.get("https://pixabay.com/api/",{params:{key:P,q:e.toLowerCase(),image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:h}}),{totalHits:a,hits:t}=i.data;return d=Math.ceil(a/h),{hits:t,totalHits:a}}catch(i){return console.error("API request failed:",i),{hits:[],totalHits:0}}}function $(){c+=1}const g=document.querySelector(".gallery");document.querySelector(".loader");document.querySelector(".load-more");let H=new L(".gallery a");function O(e){return e.map(({webformatURL:r,largeImageURL:i,tags:a,likes:t,views:o,comments:l,downloads:v})=>`
    <li class="pic">
      <a href="${i}" target="_blank">
        <div class="pic-card">
          <img src="${r}" alt="${a}" loading="lazy" width="100%" height="220px"/>
          <div class="info">
            <p class="info-item"><b> <span>Likes</span></b> ${t}</p>
            <p class="info-item"><b> <span>Views</span></b> ${o}</p>
            <p class="info-item"><b> <span>Comments</span></b> ${l}</p>
            <p class="info-item"><b> <span>Downloads</span></b> ${v}</p>
          </div>
        </div>
      </a>
    </li>
    `).join("")}function b(e){const r=O(e);g.insertAdjacentHTML("beforeend",r),H.refresh()}function x(){g.innerHTML=""}const E=document.querySelector(".form"),u=document.querySelector(".loader");let s=document.querySelector(".btn"),f="";E.addEventListener("submit",M);s.addEventListener("click",k);function m(e){e.style.display="block"}function n(e){e.style.display="none"}async function M(e){if(e.preventDefault(),m(u),f=S.value.trim(),!f){n(u);return}x(),w();try{const{hits:r,totalHits:i}=await y(f,c);if(!r.length){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),n(s);return}b(r),c<d?m(s):n(s)}catch(r){console.error(r),n(s)}finally{n(u)}}async function k(){m(u),$();try{const{hits:e}=await y(f,c);if(!e.length){p.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}),n(s);return}b(e),A(),c>=d&&(n(s),p.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}))}catch(e){console.error(e),n(s)}finally{n(u)}}function A(){const e=document.querySelectorAll(".pic");if(e.length>0){const r=e[0].getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
