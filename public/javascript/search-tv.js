const tvFormHandler = async function (event) {
    event.preventDefault();

    // grab user input from search box send a query
    const tvTitle = document.querySelector('input[name="tvTitle"]').value;

    const route = `/search/tv/${tvTitle}`;
    location.replace(route);

}
// remember this pattern
document.querySelector('#tv-form').addEventListener('submit', tvFormHandler);
