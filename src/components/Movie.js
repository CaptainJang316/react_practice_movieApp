import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css"

function Movie({ id, coverImg, title, year, summary, genres }) {
    return (
        <div className={styles.item}>
          <div><img src={coverImg} className={styles.img}/></div>
          <div className={styles.text}>
            <h2>
              <Link to={`/movie/${id}`} className={styles.title}>{title}</Link>
            </h2>
            {year}, 
            {genres.map((g) => (
                ` ${g} |`
              ))} 
            <p>{summary.length > 335 ? `${summary.slice(0, 235)}...` : summary}</p>
            {/* {(movie.hasOwnProperty("genres")?
            <ul>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul> : null)} */}
          </div>
        </div>
    );
}

Movie.protoTypes = {
    year:  ProtoTypes.number.isRequired,
    id: ProtoTypes.number.isRequired, 
    coverImg: ProtoTypes.string.isRequired,
    title: ProtoTypes.string.isRequired,
    summary: ProtoTypes.string.isRequired,
    genres:ProtoTypes.arrayOf(ProtoTypes.string)
};

export default Movie;