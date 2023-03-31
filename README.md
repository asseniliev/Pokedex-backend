# Pokedex-React

[Link to Vercel deployment](https://pokedex-frontend-ten.vercel.app/)

Pokedex-React is a remake of the Pokedex-DOM page using React library and NEXT.JS framework for the frontend and Express framework for the backend.
 
This repository is the backend of the application. 

[Link to the frontend github repository](https://github.com/asseniliev/Pokedex-frontend)

Front page:

![Pokedex](/frontPage.jpg)

Functionality available:
1. The front page calls the backend which, in return calls pokeapi.co API containing data for pokemons cards. The backend then returns a json with data back to the frontend.
2. At page load the js fetches data for 15 cards from the API
3. Pressing the 'Next' button fetches other 15 cards
4. The fetch takes place in sequence, starting from card No.1, then going to card No.2 and so on

Skills trained and exercised:
1. Deploy a frontend using NEXT.JS
2. Deploy backend using Express framework
3. Call backend routes and receive backend data
4. Fetch data from external API and return json result
5. Implement React components with corresponding css style
6. Work with useState and useEffect hooks
