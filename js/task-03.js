const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const allListGallery = document.querySelector('#gallery');

const createNewTagsForGallery = ({ url, alt }) => {
  return `<li class="gallery__item"><img src="${url}" alt="${alt}" width = "320", height = "200" /></li>`;
};

const makeTransactionGallery = images.map(createNewTagsForGallery).join('');
// console.log(makeTransactionGallery);

allListGallery.insertAdjacentHTML('beforeend', makeTransactionGallery);