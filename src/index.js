  const createLikeButton = () =>{
  const newDiv = document.createElement('div');
  newDiv.id = "respond"
  const header = document.createElement('h3')
  const likeBtn = document.createElement('button');
  
  const likeBtn2 = document.createElement('button');

  header.innerText = "Do you like this?"
  header.id = 'heading1'
  likeBtn.innerHTML = "Like"
  likeBtn2.innerHTML = "Dislike"

//   body.newDiv.appendChild(header);
//   body.newDiv.appendChild(likeBtn);
//   newDiv.appendChild(likeBtn2);
//   return newDiv;
  document.body.appendChild(newDiv);
   newDiv.appendChild(header);
   newDiv.appendChild(likeBtn);
   newDiv.appendChild(likeBtn2);

   return newDiv;

  }


   createLikeButton();
//  <div id="joke" class="my-joke"> Awesome Joke is loading... </div>
//       <button id="joke-Btn" class="btn">NEXT JOKE</button>
  const jokeUrl = ' https://icanhazdadjoke.com/'
  const configObj = {
      headers: {
          Accept : "application/json"
      }
  }
 
 const getJokes = () => {
     fetch(jokeUrl, configObj)
     .then((res) =>  res.json())
      .then((data) => {
        jokes.innerHTML = data.joke;
      }) .catch((error) =>{
         console.log(error);
     })
    
 }
 const jokes = document.getElementById('joke');
 const jokeBtn = document.getElementById('joke-Btn');
 jokeBtn.addEventListener('click', getJokes);
 getJokes();

 