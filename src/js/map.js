(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-map-open]"),
    closeModalBtn: document.querySelector("[data-map-close]"),
    modal: document.querySelector("[data-map]"),
    openModalBtnSecond: document.querySelector("[data-map-open-second]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtnSecond.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();