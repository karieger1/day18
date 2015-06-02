$(document).ready(function() {

	var App = Backbone.Router.extend({

	routes: {
		"":                 	"home",  
		"home": 				"home",  
		"search/:query":        "search",  
	},

	home: function() {
		$("#page").hide();
		$(".search-form").show();
		$(".search").hide();

    	console.log("home");

	},
//home function referenced in routes object
  	 search: function(query) {		
	     $(".page").hide(); //whatever is inside quotes is a css selector
	     $(".search-form").show();

   //  	console.log("search", query);


	function onReceivedMovies(movies) {
		console.log(onReceivedMovies);
		console.log(movies);

		

	}	//console.log(movies.Search[0].title);	
  	//get list of movies
	$.get(
		//API endpoint - url where we are retreiving the info
		'http://www.omdbapi.com/',
		// parameters (defined on http://www.omdbapi.com/)
		{
			s: 'star wars',
			type: ['series', 'movie']
		},
		// function to call when data is received
		onReceivedMovies,
		// format that we are expecting
		'json'
	)
	
  }
});

	var myRouter = new App();
	Backbone.history.start();

	$("#search-form").on("submit", function(e){
		e.preventDefault(); //must have this!

		var query = $("#query").val();

		myRouter.navigate("search/"+ query, {trigger: true}); //trigger says after you change URL, change page too

		console.log(query);


  });
});