import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')


function createImagesMarkup(imgArray) {
    return imgArray.map(({ preview, original, description }) => {
        const linkEl = document.createElement('a')
        linkEl.classList.add('gallery__link');
        linkEl.href = original;

        const imageEl = document.createElement('img');
        imageEl.classList.add('gallery__image')
        imageEl.src = preview;
        imageEl.dataset.source = original;
        imageEl.alt = description;

        linkEl.append(imageEl);

        return linkEl;
    })
}

galleryEl.append(...createImagesMarkup(galleryItems))












// function createImagesMarkup(imgArray) {
//     return imgArray.map(({ preview, original, description }) => {
//         const linkEl = document.createElement('a');
//         linkEl.classList.add('gallery__link');
//         linkEl.href = original;
        
//         const imageEl = document.createElement('img');
//         imageEl.classList.add('gallery__image')
//         imageEl.src = preview;
//         imageEl.dataset.source = original;
//         imageEl.alt = description;


//         linkEl.append(imageEl);
        
//         return linkEl;
//    })
    
// }

// galleryEl.append(...createImagesMarkup(galleryItems))