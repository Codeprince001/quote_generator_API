const apiUrl = 'https://api.quotable.io/random';

const fetchQuote = async (url) => {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const { author, content } = data;
    renderQuote(content, author);
  } catch (error) {
    const quoteBox = document.querySelector(".box");
    quoteBox.innerHTML = `
      <div class="quote"> System on Maintenance Please refresh page </div>
      <i class="fa-solid fa-rotate-right request"></i>
      `;
    const request = document.querySelector(".box .request");
    request.style.marginLeft = "40%";
    request.style.fontSize = "2rem";
    request.addEventListener("click", newRequest());
  }
};

const renderQuote = (content, author) => {
  let quote = document.querySelector(".quote");
  const speaker = document.querySelector(".author");
  const icons = document.querySelector(".icons");
  quote.innerText = `"${content}"`;
  speaker.innerText = `${author}`;

  icons.innerHTML = `
    <i class="fa-solid fa-copy copy"></i>
    <i class="fa-solid fa-rotate-right request"></i>
    <i class="fa-solid fa-share-nodes share"></i>
  `;

  // make a new request for new quote
  const request = document.querySelector(".request");
  request.addEventListener("click", newRequest);
  // share quote
  const share = document.querySelector('.share');
  share.addEventListener("click", shareQuote);
  // share quote
  const copy = document.querySelector(".copy");
  copy.addEventListener("click", copyQuote);
};

const newRequest = () => fetchQuote(apiUrl);

// Mobile Navigation Bar
const nav = document.querySelector(".nav");
nav.innerHTML = `
  <ul class="nav-content">
    <li class="nav-item  acct"><span class="nav-icon"><i class="fa-solid fa-user"></i></span><a href="#">Account</a></li>
    <li class="nav-item  sub"><span class="nav-icon"><i class="fa-regular fa-credit-card"></i></span><a href="#">Subscription</a></li>
    <li class="nav-item fav"><span class="nav-icon"><i class="fa-solid fa-heart"></i></span><a href="#">Favourite</a></li>
    <li class="nav-item notify"><span class="nav-icon"><i class="fa-sharp fa-solid fa-bell"></i></span><a href="#">Notification</a></li>
    <li class="nav-item  saves"><span class="nav-icon"><i class="fa-solid fa-folder"></i></span><a href="#">Saves</a></li>
    <li class="nav-item setting"><span class="nav-icon"><i class="fa-solid fa-gear"></i></span><a href="#">Settings</a></li>
  </ul>
`;

const acct = document.querySelector(".acct");
acct.addEventListener("click", acctVal);
function acctVal() {
  hideNavOnClick();
  const signIn = document.querySelector(".sign-in");
  signIn.classList.remove("hide");
  signIn.innerHTML = `
  <div class="right"><i class="fa-solid fa-xmark cancel-icon"></i></div>
  <div class="sub-title">Sign up for Quote Rush</div>
  <form action="post" class="form">
    <label for="email">Email</label>
    <input type="email" name="" id="email" placeholder="email">
    <label for="pword">Password</label>
    <input type="password" name="" id="pword" placeholder="password">
    <p class="sign-up">
      Don't have an account <a href="#">Sign up</a>
    </p>
  </form>`;

  const cancelSignIn = document.querySelector(".cancel-icon");
  cancelSignIn.addEventListener("click", function () {
    signIn.classList.add("hide");
  });
};


function hideNavOnClick() {
  const mobileNav = document.querySelector(".nav");
  mobileNav.classList.add("hide");
}

fetchQuote(apiUrl);