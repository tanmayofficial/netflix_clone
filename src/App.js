import './App.css';
import Header from './Components/Layout/Header';
import Row from './Components/Row';
import requests from './requests'
import Banner from './Components/Layout/Banner';
// import Movie from '../src/Components/Movies/Movie'

function App() {
  
  /* const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
      'X-RapidAPI-Key': 'b63d568f60mshe5e5fdbe2a53438p1d0a3bjsn08dd7755803b'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
 */
  return (
    <div className="App">
      <Header/>
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;