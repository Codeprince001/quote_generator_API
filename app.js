const apiUrl = 'https://api.quotable.io/random';

const fetchQuote = async (url) => {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    console.log(data);
    const { author, content } = data;
    renderQuote(content, author);
  } catch (error) {
    const quoteBox = document.querySelector(".box");
    quoteBox.innerHTML = `
      <div class="quote"> System on Maintenance, Please refresh page </div>
      <div class="refresh"><button class="refresh-btn">refresh</button></div>
      `;
    const refresh = document.querySelector(".refresh");
    refresh.addEventListener("click", () => {
      console.log("refreshed");
      window.location.reload();
    });
  }
};

const renderQuote = (content, author) => {
  let quote = document.querySelector(".quote");
  const speaker = document.querySelector(".author");
  const icons = document.querySelector(".icons");
  quote.innerText = `"${content}"`;
  speaker.innerText = `${author}`;

  icons.innerHTML = `
    <i alt="Copy text" class="fa-solid fa-copy copy"></i>
    <i alt="request new quote" class="fa-solid fa-rotate-right request"></i>
    <i alt="share quote"class="fa-solid fa-share-nodes share"></i>
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

// Sign up options
const acct = document.querySelector(".acct");
acct.addEventListener("click", acctVal);
function acctVal() {
  hideNavOnClick();
  const signIn = document.querySelector(".sign-in");
  signIn.classList.remove("hide");
  signIn.innerHTML = `
  <div class="right cancel"><i class="fa-solid fa-xmark"></i></div>
  <div class="sub-title">Sign in</div>
  <form action="post" class="form">
    <div>
      <label for="email">Email</label>
      <input type="email" name="user_email" id="email" placeholder="email" required>
    </div>
    <div>
      <label for="pword">Password</label>
      <input type="password" name="user_password" id="pword" placeholder="password" required>
    </div>
    <div class="submit">
      <button type="submit" class="btn submit-btn"> submit </button>
    <div>
    <p class="sign-up">
      Don't have an account <a href="#">Sign up</a>
    </p>
  </form>`;

  const cancelSignIn = document.querySelector(".cancel");
  cancelSignIn.addEventListener("click", () => {
    signIn.classList.add("hide");
  });

  const submit = document.querySelector(".submit-btn");
  submit.addEventListener("click", (event) => {
    event.preventDefault();
  });
};


function hideNavOnClick() {
  const mobileNav = document.querySelector(".nav");
  mobileNav.classList.add("hide");
}

fetchQuote(apiUrl);

window.addEventListener('load', function () {
  document.querySelector('body').classList.add('loaded');
});
