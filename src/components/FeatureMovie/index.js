import "./style.css";

const FeatureMovie = ({ item }) => {
  const style = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
  };

  const firstDate = new Date(item.first_air_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  return (
    <section className="featured" style={style}>
      <div className="feature--vertical">
        <div className="feature--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points inline-margin">
              Nota {item.vote_average}
            </div>
            <div className="featured--year inline-margin">
              lançado em {firstDate.getFullYear()}
            </div>
            <div className="featured--seasons inline-margin">
              Tem {item.number_of_seasons} temporada
              {item.number_of_seasons > 1 ? "s" : null}
            </div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a href="!#" className="featured-watchbutton">
              ► Assistir
            </a>
            <a href="!#" className="featured-mylistbutton">
              + Minha Lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros:</strong> {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMovie;
