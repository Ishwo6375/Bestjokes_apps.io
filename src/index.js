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