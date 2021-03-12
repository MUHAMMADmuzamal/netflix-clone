const API_KEY = "30a2d5a9ba1fb9235faf4d3567795889"

const requests = {
    fetctTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetctNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetctTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetctActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetctComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetctHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetctRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetctDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;