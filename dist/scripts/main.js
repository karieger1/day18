$(document).ready(function() {

	var App = Backbone.Router.extend({

		routes: {
			"":                 	"home",  
			"search/:query":        "search",  
		},

		home: function() {
			$(".page").hide();
			$("#home").show();
			
		},

	//home function referenced in routes object
	  	 search: function(query) {		
		     $(".page").hide(); //whatever is inside quotes is a css selector
		     $(".search-form").show();

	   //  	console.log("search", query);
	   		}
	   	}); //close routing section -- all set


	// function onReceivedMovies(movies) {
	// 	console.log(onReceivedMovies);
	// 	console.log(movies);

	// }	//console.log(movies.Search[0].title);	
  	//get list of movies

	var myRouter = new App();
	Backbone.history.start();

	$("#search-form").on("submit", function(e) {
		e.preventDefault(); //must have this!

		var query = $("#film-query").val();
		myRouter.navigate("search/"+ query, {trigger: true}); //trigger says after you change URL, change page too

		function onReceivedMovies(movies) {

			var movieString = " ";

			for(var i = 0; i < movies.Search.length; i++) {
				var searchResults = movies.Search;
				var allMovies = searchResults[i].Title;

				console.log(allMovies);

				movieString += "<div>" + allMovies + "</div>";

			}

			$("#filmList").html(movieString);
  		}

  		$.get(
		//API endpoint - url where we are retreiving the info
		'http://www.omdbapi.com/',
		// parameters (defined on http://www.omdbapi.com/)
		{
			s: "query"
			
		},
		// function to call when data is received
		onReceivedMovies,
		// format that we are expecting
		"json"
		);
	});
});