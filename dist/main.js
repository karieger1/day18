$(document).ready(function() {

function onReceivedMovies(movies) {
	console.log(onReceivedMovies);
	console.log(movies);
})
//get list of movies
console.log(movies.Search[0].title);
$.get(
	//url where we are getting the endpoint
	"http://www.omdbapi.com/"
	//parameters defined on site above
//get more info about individual movie
	{
		s: "star wars",
		type: [series, movie]
	},

	onReceivedMovies, 
	"json"
	);



	});

