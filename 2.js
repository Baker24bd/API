fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displayUser(json))

  function displayUser(users){
      const userName = users.map(user => user.username);
      const ul = document.getElementById("users-container");

      for (let i = 0; i < userName.length; i++) {
          const username = userName[i];
          const li = document.createElement("li");
          li.innerText = username;
          ul.appendChild(li);
          
      }
  }
  