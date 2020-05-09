var apiUrl = 'https://api.themoviedb.org/3/movie/'; //537061?api_key=27cce8dda57d4682e97a5c311d19c986
var apiUrl2 = 'https://api.themoviedb.org/3/movie/';
var casturl='/credits?api_key=27cce8dda57d4682e97a5c311d19c986&fbclid=IwAR0KoPo8EulAZQk1wewPZxqaIkNNxhQK17q8i69oPz4vmSTcqH2F_oE0FaE';
const image_url='https://image.tmdb.org/t/p/w500/';
var siteUrl = window.location.href;
var movieId = siteUrl.split('?')[1].split('=')[1];
console.log(movieId)


fetch(apiUrl + movieId + '?api_key=27cce8dda57d4682e97a5c311d19c986' + '&append_to_response=videos')
     .then((res) => res.json())
     .then((data)=> {
         console.log(data)
         //poster-film
         var movieImgNode = document.createElement('IMG');
         movieImgNode.src = `${image_url + data['poster_path']}`;
         movieImgNode.classList.add('movie-details-img');
         document.getElementById('movie-picture').appendChild(movieImgNode);
         

         //titlul-film
         var title = document.createElement('H1');
         var text = document.createTextNode(data['title']);
         title.appendChild(text);
         document.querySelector('.title-container').appendChild(title);

         //statusfilm
         var status = document.createElement('span');
         var text = document.createTextNode(data['status']);
         status.appendChild(text);
         document.querySelector('.status-container').appendChild(status);


         //descrierea-film
         var overview = document.createElement('span');
         var text = document.createTextNode(data['overview']);
         overview.appendChild(text);
         document.querySelector('.overview-container').appendChild(overview);

        //vote-average-film
         var vote_average = document.createElement('span');
         var text = document.createTextNode("Vote average: "+data['vote_average']);
         vote_average.appendChild(text);
         document.querySelector('.vote_average-container').appendChild(vote_average);

         //popularitate
         var popularity = document.createElement('H3');
         var text = document.createTextNode('Popularity: '+data['popularity']);
         popularity.appendChild(text);
         document.querySelector('.popularity-container').appendChild(popularity);

         //dataaparitiei
         var release_date = document.createElement('H3');
         var text = document.createTextNode(data['release_date']);
         release_date.appendChild(text);
         document.querySelector('.release_date-container').appendChild(release_date);

         //categorie-film
         data['genres'].forEach(element => {
            var title = document.createElement('span');
            var text = document.createTextNode(element['name'] + ' ,');
            title.appendChild(text);
            document.querySelector('.genres-container').appendChild(title);
         });

         //production_companies
         data['production_companies'].forEach(element => {
            var title = document.createElement('span');
            var text = document.createTextNode(element['name'] + ' ,');
            title.appendChild(text);
            document.querySelector('.production_companies-container').appendChild(title);
         });

         var runtime = document.createElement('H3');
         var text = document.createTextNode(' | Runtime '+data['runtime']+' min');
         status.appendChild(text);
         document.querySelector('.runtime-container').appendChild(runtime);

         //trailer-film
            var videoElement = document.createElement('IFRAME');
            //  videoElement.height = 300;
            // videoElement.width = 500;
            videoElement.src = "https://www.youtube.com/embed/" + data['videos']['results'][0]['key'];
            document.querySelector('.trailer-container').appendChild(videoElement);
         
         
     })
     .catch((error) =>{
         console.log('Error:',error);
     })

     fetch(apiUrl + movieId + casturl)
     .then((res) => res.json())
     .then((data)=> {
         console.log(data)
         data['cast'].forEach(element => {
            var character = document.createElement('H3');
            var text = document.createTextNode(element['character'] + '  played by  '+ element['name']);
            character.appendChild(text);
            document.querySelector('.character-container').appendChild(character);
 
         });

         
      })
      .catch((error) =>{
          console.log('Error:',error);
      })
     