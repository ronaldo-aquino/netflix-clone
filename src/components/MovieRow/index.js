import "./style.css";

const MovieRow = ({ title, items }) => {
  const imageUrlBase = "https://image.tmdb.org/t/p/w300";
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item) => (
              <div key={item.id} className="movieRow--item">
                <img
                  src={`${imageUrlBase}${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
