class MobileNavbar{
    constructor(mobileMenu, navList) {

        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(this.navLinks);
        this.activeClass = "active";

    }

    addCLickEvent(){
        this.mobileMenu.addEventListener("click", () => console.log
        ("Hey"));
    }
}
