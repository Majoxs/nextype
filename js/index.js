// Tabs for Section Blog

const tabs = () => {
  const tabHeader = document.querySelector('.blog__tabs-nav');
  const tabs = tabHeader.querySelectorAll('.tabs-nav__tab');
  const tabContent = document.querySelectorAll('.blog__tab');

  const toggleTabContent = index => {
    tabContent.forEach((item, i) => {
      if (index === i) {
        tabs[i].classList.add('active');
        item.classList.add('active');
      } else {
        tabs[i].classList.remove('active');
        item.classList.remove('active');
      }
    });
  };

  tabHeader.addEventListener('click', e => {
    let target = e.target;
    target = target.closest('.tabs-nav__tab');

    if (target) {
      tabs.forEach((item, i) => {
        if (item === target) {
          toggleTabContent(i);
        }
      });
    }
  })  
}

tabs();

// Swiper slider

const slider = document.querySelector('.swiper');

if (slider) {
  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      690: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    }
  });
}