import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div>
          <img src={coverImg} />
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>{summary}</p>
          {/* {(movie.hasOwnProperty("genres")?
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul> : null)} */}
          <ul>
            {genres&&genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
    );
}

Movie.protoTypes = {
    id: ProtoTypes.number.isRequired, 
    coverImg: ProtoTypes.string.isRequired,
    title: ProtoTypes.string.isRequired,
    summary: ProtoTypes.string.isRequired,
    genres:ProtoTypes.arrayOf(ProtoTypes.string)
};

export default Movie;