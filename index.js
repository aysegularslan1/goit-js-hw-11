import{a as l,S as u,i as c}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const d="50461526-1c4ae7086be4914a89297c276",p="https://pixabay.com/api/";async function m(r){try{return(await l.get(p,{params:{key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(o){throw new Error("API isteği başarısız: "+o.message)}}const f=document.querySelector("#results-container");let a=null;function y(r){const o=r.hits.map(t=>`
    
      <a class="image-card" href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
        <div class="image-info">
          <p class="tags">Tags: ${t.tags}</p>
          <div class="stats">
            <span>👍 ${t.likes}</span>
            <span>👁️ ${t.views}</span>
            <span>💬 ${t.comments}</span>
            <span>⬇️ ${t.downloads}</span>
          </div>
        </div>
      </a>
    
  `).join("");f.insertAdjacentHTML("beforeend",o),a?a.refresh():a=new u("#results-container a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function g(){const r=document.querySelector("#results-container");r.innerHTML=""}function h(){const r=document.getElementById("loader");r.style.display="block"}function L(){const r=document.getElementById("loader");r.style.display="none"}const b=document.querySelector(".form"),w=document.querySelector(".search-input");b.addEventListener("submit",async r=>{r.preventDefault();const o=w.value.trim();if(o){h(),g();try{const t=await m(o);if(t.hits.length===0){c.warning({title:"Uyarı",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t)}catch{c.error({title:"Hata",message:"Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.",position:"topRight"})}finally{L()}}});
//# sourceMappingURL=index.js.map
