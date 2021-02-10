import "./style.css";

const Modal = ({ currentMovie, setModal }) => {
  return (
    <div className="modal">
      <div className="madal-content">
        <div className="modal-cover">
          <img
            src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
            alt="Cover"
          />
        </div>
        {currentMovie && currentMovie.overview}
        <button className="btn-close" onClick={() => setModal(false)}>FECHAR</button>
      </div>
    </div>
  );
};

export default Modal;
