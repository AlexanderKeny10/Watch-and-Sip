
const movieFormHandler =  async function(event) {
    event.preventDefault();

// grab user input from search box send a query
const movieTitle = document.querySelector('input[name="movieTitle"]').value;

// make api call from front-end to back-end
fetch(`/search/movie/${movieTitle}`, {
method: "get",
headers: { 'Content-Type': 'application/json' },
})
    .then(function() {
        console.log("working btn")
    });

}
// remember this pattern
document.querySelector('#searchMovieBtn').addEventListener('submit', movieFormHandler);
