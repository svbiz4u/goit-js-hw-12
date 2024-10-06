import{a as w,i as d,S as b}from"./assets/vendor-CRCB-GUD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const q="https://pixabay.com/api/",S="46275525-feefee5c0dcabc611e373a7fd";async function g(r,s,l){return(await w.get(q,{params:{key:S,q:r,image_type:"photo",per_page:l,page:s,safesearch:!0,orientation:"horizontal"}})).data}function h(r){const s=document.querySelector(".gallery"),l=r.map(t=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}" download=false>
                <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img" width=360 onclick="return false" data-source="${t.largeImageURL}">
                <ul class="description">
                    <li>
                        <p>Likes</p>
                        <p class="description-value">${t.likes}</p>
                    </li>
                    <li>
                        <p>Views</p>
                        <p class="description-value">${t.views}</p>
                    </li>
                    <li>
                        <p>Comments</p>
                        <p class="description-value">${t.comments}</p>
                    </li>
                    <li>
                        <p>Downloads</p>
                        <p class="description-value">${t.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>
        `).join("");s.insertAdjacentHTML("beforeend",l)}function p(r){d.show({message:r})}function L(){document.querySelector(".loader").classList.remove("visually-hidden")}function f(){document.querySelector(".loader").classList.add("visually-hidden")}const y=document.querySelector(".form"),P=document.querySelector('input[name="query"]'),E=document.querySelector(".gallery"),i=document.querySelector(".load-more");d.settings({messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040",iconColor:"#fafafb",close:!1});let v=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),c="",n=1;const m=15;let a;y.addEventListener("submit",async r=>{if(r.preventDefault(),c=P.value.trim(),c===""){p("Please enter a search query.");return}i.classList.add("visually-hidden"),E.innerHTML="",n=1,L();try{if(a=await g(c,n,m),a.hits.length===0){p("Sorry, there are no images matching your search query. Please try again!"),f(),console.log("🚀 ~ form.addEventListener ~ images.hits.length:",a.hits.length);return}a.hits.length<15?i.classList.add("visually-hidden"):i.classList.remove("visually-hidden"),h(a.hits),v.refresh()}catch(s){d.error({title:"Error",message:s.message,position:"topRight"})}finally{f(),y.reset()}});i.addEventListener("click",async()=>{n+=1;try{i.classList.add("visually-hidden"),L(),a=await g(c,n,m),h(a.hits),v.refresh();const s=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({top:s*2,behavior:"smooth"}),a.total<=Math.ceil(n*m)){i.classList.add("visually-hidden"),p("We're sorry, but you've reached the end of search results.");return}i.classList.remove("visually-hidden")}catch(r){d.error({title:"Error",message:r.message,position:"topRight"})}finally{f()}});
//# sourceMappingURL=index.js.map
