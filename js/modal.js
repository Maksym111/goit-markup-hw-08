(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),

    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('backdrop--is-hidden');
  }

  function toggleMenu() {
    document.body.classList.toggle('modal-open');
    refs.menu.classList.toggle('backdrop-menu--is-hidden');
  }

  // const menuBtnRef = document.querySelector('[data-menu]');

  // menuBtnRef.addEventListener('click', () => {
  //   const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
  //   menuBtnRef.classList.toggle('backdrop-menu--is-hidden');
  //   menuBtnRef.setAttribute('aria-expanded', !expanded);
  // });
})();
