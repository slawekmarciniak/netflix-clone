// const exampleRequest =
// "https://api.themoviedb.org/3/movie/550?api_key=91a76693a48566d82712c08b42a2fd96";
// const domain = "https://netflix-clone-9f14a.web.app/";

const API_KEY = "91a76693a48566d82712c08b42a2fd96";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `movie/top_rated?language=en-US&api_key=${API_KEY}&page=1`,
  fetchActionMovies: `discover/movie/?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie/?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie/?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie/?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `discover/movie/?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
