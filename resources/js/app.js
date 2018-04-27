
import MenuToggle from "./components/MenuToggle";


// ------------------------------------------------------------------
// :: INITIALISE PROJECT
// -------------------------------------------------------------------
const init = () => {
	// Hamburger code
	document.querySelectorAll('.js-menu-toggle').forEach((menuToggle)=> {
		new MenuToggle(menuToggle);
	});
};

init();
