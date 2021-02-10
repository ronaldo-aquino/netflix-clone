import { useEffect, useState } from "react";
import MovieRow from "./components/MovieRow";
import Tmdb from "./Tmdb";
import "./App.css";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={item.title} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};

export default App;
