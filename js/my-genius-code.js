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

const phtoDescrEl = function a() {
  return `<span class="photo-descr">${description}<span>`
}
const galDecscr = document.querySelector('.lightbox__content')
galDecscr.insertAdjacentHTML('beforeend', phtoDescrEl)

const galleryEl = document.querySelector(".js-gallery");
galleryEl.addEventListener('click', openModal)
galleryEl.insertAdjacentHTML("beforeend", imagesGridEl);
const fullSizeImgEl = document.querySelector('.lightbox__image')
const modalEl = document.querySelector('.js-lightbox')


// отрытие модалки
function openModal(evt) {
  evt.preventDefault()
  if (evt.target.nodeName !== "IMG") {
    return
  }
  modalEl.classList.add('is-open')

  if (modalEl.classList.contains("is-open")) {
      fullSizeImgEl.src = evt.target.dataset.source;
    fullSizeImgEl.alt = evt.target.alt;
    window.addEventListener('keydown', keyboardPress)
  }

}
// закрытие модалки
const closeButtonModalEl = document.querySelector('.lightbox__button')
closeButtonModalEl.addEventListener('click', closeModal)

function closeModal() {
  modalEl.classList.remove('is-open')
  
  fullSizeImgEl.src = '';
      fullSizeImgEl.alt = '';
}

// закрытие модалки по клику на оверлей
const closeModalTromOverlay = document.querySelector('.lightbox__overlay')
closeModalTromOverlay.addEventListener('click', closeModalOverlayFn)

function closeModalOverlayFn() {
   modalEl.classList.remove('is-open')
}

//закрытие по escape
window.addEventListener('keydown', onBtnPress)

function onBtnPress(e) {
  if (e.key ===	"Escape") {
    modalEl.classList.remove('is-open')
  }
}

// листалка  пока не работает

const UrlsArr = imgArr.map((el) => el.original);
function keyboardPress(event) {
  if (event.code === "ArrowRight") {
    for (let i = 0; i < UrlsArr.length; i += 1) {
      if (fullSizeImgEl.src === UrlsArr[8]) {
        fullSizeImgEl.src = `${UrlsArr[0]}`;
        return;
      } else if (fullSizeImgEl.src === UrlsArr[i]) {
        fullSizeImgEl.src = `${UrlsArr[i + 1]}`;
        return;
      }
    }
  } else if (event.code === "ArrowLeft") {
    for (let i = 0; i < UrlsArr.length; i += 1) {
      if (fullSizeImgEl.src === UrlsArr[0]) {
        fullSizeImgEl.src = `${UrlsArr[8]}`;
        return;
      } else if (fullSizeImgEl.src === UrlsArr[i]) {
        fullSizeImgEl.src = `${UrlsArr[i - 1]}`;
        return;
      }
    }
  }
}






// currentIndex = Array.from(
//       document.querySelector(".gallery__image")
//     ).indexOf(event.target);
// moveImages()
// {
//     this.modalImageRef.src = this.imagesArray[this.currentIndex].original;
//     this.modalImageRef.alt = this.imagesArray[this.currentIndex].description;
//   }
// moveRightLightbox()
// {
//     if (this.currentIndex === this.imagesArray.length - 1) {
//       this.currentIndex = -1;
//     }
//     this.currentIndex += 1;
//     this.moveImages();
//   }
// moveLeftLightbox()
// {
//     if (this.currentIndex === 0) {
//       this.currentIndex = this.imagesArray.length;
//     }
//     this.currentIndex -= 1;
//     this.moveImages();
//   }
