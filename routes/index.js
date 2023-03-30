var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pokemons/:start/:end', async function (req, res) {
  const start = req.params.start;
  const end = req.params.end

  const selectedPokemons = [];

  for (let i = start; i <= end; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    const data = await (await fetch(url)).json();

    const fetchedPokemon = {
      type: data.types[0].type.name,
      name: data.name[0].toUpperCase() + data.name.substring(1),
      imgSrc: data.sprites.front_default
    }

    selectedPokemons.push(fetchedPokemon);
  }

  res.send({
    pokemons: selectedPokemons
  })
});

module.exports = router;
