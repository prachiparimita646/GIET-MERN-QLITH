let moviesContainer=document.getElementById("movies-container")
let API_KEY="98a37711"
let searchInput=document.getElementById("search-input");
let searchBtn=document.getElementById("search-btn");
let movieModal=document.getElementById("movie-modal")
let movieContent=document.getElementById("modal-content")
console.log(searchInput)
console.log(searchBtn)

function displayMovies(movies){
    moviesContainer.innerHTML="";
    console.log(movies)
    movies.map((movie)=>{
        moviesContainer.innerHTML +=`
        <div class="rounded bg-white shadow hover:scale-105 transition cursor-pointer"
        onclick="getMoviesDetails('${movie.imdbID}')">
            <img
              src="${movie.Poster}"
              class="rounded h-64 w-full object-cover"
            />
            <div class="p-3">
                <h3 class="font-bold text-sm">${movie.Title}</h3>
                <p class="text-xs text-gray-500">${movie.Year}</p>
            </div>
        </div>
        `
        ;

    })
}

async function loadDefaultMovies(){
    moviesContainer.innerHTML="<p> loading...</p>"

    try{
        let res=await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=all`);
        let data=await res.json();
        if(data.Response==="False"){
            moviesContainer.innerHTML="<p class='text-red-500'>No movies found...</p>"
        }
        displayMovies(data.Search)
     }catch(error){
        console.log("something went wrong")
     }
}

window.addEventListener("load",()=>{
    loadDefaultMovies()
})

async function moviesBasedOnSearch(){
    let search=searchInput.value.trim()

    moviesContainer.innerHTML=""

    try{
        let res=await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
        let data=await res.json();

        console.log(data)
        if(data.Response==="False"){
            moviesContainer.innerHTML="<p class='text-red-500'>No movies found...</p>"
        }
        displayMovies(data.Search)

    }catch (error){
        console.log("something went wrong")
    }
}

searchBtn.addEventListener("click",()=>{
    moviesBasedOnSearch()
})

async function getMoviesDetails(id){
    try{
        let res=await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
        let data=await res.json()

        movieContent.innerHTML=`
        <img src="${data.Poster}" alt="" class="w-full h-64 object-cover rounded mb-4">
        <h2 class="text-xl font-bold mb-2 ">${data.Title}</h2>
        <p class="text-sm mb-2">${data.Year}</p>
        <p class="text-sm mb-2">${data.Genre}</p>
        <p class="text-sm mb-2">${data.Rating}</p>
        <p class="text-sm text-gray-600">${data.Plot}</p>
         `

        movieModal.classList.remove("hidden");
        movieModal.classList.add("flex");
       
    }catch (error){
        console.log("something went wrong")
    }
}

function closeModal(){
    movieModal.classList.add("hidden")
    movieModal.classList.add("flex")
}