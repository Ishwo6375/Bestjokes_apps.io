//fetching data from public api//
const jokeUrl = " https://icanhazdadjoke.com/";
const configObj = {
  headers: {
    Accept: "application/json",
  },
};

const getJokes = () => {
  fetch(jokeUrl, configObj)
    .then((res) => res.json())
    .then((data) => {
      jokes.innerHTML = data.joke;
    })
    .catch((error) => {
      console.log(error);
    });
};
// create HTML Elements using js//

const createDivContainer = () => {
  const divContainer = document.createElement("div");
  divContainer.classList.add("container");
  const header = document.createElement("h2");
  const divOne = document.createElement("div");
  divOne.id = "joke";
  divOne.classList.add("my-joke");
  const nextBtn = document.createElement("button");
  nextBtn.id = "joke-Btn";
  nextBtn.classList.add("btn");

  header.innerHTML = "&#129303;It's time to be FRESH!!!!  &#129315;";
  divOne.innerHTML = "Best Funny Joke is Loading...";
  nextBtn.innerHTML = "NEXT JOKE";

  //appending HTML elements to DOM//
  document.body.appendChild(divContainer);
  divContainer.appendChild(header);
  divContainer.appendChild(divOne);
  divContainer.appendChild(nextBtn);

  return divContainer;
};

createDivContainer();

//add EventListener to NEXT JOKE button//
const jokes = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-Btn");
jokeBtn.addEventListener("click", getJokes);

getJokes();

// create App Info button to DOM//
const addAppInfo = () => {
  const divElement1 = document.createElement("div");
  divElement1.id = "info";
  const newBtn = document.createElement("button");
  newBtn.innerHTML = "App Info";
  newBtn.id = "click-button";
  document.body.appendChild(divElement1);
  divElement1.appendChild(newBtn);
  return divElement1;
};

addAppInfo();

//add Event Listener to App info button//
let divElement2 = document.getElementById("info");
let addEvent = document.getElementById("click-button");

addEvent.addEventListener("click", () => {
  let image = document.createElement("img");
  image.src = "./image/myImage.jpg";
  image.attributes = "my-image-pic";
  let heading = document.createElement("h4");
  heading.innerHTML = "Best Joke App <br> Phase 1 Project";
  let para3 = document.createElement("p");
  para3.innerHTML = "Created By: ISHWOR PRAJAPATI";
  divElement2.appendChild(image);
  divElement2.appendChild(heading);
  divElement2.appendChild(para3);
  return divElement2 = "";
});

//create Html element to DOM
const createLikeButton = () => {
  const newDiv = document.createElement("div");
  newDiv.id = "respond";
  const header = document.createElement("h3");
  const likeBtn = document.createElement("button");
  const likeBtn2 = document.createElement("button");

  header.innerText = "*** React To The Jokes *** ";
  header.id = "heading1";
  likeBtn.innerHTML = "Like";
  likeBtn.id = "button-1";
  likeBtn2.innerHTML = "Dislike";
  likeBtn2.id = "button-2";

  document.body.appendChild(newDiv);
  newDiv.appendChild(header);
  newDiv.appendChild(likeBtn);
  newDiv.appendChild(likeBtn2);

  return newDiv;
};

createLikeButton();

//add Event listener to like and dislike button//

let reactJokes1 = document.getElementById("button-2");
let reactJokes = document.getElementById("button-1");

reactJokes.addEventListener("click", () => {
  let newdiv = document.getElementById("respond");
  reactJokes.innerHTML = "<b>LIKED</b> &#128154;";
  reactJokes.style.background = "red";
  reactJokes1.innerHTML = "Dislike";
  reactJokes1.style.background = "blueviolet"

});

reactJokes1.addEventListener("click", () => {
  let newdiv = document.getElementById("respond");
  reactJokes1.innerHTML = "<b>DISLIKED</> &#128148;";
  reactJokes1.style.background = "rgb(107, 100, 100)"
  reactJokes.innerHTML = "Like";
  reactJokes.style.background = " blueviolet";
});
