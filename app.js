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
      `;
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
    <li class="nav-item"><span class="nav-icon"><i class="fa-solid fa-user"></i></span><a href="#">Account</a></li>
    <li class="nav-item"><span class="nav-icon"><i class="fa-regular fa-credit-card"></i></span><a href="#">Subscription</a></li>
    <li class="nav-item"><span class="nav-icon"><i class="fa-solid fa-heart"></i></span><a href="#">Favourite</a></li>
    <li class="nav-item"><span class="nav-icon"><i class="fa-sharp fa-solid fa-bell"></i></span><a href="#">Notification</a></li>
    <li class="nav-item"><span class="nav-icon"><i class="fa-solid fa-folder"></i></span><a href="#">Saves</a></li>
    <li class="nav-item"><span class="nav-icon"><i class="fa-solid fa-gear"></i></span><a href="#">Settings</a></li>
  </ul>
`;


fetchQuote(apiUrl);