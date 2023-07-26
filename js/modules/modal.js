function onOpenModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function onCloseModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

function modal(modalOpenSelector, modalSelector, modalTimerId) {
    // Modal

    const modalOpen = document.querySelectorAll(modalOpenSelector);
    const modal = document.querySelector(modalSelector);

    modal.addEventListener("click", (e) => {
        if (
            e.target === e.currentTarget ||
            e.target.getAttribute("data-close") == ""
        ) {
            onCloseModal(modalSelector);
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            onCloseModal(modalSelector);
        }
    });

    modalOpen.forEach((btn) => {
        btn.addEventListener("click", () =>
            onOpenModal(modalSelector, modalTimerId)
        );
    });

    const showModalByScroll = () => {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight - 1
        ) {
            onOpenModal(modalSelector, modalTimerId);
            window.removeEventListener("scroll", showModalByScroll);
        }
    };

    window.addEventListener("scroll", showModalByScroll);
}

export default modal;
export { onCloseModal };
export { onOpenModal };
