/**
* Template Name: Presento
* Template URL: https://bootstrapmade.com/presento-bootstrap-corporate-template/
* Updated: Jun 06 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      if (document.querySelector('.mobile-nav-active')) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      }
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (typeof AOS === 'undefined') return;   // animation script blocked or missing: the page just shows normally
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      // people who ask their device for less motion get no animation at all
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
  }
  // start right away instead of waiting for every picture to finish loading, then re-measure once they have
  aosInit();
  window.addEventListener('load', function() { if (typeof AOS !== 'undefined') AOS.refresh(); });

  /**
   * Footer year (so the copyright line never needs editing)
   */
  document.querySelectorAll('.current-year').forEach(function(year) {
    year.textContent = new Date().getFullYear();
  });



  /**
   * Staff bios: a "Read bio" button on each Band Staff card whose person is listed in assets/data/bios.json
   */
  function initBios() {
    const dialog = document.getElementById('bio-dialog');
    if (!dialog || typeof dialog.showModal !== 'function') return;

    fetch('assets/data/bios.json').then(function(res) {
      return res.ok ? res.json() : {};
    }).then(function(bios) {
      document.querySelectorAll('#staff .team-member').forEach(function(card) {
        const name = card.querySelector('h4').textContent.trim();
        const paragraphs = bios[name];
        if (!Array.isArray(paragraphs) || !paragraphs.length) return;

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'bio-btn';
        button.textContent = 'Read bio';
        button.setAttribute('aria-label', 'Read the bio of ' + name);
        button.addEventListener('click', function() {
          const photo = card.querySelector('img');
          const roleBox = card.querySelector('.member-info span');
          document.getElementById('bio-dialog-name').textContent = name;
          document.getElementById('bio-dialog-role').textContent = roleBox ? roleBox.innerText.replace(/\n+/g, ' / ') : '';
          const image = document.getElementById('bio-dialog-photo');
          image.src = photo ? photo.src : '';
          image.alt = photo ? photo.alt : '';
          const body = document.getElementById('bio-dialog-paragraphs');
          body.textContent = '';
          paragraphs.forEach(function(text) {
            const p = document.createElement('p');
            p.textContent = text;
            body.appendChild(p);
          });
          dialog.showModal();
          dialog.scrollTop = 0;
        });
        card.querySelector('.member-info').appendChild(button);
      });
    }).catch(function() { /* no bios yet, or the file could not be read: no buttons */ });

    dialog.querySelectorAll('[data-close-bio]').forEach(function(closeButton) {
      closeButton.addEventListener('click', function() { dialog.close(); });
    });
    // clicking the dimmed area outside the box closes it too
    dialog.addEventListener('click', function(event) {
      if (event.target === dialog) dialog.close();
    });
  }
  window.addEventListener('load', initBios);


  /**
   * Photo gallery: click a picture to see it large, then step through with the arrows or the keyboard
   */
  function initGallery() {
    const dialog = document.getElementById('gallery-dialog');
    const items = Array.from(document.querySelectorAll('.gallery-item'));
    if (!dialog || !items.length || typeof dialog.showModal !== 'function') return;

    const large = document.getElementById('gallery-large');
    const caption = document.getElementById('gallery-caption');
    let current = 0;

    function show(index) {
      current = (index + items.length) % items.length;
      const item = items[current];
      large.src = item.dataset.full;
      large.alt = item.dataset.alt;
      caption.textContent = item.dataset.alt + '  (' + (current + 1) + ' of ' + items.length + ')';
      // fetch the next picture in the background so stepping forward feels instant
      new Image().src = items[(current + 1) % items.length].dataset.full;
    }

    items.forEach(function(item, index) {
      item.addEventListener('click', function() {
        show(index);
        dialog.showModal();
      });
    });

    dialog.querySelector('.gallery-prev').addEventListener('click', function() { show(current - 1); });
    dialog.querySelector('.gallery-next').addEventListener('click', function() { show(current + 1); });
    dialog.querySelector('[data-close-gallery]').addEventListener('click', function() { dialog.close(); });
    dialog.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') show(current - 1);
      if (event.key === 'ArrowRight') show(current + 1);
    });
    // clicking the dark area around the picture closes it too
    dialog.addEventListener('click', function(event) {
      if (event.target === dialog) dialog.close();
    });
    // swipe left / right on a phone
    let startX = null;
    dialog.addEventListener('touchstart', function(event) { startX = event.touches[0].clientX; }, { passive: true });
    dialog.addEventListener('touchend', function(event) {
      if (startX === null) return;
      const distance = event.changedTouches[0].clientX - startX;
      if (Math.abs(distance) > 50) show(current + (distance < 0 ? 1 : -1));
      startX = null;
    });
    dialog.addEventListener('close', function() { large.removeAttribute('src'); });
  }
  window.addEventListener('load', initGallery);

})();