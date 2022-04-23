import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery')

function createImagesMarkup (imgArray) {
    return imgArray.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`
    }).join('')
}

galleryListEl.innerHTML = createImagesMarkup(galleryItems);

// -----------------MODAL-FUNCTION-----------------

galleryListEl.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    };

    let gallery = new SimpleLightbox('.gallery__item', {
        captionDelay: 250,
        overlayOpacity: 0.5,
    });

    document.addEventListener('keydown', onCloseModal)
};

function onCloseModal(evt) {
    evt.preventDefault();

    if (evt.code === 'Escape') {
        closed.simplelightbox
    };

    document.removeEventListener('keydown', onCloseModal);
};











// galleryListEl.addEventListener('click', onOpenModal);

// function onOpenModal(evt) {
//     evt.preventDefault()

//     const currentImg = evt.target.nodeName;

//     if (currentImg !== 'IMG') {
//         return;
//     }

//     const aEl = evt.target.parentNode;
// // console.log(aEl.attributes);
//     let gallery = new SimpleLightbox('gallery__item');
// gallery.on('show.simplelightbox', function () {
// console.log('do');});
// }

// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// console.log(to do)});

// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); // some usefull information
// });