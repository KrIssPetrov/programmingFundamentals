function movies(movies) {

    let movieList = [];

    for (let movie of movies) {

        if (movie.includes('addMovie')) {
            let movieSplit = movie.split('addMovie ');
            let movieName = movieSplit[1];
            //console.log(movieName);
            let movieObj = { name: movieName };
            movieList.push(movieObj);
        } else if (movie.includes('directedBy')) {

            let splited = movie.split(' directedBy ');
            let movieName = splited[0];
            let directedBy = splited[1];

            let isInList = movieList.find(currMovie => currMovie.name == movieName);

            if (isInList) {
                isInList.director = directedBy;
            }
            //console.log(movieName, directedBy);

        } else if (movie.includes('onDate')) {

            let tokens = movie.split(' onDate ');
            let [movieName, date] = tokens;

            let chkIfMovieExist = movieList.find(currMovie => currMovie.name == movieName);

            if (chkIfMovieExist) {
                chkIfMovieExist.date = date;
            }
            //console.log(movieName, date);

        }
    }

    for (let movie of movieList) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }

}
movies([

    'addMovie Fast and Furious',

    'addMovie Godfather',

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis Ford Coppola',

    'Godfather onDate 29.07.2018',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'

])