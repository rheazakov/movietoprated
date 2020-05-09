const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=27cce8dda57d4682e97a5c311d19c986&page=';
const API_key = '27ccce8dda57d4682e97a5c311d19c986';
const image_url='https://image.tmdb.org/t/p/w500/';
var pageNumber = 1;
const moviepage=document.querySelector('#moviepage');
(function() {
    window.pageNumber = 1;
    getMovies();
 
 })();
 function getMovies() {
    fetch(url + window.pageNumber)
    .then((res) => res.json())
    .then((data)=> {
        const movies=data.results;
        const movieBlock = createMovieContainer(movies);
        moviepage.appendChild(movieBlock);
        console.log('Data:', data);
    })
    .catch((error) =>{
        console.log('Error:',error);
    })
}
function createMovieContainer(movies){
    const movieElement=document.createElement('section');
    movieElement.setAttribute('class','movie');

    const movieTemplate=`
    <section class="section">
    ${movieSection(movies)}
    </section>
    `;


movieElement.innerHTML=movieTemplate;
return movieElement;
}
function movieSection(movies){
    return movies.map((movie) => {
        return `
        <div class="container1" onclick="displayMovie(${movie.id})">
           <div class="box">
           <img class="firstpageimg movie-picture" src= ${image_url + movie.poster_path} data-movie-id=${movie.id} onclick="displayMovie(${movie.id})"/>
           <div class="content">
            <h1 class="movie-title" >${movie.title}</h1>
            <h3 class="votes inline1"> <span class="fa fa-star checked"></span>  ${movie.vote_average}</h3>
            <h3 class="line inline1">|</h3>
            <h3 class="inline1">${movie.release_date}</h3><br>
            <h3 class="inline2" style="color: #CC0033;">Vote count: </h3>
            <h3 class="inline2" style="margin-bottom:5px;"> ${movie.vote_count}</h3><br>
            <h3>Original language: ${movie.original_language}</h3><br>
            <h3 class="responseright"> ${movie.overview}</h3><br>
            <h3>Popularity: ${movie.popularity}</h3><br>
            </div>
            </div>
         </div>
        `
        
     })
}

var btt = document.getElementById("backtotop"),
    body=document.body,
    docElem=document.documentElement,
    offset=100,
    scrollPos,docHeight,
    isFirefox= navigator.userAgent.toLowerCase().indexOf(" firefox ") > -1;
 docHeight=Math.max(body.scrollHeight,body.offsetHeight,docElem.clientHeight,docElem.scrollHeight,docElem.offsetHeight) 
 if(docHeight=!undefined){
     offset=docHeight /4;
 }

 function setPageActive(pageId) {
    window.pageNumber = pageId;
    document.getElementById('moviepage').innerHTML = '';
    document.querySelector('.active').classList.remove('active');
    document.getElementById('page-' + pageId).classList.add('active');
    getMovies();
}
function displayMovie(movieId) {
    window.open('movieDetails.htm?movieId=' + movieId)
   // window.location.href('movieDetails.htm?movieId=' + movieId)
}

