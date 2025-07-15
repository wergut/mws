/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO01BQ2hCQyxZQUFZLEVBQUU7SUFDbEIsQ0FBQztJQUNEO0lBQ0EsR0FBRyxFQUFFO01BQ0RELGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxZQUFZLEVBQUU7SUFDbEIsQ0FBQztJQUNELElBQUksRUFBRTtNQUNGRCxhQUFhLEVBQUUsQ0FBQztNQUNoQkMsWUFBWSxFQUFFO0lBQ2xCO0VBQ0o7QUFDSixDQUFDLENBQUM7Ozs7OztVQ3hLRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLW1lbnUtYnRuJyk7XHJcbmNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1uYXYnKTtcclxuXHJcbmlmIChtZW51QnV0dG9uICYmIG1haW5NZW51KSB7XHJcbiAgICBtZW51QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaXNNZW51T3BlbiA9IG1haW5NZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuICAgICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEwMjRweCknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBpc01lbnVPcGVuID8gJ2hpZGRlbicgOiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51T25DbGlja091dHNpZGUpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZU1lbnVPbkNsaWNrT3V0c2lkZShldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoIW1haW5NZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIW1lbnVCdXR0b24uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgbWFpbk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEwMjRweCknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51T25DbGlja091dHNpZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcblxyXG5pZiAoaGVhZGVyKSB7XHJcbiAgICBjb25zdCB0b2dnbGVTY3JvbGxlZENsYXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDApIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlU2Nyb2xsZWRDbGFzcyk7XHJcbiAgICB0b2dnbGVTY3JvbGxlZENsYXNzKCk7XHJcbn1cclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW4tbW9kYWwtZGlhbG9nJyksXHJcbiAgICAgICAgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcclxuICAgICAgICBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtZGlhbG9nIC5tb2RhbC1jbG9zZScpO1xyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWxCdG4pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBtb2RhbElkID0gbW9kYWxCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpLFxyXG4gICAgICAgICAgICAgICAgbW9kYWxFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZy4nICsgbW9kYWxJZCk7XHJcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xyXG4gICAgICAgICAgICBtb2RhbEVsZW0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsRWxlbS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNsb3NlTW9kYWwoY2xvc2VCdG4pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBtb2RhbCA9IGNsb3NlQnRuLmNsb3Nlc3QoJy5tb2RhbC1kaWFsb2cnKTtcclxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbmluZycpO1xyXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jbG9zaW5nJyk7XHJcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUub3ZlcmZsb3cgPSAnaW5pdGlhbCc7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtY2xvc2luZycpO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIG9wZW4gbW9kYWwgKi9cclxuICAgIG1vZGFsQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1vZGFsQnRuKSB7XHJcbiAgICAgICAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYXdhaXQgb3Blbk1vZGFsKG1vZGFsQnRuKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qIGNsb3NlIG1vZGFsICovXHJcbiAgICBjbG9zZUJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihjbG9zZUJ0bikge1xyXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBhd2FpdCBjbG9zZU1vZGFsKGNsb3NlQnRuKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1kaWFsb2cnKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgY2xvc2VNb2RhbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbi1pdGVtJyk7XHJcblxyXG4gICAgaWYgKGFjY29yZGlvbkl0ZW1zKSB7XHJcbiAgICAgICAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHJpZ2dlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWhlYWRlcicpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0tY29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbi1pdGVtJykuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0tY29udGVudCcpLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG52YXIgc3dpcGVyMSA9IG5ldyBTd2lwZXIoXCIub2ZmZXItc2xpZGVyXCIsIHtcclxuICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6IFwiLm9mZmVyLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgICAgcHJldkVsOiBcIi5vZmZlci1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLm9mZmVyLXNsaWRlciAuc3dpcGVyLXBhZ2luYXRpb25cIlxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XHJcbiAgICAgICAgNjAxOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIlxuaW1wb3J0ICcuL3NjcmlwdCc7XG4iXSwibmFtZXMiOlsibWVudUJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW5NZW51Iiwib25jbGljayIsImlzTWVudU9wZW4iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlTWVudU9uQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjb250YWlucyIsInRhcmdldCIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoZWFkZXIiLCJ0b2dnbGVTY3JvbGxlZENsYXNzIiwic2Nyb2xsWSIsImFkZCIsIm1vZGFsQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvdmVybGF5IiwiY2xvc2VCdXR0b25zIiwib3Blbk1vZGFsIiwibW9kYWxCdG4iLCJQcm9taXNlIiwicmVzb2x2ZSIsIm1vZGFsSWQiLCJnZXRBdHRyaWJ1dGUiLCJtb2RhbEVsZW0iLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsImNsb3NlTW9kYWwiLCJjbG9zZUJ0biIsIm1vZGFsIiwiY2xvc2VzdCIsImZvckVhY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImFjY29yZGlvbkl0ZW1zIiwidHJpZ2dlciIsImNvbnRlbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiaGVpZ2h0IiwiY2hpbGQiLCJzY3JvbGxIZWlnaHQiLCJzd2lwZXIxIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFnaW5hdGlvbiIsImVsIiwiYnJlYWtwb2ludHMiXSwic291cmNlUm9vdCI6IiJ9