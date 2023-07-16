function modal() {
    // Modal

    const modalOpen = document.querySelectorAll("[data-modal]");
    const modal = document.querySelector(".modal");

    const windowListen = (e) => {
        if (e.key === "Escape") {
            onCloseModal();
        }
    };

    const backdropListen = (e) => {
        if (
            e.target === e.currentTarget ||
            e.target.getAttribute("data-close") == ""
        ) {
            onCloseModal();
        }
    };

    const onOpenModal = () => {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        modal.addEventListener("click", backdropListen);
        window.addEventListener("keydown", windowListen);
        // clearInterval(modalTimerId);
    };

    const onCloseModal = () => {
        modal.classList.add("hide");
        modal.classList.remove("show");
        window.removeEventListener("keydown", windowListen);
        modal.removeEventListener("click", backdropListen);
        document.body.style.overflow = "";
    };

    modalOpen.forEach((btn) => {
        btn.addEventListener("click", onOpenModal);
    });
    // const modalTimerId = setTimeout(onOpenModal, 3000);

    const showModalByScroll = () => {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight - 1
        ) {
            onOpenModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    };

    window.addEventListener("scroll", showModalByScroll);
}
