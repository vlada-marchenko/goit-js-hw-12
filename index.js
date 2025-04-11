import{S,a as q,i as d}from"./assets/vendor-CiduK07e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const g=document.querySelector(".gallery");let P=new S(".gallery a");function $(e){return e.map(({webformatURL:r,largeImageURL:n,tags:i,likes:t,views:o,comments:c,downloads:L})=>`
    <li class="pic">
      <a href="${n}" target="_blank">
        <div class="pic-card">
          <img src="${r}" alt="${i}" loading="lazy" width="100%" height="220px"/>
          <div class="info">
            <p class="info-item"><b> <span>Likes</span></b> ${t}</p>
            <p class="info-item"><b> <span>Views</span></b> ${o}</p>
            <p class="info-item"><b> <span>Comments</span></b> ${c}</p>
            <p class="info-item"><b> <span>Downloads</span></b> ${L}</p>
          </div>
        </div>
      </a>
    </li>
    `).join("")}function b(e){const r=$(e);g.insertAdjacentHTML("beforeend",r),P.refresh()}const O=document.querySelector(".input");let m=1,y=15,h=0;function x(){m=1}const E="48786073-6183322621e5d0cfd6fc221bb";async function v(e,r){if(!e)return Promise.resolve([]);try{const n=await q.get("https://pixabay.com/api/",{params:{key:E,q:e.toLowerCase(),image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:y}}),i=n.data.totalHits;return h=Math.ceil(i/y),n.data.hits}catch{return[]}}document.querySelector(".button");const w=document.querySelector(".form"),u=document.querySelector(".loader");let s=document.querySelector(".btn"),f="",l=1;w.addEventListener("submit",M);s.addEventListener("click",_);function p(e){e.style.display="block"}function a(e){e.style.display="none"}async function M(e){e.preventDefault(),p(u),f=O.value.trim(),g.innerHTML="",l=1,x();try{const r=await v(f,l);if(r.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),a(s);return}b(r),m<=h?p(s):a(s),l+=1}catch(r){console.error(r)}finally{a(u)}w.reset()}async function _(){p(u);try{const e=await v(f,l);if(!e.length){d.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}),a(s);return}b(e),k(),m>h&&(d.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}),a(s)),l+=1}catch(e){console.error(e)}finally{a(u)}}function k(){const e=document.querySelectorAll(".pic");if(e.length>0){const r=e[0].getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
