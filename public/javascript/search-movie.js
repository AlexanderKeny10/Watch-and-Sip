
const movieFormHandler = async function (event) {
    event.preventDefault();

    // grab user input from search box send a query
    const movieTitle = document.querySelector('input[name="movieTitle"]').value;

    const route = `/search/movie/${movieTitle}`;
    location.replace(route);
 
}
document.querySelector('#movie-form').addEventListener('submit', movieFormHandler);
