export default class MenuToggle {

  constructor(el) {
    // -------------------------------------------------------------------
    // :: CONSTRUCTOR
    // -------------------------------------------------------------------
    this.el = el;
		this.initEvents();
  }

	initEvents() {
		this.el.addEventListener("click", (e) => this.handleClick(e));
	}

	handleClick(e) {
		e.preventDefault();
		let mobileMenu = document.getElementById("o-mobile-menu");

		if (mobileMenu.classList.contains('is-open')) {
			mobileMenu.classList.remove("is-open");
			document.getElementById("html").classList.remove('no-scroll');
		} else{
			mobileMenu.classList.add("is-open");
			document.getElementById("html").classList.add('no-scroll');
		}
  }
}
