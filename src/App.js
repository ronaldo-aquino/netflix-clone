import { useEffect, useState } from "react";
import MovieRow from "./components/MovieRow";
import Tmdb from "./Tmdb";
import "./App.css";
import FeatureMovie from "./components/FeatureMovie";
import Header from "./components/Header/Header";
import Modal from "./components/Modal";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const originals = list.filter((item) => item.slug === "originals");
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );

      const chosen = originals[0].items.results[randomChosen];
      const choseInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeatureData(choseInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 20) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCurrentMovie = (movie) => {
    setCurrentMovie(movie);
  };

  return (
    <div className="page">
      {modal && <Modal currentMovie={currentMovie} setModal={setModal} />}
      <Header black={blackHeader} />
      {featureData && <FeatureMovie item={featureData} />}

      <section className="lists">
        {movieList.map((item) => (
          <MovieRow
            key={item.title}
            title={item.title}
            items={item.items}
            setModal={setModal}
            getCurrentMovie={getCurrentMovie}
          />
        ))}
      </section>

      <footer>
        Feito por: Ronaldo Aquino <br />
        API para pegar o dados dos filme foi a do TMDB
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
};

export default App;
