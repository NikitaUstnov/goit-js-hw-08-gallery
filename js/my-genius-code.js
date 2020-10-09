import imgArr from "./gallery-items.js";

const imagesGridEl = imgArr.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}"
  data-source="${original}"
  />
  </a>
  </li>`
}).join('');
// 
const galleryEl = document.querySelector(".js-gallery");
galleryEl.addEventListener('click', openModal)
galleryEl.insertAdjacentHTML("beforeend", imagesGridEl);
  
function openModal(evt) {
  if (evt.target.nodeName !== "IMG") {
    return
  }
      console.log(evt.target.alt)
}




const modalEl = document.querySelector(".js-lightbox")
const closeButtonModalEl = document.querySelector('.lightbox__button')

closeButtonModalEl.addEventListener('click', closeModal)
function closeModal() {
 modalEl.classList.remove('.is-open')
}



// const listImgEl = document.querySelector('.gallery__item')
// listImgEl.addEventListener("click", openModal)

// function openModal() {
//  modalEl.classList.add("is-open")
  
// }

