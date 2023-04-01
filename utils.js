const menu = document.querySelector(".menu-icon");
const cancel = document.querySelector(".cancel-icon");

document.addEventListener("click", (event) => {
  let clickOnNavbar = nav.contains(event.target);
  let clickOnMenuIcon = menu.contains(event.target);
  let clickOnCancelIcon = cancel.contains(event.target);

  if (!clickOnNavbar && !clickOnMenuIcon && !clickOnCancelIcon) {
    menu.classList.remove("hide");
    cancel.classList.add("hide");
    nav.classList.add("hide");
  }

  if (clickOnCancelIcon) {
    menu.classList.remove("hide");
    cancel.classList.add("hide");
    nav.classList.add("hide");
  }
  if (clickOnMenuIcon) {
    menu.classList.add("hide");
    cancel.classList.remove("hide");
    nav.classList.remove("hide");
  }
});