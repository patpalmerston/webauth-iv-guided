1.create-react-app // to get up and running
2.cd into react app folder and run yarn start

body {
  padding: 2rem;
  text-align: center;
}

3. yarn add react-router-dom
4.update index.js to add support for client side routing
5. yarn add axios
6.write login component - add line: localStorage.setItem('jwt', res.data.token); after successful (.then) axios call to the end point.
7. add Navigation and Router for login - in App.js
8. Login and verify in devtools that you are receiving a jwt in localStorage