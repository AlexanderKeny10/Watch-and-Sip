
const tvFormHandler = async function (event) {
    event.preventDefault();

    // grab user input from search box send a query
    const tvTitle = document.querySelector('input[name="tvTitle"]').value;

    const route = `/search/tv/${tvTitle}`;
    location.replace(route);
    // make api call from front-end to back-end
    // fetch(`/search/tv/${tvTitle}`, {
    // method: "get",
    // headers: { 'Content-Type': 'application/json' },
    // })
    // // console.log(tvTitle)
    //     .then(function() {
    //         document.location.replace('tv-search');
    //         // document.location.reload();
    //         console.log("working btn")
    //     });

}
// remember this pattern
document.querySelector('#tv-form').addEventListener('submit', tvFormHandler);
