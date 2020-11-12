async function fetchMovies() {
    try {
      const movieResponse = await fetch('http://someurl')
      const movieJson = await movieResponse.json();
      return movieJson
    } catch(error) {
      // Handle some errors
      return Promise.reject(error);
    }
  }
  function fetchMetaData() {
    try {
      const movieMetaDataResponse = await fetch('http://someurl')
      const movieJson = await movieMetaDataResponse.json();
      return movieJson;
    } catch(error) {
      // Handle some errors
    }
  }
  async function fetchAllData() {
    // If these calls can be done in parallel...
    const movieData = Promise.all([fetchMetaData(), fetchMovies()])
    // If not, call in sequence
    try {
      const metadata = await fetchMetaData();
      const movieData = await fetchMovies(metadata);
    } catch(error) {
      // handle error
    }
  }
  // function fetchMetaData() {
  //   fetch('http://someurl2')
  //     .then(function(response) {
  //     return response.json()
  //   })
  //     .then(function(json) {
  //     console.log(json);
  //     })
  //     .catch(function(error) {
  //     })
  // }