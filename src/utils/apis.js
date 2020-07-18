const API_KEY = "";

const API_SERVER = "https://api.themoviedb.org/3";
const apis = {
  fetchTrending: `${API_SERVER}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${API_SERVER}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${API_SERVER}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${API_SERVER}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${API_SERVER}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${API_SERVER}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${API_SERVER}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${API_SERVER}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default apis;
