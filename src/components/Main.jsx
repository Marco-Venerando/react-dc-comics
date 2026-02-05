import comics from "../comics";

export default function Main() {
  return (
    <div className="banner ">
      <img src="/img/jumbotron.jpg" alt="banner" />

      <div className="series">
        {" "}
        <div className="btn btn-primary m-2"> CURRENT SERIES</div>
        <div className="comics-grid">
          {comics.slice(0, 12).map(
            (
              comic, // Prendiamo solo i primi 12
            ) => (
              <div key={comic.title} className="comic-card">
                <img src={comic.thumb} alt={comic.title} />
                <h3>{comic.title}</h3>
              </div>
            ),
          )}
        </div>
        <div className="load-more-button">
          <button className="btn btn-primary m-2">LOAD MORE</button>
        </div>
      </div>
    </div>
  );
}
