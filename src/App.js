import "./App.css";
import Row from "./components/Row";
import Navbar from "./components/Navbar";
import requests from "./request";
import Banner from "./components/Banner";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="netflix originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Top rated movies" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
