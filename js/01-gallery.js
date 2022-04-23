import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')


function createImagesMarkup(imgArray) {
    return imgArray.map(({preview, original, description}) => {
        const image = document.createElement('img');

        image.src = preview;
        image.dataset.fullSrc = original;
        image.classList.add('gallery__image')
        image.alt = description;

        return image;
    })
}

galleryEl.append(...createImagesMarkup(galleryItems))
