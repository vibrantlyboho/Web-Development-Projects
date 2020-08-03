var movies= [
    {
        title: "Frozen",
        rating: 4.2,
        has_watched: true
    },
    {
        title: "End Game",
        rating: 4.6,
        has_watched: false
    },
    {
        title: "Anne of Green Gables",
        rating: 4.7,
        has_watched: false
    },
    {
        title: "Les Miserables",
        rating: 4.5,
        has_watched: false
    },
    {
        title: "3 idiots",
        rating: 4.6,
        has_watched: true
    },
    {
        title: "Jumanji",
        rating: 4.3,
        has_watched: true
    },
    {
        title: "The Incredibles",
        rating: 4.8,
        has_watched: true
    }
];

function movielist(movies){
    movies.forEach(function(movieobj){
        if(movieobj.has_watched)
            {console.log("You have seen \"" + movieobj.title+ "\" - "+ movieobj.rating+ " stars\n");}
        else
            {console.log("You have not seen \"" + movieobj.title+ "\" - "+ movieobj.rating+ " stars\n");}

    });
}

movielist(movies);