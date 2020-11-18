
const movieFormHandler = async function (event) {
    event.preventDefault();

    // grab user input from search box send a query
    const movieTitle = document.querySelector('input[name="movieTitle"]').value;

    const route = `/search/movie/${movieTitle}`;
    location.replace(route);
    // make api call from front-end to back-end
    // fetch(`/search/movie/${movieTitle}`, {
    //     method: "get",
    //     headers: { 'Content-Type': 'application/json' },
    // })
    //     // console.log(movieTitle)
    //     .then(function (response) {
    //         // add data 
    //         // document.location.replace('movie-search');
    //         // document.location.reload();
    //         // console.log("working btn")
    //         return response.text()
    //     })
    //     .then(function(data) {
    //         console.log(data)
    //     })

}
// remember this pattern
document.querySelector('#movie-form').addEventListener('submit', movieFormHandler);
