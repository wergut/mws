const menuButton = document.querySelector('.popup-menu-btn');
const mainMenu = document.querySelector('.header-nav');
if (menuButton && mainMenu) {
  menuButton.onclick = function () {
    const isMenuOpen = mainMenu.classList.toggle('show');
    menuButton.classList.toggle('active');
    if (window.matchMedia('(max-width: 1024px)').matches) {
      document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }
    document.addEventListener('click', closeMenuOnClickOutside);
    function closeMenuOnClickOutside(event) {
      if (!mainMenu.contains(event.target) && !menuButton.contains(event.target)) {
        mainMenu.classList.remove('show');
        menuButton.classList.remove('active');
        if (window.matchMedia('(max-width: 1024px)').matches) {
          document.body.style.overflow = '';
        }
        document.removeEventListener('click', closeMenuOnClickOutside);
      }
    }
  };
}
const header = document.querySelector('header');
if (header) {
  const toggleScrolledClass = () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', toggleScrolledClass);
  toggleScrolledClass();
}
document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.open-modal-dialog'),
    overlay = document.querySelector('body'),
    closeButtons = document.querySelectorAll('.modal-dialog .modal-close');
  async function openModal(modalBtn) {
    return new Promise(resolve => {
      var modalId = modalBtn.getAttribute('data-src'),
        modalElem = document.querySelector('.modal-dialog.' + modalId);
      overlay.classList.add('modal-open');
      modalElem.style.display = 'flex';
      overlay.style.overflow = 'hidden';
      setTimeout(function () {
        modalElem.classList.add('modal-opening');
        resolve();
      }, 0);
    });
  }
  async function closeModal(closeBtn) {
    return new Promise(resolve => {
      var modal = closeBtn.closest('.modal-dialog');
      modal.classList.remove('modal-opening');
      modal.classList.add('modal-closing');
      overlay.style.overflow = 'initial';
      setTimeout(function () {
        modal.classList.remove('modal-closing');
        modal.style.display = 'none';
        overlay.classList.remove('modal-open');
        resolve();
      }, 500);
    });
  }

  /* open modal */
  modalButtons.forEach(function (modalBtn) {
    modalBtn.addEventListener('click', async function (e) {
      e.preventDefault();
      await openModal(modalBtn);
    });
  });

  /* close modal */
  closeButtons.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', async function (e) {
      await closeModal(closeBtn);
    });
  });
  document.querySelectorAll('.modal-dialog').forEach(function (item) {
    item.addEventListener('click', async function (e) {
      if (e.target !== e.currentTarget) {
        return;
      } else {
        await closeModal(this);
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (accordionItems) {
    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-item-header');
      const content = item.querySelector('.accordion-item-content');
      trigger.addEventListener('click', function () {
        const parent = this.parentNode;
        if (parent.classList.contains('active')) {
          parent.classList.remove('active');
          content.style.height = '0';
        } else {
          document.querySelectorAll('.accordion-item').forEach(child => {
            child.classList.remove('active');
            child.querySelector('.accordion-item-content').style.height = '0';
          });
          parent.classList.add('active');
          content.style.height = content.scrollHeight + 'px';
        }
      });
    });
  }
});
var swiper1 = new Swiper(".offer-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 20,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".offer-slider .swiper-button-next",
    prevEl: ".offer-slider .swiper-button-prev"
  },
  pagination: {
    el: ".offer-slider .swiper-pagination"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
