// Copy Quote
const copyQuote = () => {
  const copy = document.querySelector(".copy");
  const quote = document.querySelector(".quote");
  const author = document.querySelector(".author");

  copy.addEventListener("click", () => {
    const text = `${quote.innerText} by ${author.innerText}`;
    try {
      navigator.clipboard.writeText(text);
    } catch (err) {
      console.log("Error copying text", err);
    }
  });
};

// Share Quote
const shareQuote = () => {
  let quote = document.querySelector(".quote");
  let author = document.querySelector(".author");
  const shareText = quote.innerText;
  const shareUrl = 'https://quoterush.netlify.app/#';

  // Check if Web Share API is supported by the browser
  if (navigator.share) {
    navigator.share({
      title: 'Quote Rush',
      text: `${shareText} by ${author.innerText}`,
      url: shareUrl,
    })
      .then(console.log(shareText))
      .catch(error => console.error('Error sharing:', error));
  }
  else {
    console.error('Web Share API not supported by the browser.');
  }
};

// Hide or Show Navigation

const menu = document.querySelector(".menu-icon");
const cancel = document.querySelector(".cancel-icon");
const form = document.querySelector(".sign-in");

document.addEventListener("click", (event) => {
  let clickOnNavbar = nav.contains(event.target);
  let clickOnMenuIcon = menu.contains(event.target);
  let clickOnCancelIcon = cancel.contains(event.target);
  let clickOnForm = form.contains(event.target);

  // outside other than nav, menuIcon and cancelicon
  if (!clickOnNavbar && !clickOnMenuIcon && !clickOnCancelIcon && !clickOnForm) {
    menu.classList.remove("hide");
    cancel.classList.add("hide");
    nav.classList.add("hide");
    form.classList.add("hide");
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

  if (clickOnNavbar) {
    menu.classList.remove("hide");
    cancel.classList.add("hide");
  }
});