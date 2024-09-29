class Menu {
    constructor() {
        this.burger = document.getElementById("burger")
        this.menu = document.getElementById("menu")
        this.nav = document.getElementById("nav")
        this.buttons = document.getElementById("menu-btns")
    }

    init() {
        document.body.addEventListener("focusin", event => {
            if (event.target === this.burger) {
                return
            }
            if (window.matchMedia("(max-width: 640px)").matches) {
                if (this.menu.contains(event.target)) {
                    this.activate()
                } else {
                    this.deactivate()
                }
            }
            else if (window.matchMedia("(max-width: 850px)").matches) {
                if (this.nav.contains(event.target)) {
                    this.activate()
                } else {
                    this.deactivate()
                }
            }
        })
        this.burger.addEventListener("click", () => {
            this.toggle()
        })
    }

    toggle() {
        this.isActive = !this.isActive
        document.body.classList.toggle("lock")
        this.menu.classList.toggle("header__menu_active")
        this.burger.classList.toggle("header__burger_active")
    }

    activate() {
        if (this.isActive) {
            return
        }
        this.isActive = true
        document.body.classList.add("lock")
        this.menu.classList.add("header__menu_active")
        this.burger.classList.add("header__burger_active")
    }

    deactivate() {
        if (!this.isActive) {
            return
        }
        this.isActive = false
        document.body.classList.remove("lock")
        this.menu.classList.remove("header__menu_active")
        this.burger.classList.remove("header__burger_active")
    }
}


let menu = new Menu()
menu.init()

let swiper = new Swiper(".reviews__swiper", {
    scrollbar: {
        el: ".reviews__swiper .swiper-scrollbar",
        draggable: true,
    },
    spaceBetween: 30,
    slidesPerView: 1,
    grabCursor: true,
    resistanceRatio: 0.5,
})

