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
      <i class="fa-solid fa-rotate-right request">
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

};

const newRequest = () => fetchQuote(apiUrl);

const shareQuote = () => {
  let quote = document.querySelector(".quote");
  let box = document.querySelector("article .box");
  // box.style.display = "none";
  const shareText = quote.innerText;
  const shareUrl = 'http://127.0.0.1:5500/Quote_generator/index.html';

  // Check if Web Share API is supported by the browser
  if (navigator.share) {
    navigator.share({
      title: 'Quote Rush',
      text: shareText,
      url: shareUrl,
    })
      .then(console.log("it worked"))
      .catch(error => console.error('Error sharing:', error));
  }
  else {
    console.error('Web Share API not supported by the browser.');
  }
};

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