import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const modalImgEl =document.querySelector('.basicLightbox basicLightbox--img')


function createImagesMarkup(imgArray) {
    return imgArray.map(({ preview, original, description }) => {
        const linkEl = createLink(original);

        const imageEl = createImg(preview, original, description)
        
        linkEl.append(imageEl);

        return linkEl;
    })
};

function createLink (href) {
    const linkEl = document.createElement('a')
        linkEl.classList.add('gallery__link');
        linkEl.href = href;
    return linkEl;
};

function createImg (src, data, alt) {
    const imageEl = document.createElement('img');
        imageEl.classList.add('gallery__image')
        imageEl.src = src;
        imageEl.dataset.source = data;
        imageEl.alt = alt;
    return imageEl;
};

galleryEl.append(...createImagesMarkup(galleryItems));



// -------------MODAL-FUNCTIONS --------------

galleryEl.addEventListener('click', onOpenModal);

let modalImg = null;

function onOpenModal(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    
    const parrentEl = evt.target.parentNode.href;

    modalImg = basicLightbox.create(`
        <img src="${parrentEl}" width="800" height="600">
    `)

    modalImg.show(modalImg);

    document.addEventListener('keydown', onCloseModal)
};

function onCloseModal(evt) {
    evt.preventDefault();

    if (evt.code === 'Escape') {
        modalImg.close();
    };

    document.removeEventListener('keydown', onCloseModal);
};

















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