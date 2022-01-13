import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css"
import Detail from "../routes/Detail"

import * as React from 'react';


import { TransitionGroup, CSSTransition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};


function Movie({ id, coverImg, title, year, summary, genres }) {
    return (
        <div className={styles.item}>
          <div><img src={coverImg} className={styles.img}/></div>
          <div className={styles.text}>
          <Detail
            id={id}
            year={year}
            coverImg={coverImg}
            title={title}
            summary={summary}
            genres={genres}
           />
            {/* <h2 onClick={Detail.handleClickOpen()}>
              <Detail movie={movie}/>
              <Link to={{
                pathname: `/movie/${id}`,
                state: {
                  movie: movie
                },
              }} className={styles.title}>{title}</Link>
            </h2> */}
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