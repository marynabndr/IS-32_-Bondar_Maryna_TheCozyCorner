const images = [ 
    {
      preview: 'images/1.png',
      original: 'images/1.png',
      description: 'Image 1',
    },
    {
      preview: 'images/2.png',
      original: 'images/2.png',
      description: 'Image 2',
    },
    {
      preview: 'images/3.png',
      original: 'images/3.png',
      description: 'Image 3',
    },
    {
      preview: 'images/4.png',
      original: 'images/4.png',
      description: 'Image 4',
    },
    {
      preview: 'images/5.png',
      original: 'images/5.png',
      description: 'Image 5',
    },
    {
      preview: 'images/6.png',
      original: 'images/6.png',
      description: 'Image 6',
    },
    {
      preview: 'images/7.png',
      original: 'images/7.png',
      description: 'Image 7',
    },
    {
      preview: 'images/8.png',
      original: 'images/8.png',
      description: 'Image 8',
    },
  ];
  // Знаходимо контейнер галереї у HTML-документі за класом
  const galleryContainer = document.querySelector('.gallery');
  // Розмітка для галереї на основі масиву images
  const galleryMarkup = images
    .map( 
      ({ preview, original, description }) => `
    <li class="gallery__item">  
      <img 
        class="gallery__image" 
        src="${preview}" 
        data-source="${original}" 
        alt="${description}" 
      />
    </li>
  `
    )
    .join(''); // Об'єднуємо всі елементи розмітки в один рядок
  
  //замінює весь внутрішній вміст елемента .gallery на  HTML-код, який зберігається у змінній galleryMarkup
  galleryContainer.innerHTML = galleryMarkup;
  
  // Делегування подій
  galleryContainer.addEventListener('click', onGalleryClick);
  
  function onGalleryClick(event) {
    event.preventDefault();
  
    const isImage = event.target.classList.contains('gallery__image');
    if (!isImage) return;
  
    const largeImageURL = event.target.dataset.source;
  
    // Використання basicLightbox
    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" alt="${event.target.alt}" />
    `);
    instance.show();
  }
  
  
  
  
  
  