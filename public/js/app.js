var xhr = new XMLHttpRequest();


var contactos = [{
  "imagen": "image/1-Balbasaur.png"
},
{
  "imagen": "image/2-Ivysaur.png"
},
{
  "imagen": "image/3-Venusaur.png"
},
{
  "imagen": "image/4-Charmander.png"
},
{
  "imagen": "image/5-Charmaleon.png"
},
{
  "imagen": "image/6-Charizard.png"
},
{
  "imagen": "image/7-squirtle.png"
},
{
  "imagen": "image/8-Blastoise.png"
},
{
  "imagen": "image/9-Blastoise.png"
},
{
  "imagen": "image/10-Caterpie.png"
},
{
  "imagen": "image/11-Metapod.png"
},
{
  "imagen": "image/12-Butterfree.png"
},
{
  "imagen": "image/13-Weedle.png"
},
{
  "imagen": "image/14-Kakuna.png"
},
{
  "imagen": "image/15-Breedrill.png"
},
{
  "imagen": "image/16-Pidgey.png"
},
{
  "imagen": "image/17-Pidgeotto.png"
},
{
  "imagen": "image/18-Pidgeot.png"
},
{
  "imagen": "image/19-Rattata.png"
},
{
  "imagen": "image/20-Raticate.png"
};



var plantillaPokemon = '<div class="row">' +
  '<div class="col s12 m7">' +
  '<div class="card">' +
  '<div class="card-image">' + '<a href="#"<img src="__imagen__">' +
  '<span class="card-title">__nombrePokemon__</span>' +
  '</div>';





var cargarPagina = function() {
  cargarPokemones();
};

function cargarPokemones(pokemones) {
  $.getJSON("http://pokeapi.co/api/v2/",
    function(response) {
      var pokemones = response.results;
      crearPokemon(pokemones);
    });
}

var crearPokemon = function(pokemones) {
  var $ul = $("#pokemones");
  pokemones.forEach(function(pokemon) {
    var $li = $("<li />", );
    $li.attr("data-url", pokemon.url);
    $li.text(pokemon.name);
    $ul.append($li);
  });
};




$(document).ready(cargarPagina);
