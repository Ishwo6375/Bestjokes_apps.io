//  <div id="joke" class="my-joke"> Awesome Joke is loading... </div>
//       <button id="joke-Btn" class="btn">NEXT JOKE</button>
  const jokeUrl = ' https://icanhazdadjoke.com/'

 const getJokes = () => {
     fetch(jokeUrl)
     .then((res) => {
       console.log(res.json());  
     }).catch((error) =>{
         console.log(error);
     })
    
 }
 const jokes = document.getElementById('joke');
 const jokeBtn = document.getElementById('joke-Btn');
 jokeBtn.addEventListener('click', getJokes);
 getJokes();