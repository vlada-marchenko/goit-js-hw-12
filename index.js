import{a as L,S,i as u}from"./assets/vendor-CQ2WEMzV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const d=document.querySelector(".pics");function m(r){return r.map(({webformatURL:t,largeImageURL:n,tags:c,likes:e,views:o,comments:i,downloads:v})=>`
    <li class="pic">
      <a href="${n}" target="_blank">
        <div class="pic-card">
          <img src="${t}" alt="${c}" loading="lazy" width="100%" height="220px"/>
          <div class="info">
            <p class="info-item"><b> <span>Likes</span></b> ${e}</p>
            <p class="info-item"><b> <span>Views</span></b> ${o}</p>
            <p class="info-item"><b> <span>Comments</span></b> ${i}</p>
            <p class="info-item"><b> <span>Downloads</span></b> ${v}</p>
          </div>
        </div>
      </a>
    </li>
    `).join("")}const q=document.querySelector(".input");let s=1,y=40,p=0;function w(){s=1}async function h(r){if(!r)return Promise.resolve([]);try{const t=await L.get("https://pixabay.com/api/",{params:{key:"48786073-6183322621e5d0cfd6fc221bb",q:r.toLowerCase(),image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:y}}),n=t.data.totalHits;return p=Math.ceil(n/y),s>p?[]:(s+=1,t.data.hits)}catch{return[]}}document.querySelector(".button");const g=document.querySelector(".form"),l=document.querySelector(".loader");let b=new S(".pics a"),a=document.querySelector(".btn"),f="";g.addEventListener("submit",P);a.addEventListener("click",$);async function P(r){r.preventDefault(),l.style.display="block",f=q.value.trim(),d.innerHTML="",w();try{const t=await h(f);if(t.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),a.style.display="none";return}d.insertAdjacentHTML("beforeend",m(t)),b.refresh(),s>1&&(a.style.display="block")}catch(t){console.error(t)}finally{l.style.display="none"}g.reset()}async function $(){l.style.display="block";try{const r=await h(f);r.length||(u.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}),a.style.display="none"),d.insertAdjacentHTML("beforeend",m(r)),b.refresh(),M(),s-1>=p&&(u.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}),a.style.display="none")}catch(r){console.error(r)}finally{l.style.display="none"}}function M(){const r=document.querySelectorAll(".pic");if(r.length>0){const t=r[0].getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
