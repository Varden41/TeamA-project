
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-header]"),
    closeModalBtn: document.querySelector("[data-modal-close-header]"),
    modal: document.querySelector("[data-modal-header]"),
    openModalBtnSecond: document.querySelector("[data-modal-open-header-second]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtnSecond.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open-header");
    refs.modal.classList.toggle("is-hidden");
  }
})();
