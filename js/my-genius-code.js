import imgArr from "./gallery-items.js";

const imagesGridEl = imgArr.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}"
  data-source="${original}"
  />
  </a>
  </li>`
}).join('');

const galleryEl = document.querySelector(".js-gallery");
galleryEl.addEventListener('click', openModal)
galleryEl.insertAdjacentHTML("beforeend", imagesGridEl);
const fullSizeImgEl = document.querySelector('lightbox__image')
const fullImg = document.querySelector('[data-source]')

const modalEl = document.querySelector('.js-lightbox')
// отрытие модалки
function openModal(evt) {
  evt.preventDefault()
  if (evt.target.nodeName !== "IMG") {
    return
  }
  modalEl.classList.add('is-open')

  if (modalEl.classList.contains("is-open")) {
    fullSizeImgEl.setAttribute('src')
  }
}


// закрытие модалки
const closeButtonModalEl = document.querySelector('.lightbox__button')
closeButtonModalEl.addEventListener('click', closeModal)

function closeModal() {
 modalEl.classList.remove('is-open')
}

