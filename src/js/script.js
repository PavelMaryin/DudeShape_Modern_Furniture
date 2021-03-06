
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

@@include('../../node_modules/swiper/swiper-bundle.js');


new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'

  },
  slidesPerView: 3,
  spaceBetween: 30,
});

// tabs

let tabMenu = function() {
  const tabItems = Array.from(document.querySelectorAll('.all-furniture__item-btn'));
  const contentItems = Array.from(document.querySelectorAll('.all-furniture__tab-item'));
  
  const clearActiveClass = (element, className = 'tab-active') => {
    element.find(item => item.classList.remove(`${className}`))
  }
  
  const setActiveClass = (element, index, className = 'tab-active') => {
    element[index].classList.add(`${className}`)
  }
  
  const checkoutTabs = (item, index) => {
    item.addEventListener('click', () => {
  
      if (item.classList.contains('tab-active')) return
  
      // console.log(item)
  
      clearActiveClass(tabItems);
      clearActiveClass(contentItems);
  
      setActiveClass(tabItems, index);
      setActiveClass(contentItems, index);
    })
  }
  
  tabItems.forEach(checkoutTabs);

};


tabMenu();



let btnImg = function() {
  const btnImage = Array.from(document.querySelectorAll('.all-furniture__room-btn'));
  const contentImage = Array.from(document.querySelectorAll('.all-furniture__image-item'));
  
  const clearActiveClassImg = (element, className = 'image-active') => {
    element.find(item => item.classList.remove(`${className}`))
  }
  
  const setActiveClassImg = (element, index, className = 'image-active') => {
    element[index].classList.add(`${className}`)
  }
  
  const checkoutTabsImg = (item, index) => {
    item.addEventListener('click', () => {
  
      if (item.classList.contains('image-active')) return
  
      // console.log(item)
  
      clearActiveClassImg(btnImage);
      clearActiveClassImg(contentImage);
  
      setActiveClassImg(btnImage, index);
      setActiveClassImg(contentImage, index);
    })
  }
  
  btnImage.forEach(checkoutTabsImg);

};
btnImg();

