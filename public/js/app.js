var cargarPagina = function () {
    cargarPokemones();
    $("body").on("click",".pokemon", mostrarDetalles)
};
var cargarPokemones = function () {
    var url = "http://pokeapi.co/api/v2/";
    $.getJSON(url, function (response) {
        var pokemones = response.results;
        var total = response.count;
        mostrarTotalPokemoness(total);
        mostrarPokemones(pokemones);
    })
};
