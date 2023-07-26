function cards() {
    // Class

    // const menuField = document.querySelector(".menu__field>.container");

    class Menu {
        constructor({ img, altimg, title, descr, price }, parentElement) {
            this.src = img;
            this.alt = altimg;
            this.subtitle = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentElement);
            this.transfer = 39;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        menuItems() {
            const itemHtml = `
        <div class="menu__item">
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.subtitle}</h3>
        <div class="menu__item-descr">
            ${this.descr}
        </div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total">
            <span>${this.price}</span> грн/день
            </div>
        </div>
        </div>`;
            this.parent.insertAdjacentHTML("beforeend", itemHtml);
        }
    }

    // const getResorce = async (url) => {
    //   const res = await fetch(url);

    //   if (!res.ok) {
    //     throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //   }

    //   return await res.json();
    // };

    // getResorce("http://localhost:3000/menu").then((data) => {
    //   data.forEach((el) => {
    //     new Menu(el, ".menu__field>.container").menuItems();
    //   });
    // });

    axios.get("http://localhost:3000/menu").then((data) => {
        data.data.forEach((el) => {
            new Menu(el, ".menu__field>.container").menuItems();
        });
    });
}

export default cards;
