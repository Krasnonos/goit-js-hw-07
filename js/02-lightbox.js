import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryLestEl = document.querySelector('.gallery')

function createImagesMarkup (imgArray) {
    return imgArray.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('')
}

galleryLestEl.innerHTML = createImagesMarkup(galleryItems);

// -----------------MODAL-FUNCTION-----------------

// galleryLestEl.addEventListener('click', onOpenModal);

// function onOpenModal(evt) {
//     evt.preventDefault()

//     const lightbox = new SimpleLightbox('.gallery a', { /* options */ });
// }