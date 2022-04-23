import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')


function createImagesMarkup(imgArray) {
    return imgArray.map(({ preview, original, description }) => {
        const linkEl = createLink(original);

        const imageEl = createImg(preview, original, description)
        
        linkEl.append(imageEl);

        return linkEl;
    })
}

galleryEl.append(...createImagesMarkup(galleryItems))

galleryEl.addEventListener('click', onOpenModal)

// -------------SIDE-FUNCTIONS --------------


function onOpenModal(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    
    const parrentEl = evt.target.parentNode.href;

    const modalImg = basicLightbox.create(`
        <img src="${parrentEl}" width="800" height="600">
    `)

    modalImg.show(modalImg)

}

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
}

















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