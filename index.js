


var key = 'bfa62bd9'
let movieContainer = document.getElementById('movie-container')
const searchBtn = document.getElementById('search-btn')
  function searchMovie(){
    let movie = document.getElementById('movie').value
    fetch('https://www.omdbapi.com/?apikey='+key+'&s='+movie)
  .then((response) => response.json())
  .then((data) =>{ console.log(data)
    let movieList = data.Search.map(function(movie){
      return `<div class="movie-card">
          <img src="${movie.Poster}" />
          <p class="movie-title">${movie.Title}</p>
          <a onclick="selectedMovie('${movie.imdbID}')" href="#" class="movie-link">more details</a>
      </div>`
    }).join('')
   movieContainer.innerHTML = movieList  
    });
   
  }

  searchBtn.addEventListener('click',searchMovie)

  function selectedMovie(id){
    localStorage.setItem('movieId', id)
   window.location= "movie.html"
    return false
  }
  

  function getMovieDetails(){
    let movieId = localStorage.getItem('movieId')
    console.log(movieId)
    fetch('https://www.omdbapi.com/?apikey='+key+'&i='+movieId)
    .then((response) => response.json())
    .then((data) =>{ console.log(data)
     let singleMovie = `<div class="single-movie">
                  <img src="${data.Poster}" />
                  <div class="movie-desc">
                    <div>Title: ${data.Title}</div>
                    <div>Genre: ${data.Genre}</div>
                    <div>Released: ${data.Released}</div>
                    <div>Rating: ${data.imdbRating}</div>
                    <div>Directed by: ${data.Director}</div>
                    <div>Starring: ${data.Actors}</div>
                    <div>About: ${data.Plot}</div>
                  </div>

     
     
     </div>`
     document.getElementById('single-movie-con').innerHTML = singleMovie
      });
  }
  
  