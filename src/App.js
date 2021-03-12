
import './App.css';
import Row from './components/Row/Row';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';
import requests from "./request";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetctNetflixOriginals}  isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetctTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetctTopRated} />
      <Row title="Actions Movies" fetchUrl={requests.fetctActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetctComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetctHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetctRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetctDocumentaries} />
    </div>
  );
}

export default App;
