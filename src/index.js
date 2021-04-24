  //create App info to Dom//
  const createAppInfo = ()=>{
    const divElement = document.createElement('div');
    divElement.id = 'info'
    const image = document.createElement('img');
    const projectName = document.createElement('p');

    image.src = './image/myImage.jpg'
    image.attributes = "Myimage"
    projectName.innerHTML = "Best Joke App <br> Phase  1 Project"
    projectName.style.color = "cornsilk"
    document.body.appendChild(divElement);
    divElement.appendChild(image);
    divElement.appendChild(projectName);
    return divElement;

  }
   createAppInfo();
  
  //create Html element to DOM
  const createLikeButton = () =>{
  const newDiv = document.createElement('div');
  newDiv.id = "respond"
  const header = document.createElement('h3')
  const likeBtn = document.createElement('button');
  const likeBtn2 = document.createElement('button');
 
  
  header.innerText = "*** React To The Jokes *** " 
  header.id = 'heading1'
  likeBtn.innerHTML = "Like"
  likeBtn.id = "button-1"
  likeBtn2.innerHTML = "Dislike"
  likeBtn2.id = "button-2"
  
  document.body.appendChild(newDiv);
   newDiv.appendChild(header);
   newDiv.appendChild(likeBtn);
   newDiv.appendChild(likeBtn2);
   
   return newDiv;

  }
   createLikeButton();

//fetching data from public api//
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

 //add EventListener to next joke button//
 const jokes = document.getElementById('joke');
 const jokeBtn = document.getElementById('joke-Btn');
 jokeBtn.addEventListener('click', getJokes);

 getJokes();
 
  
//add Event listener to like and dislike button//
  let newdiv = document.getElementById('respond')
  let reactJokes = document.getElementById('button-1')
  let reactJokes1 = document.getElementById('button-2');
   

  reactJokes.addEventListener('click', ()=>{
     let paraOne = document.createElement('p');
     paraOne.innerHTML = "You Liked the Joke!!&#128077;"
     newdiv.appendChild(paraOne);
      return newdiv = "";
    })

    reactJokes1.addEventListener('click', ()=>{
     let paraTwo = document.createElement('p');
     paraTwo.innerHTML = "You Disliked the Joke!!&#128078;"
    newdiv.appendChild(paraTwo);
      return newdiv = "";
    })
     
 