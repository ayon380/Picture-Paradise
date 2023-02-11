import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const Card = (props) => {
  const [Loading, setLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const movie = props.movie;
  return (
    <div>
      {Loading ? (
        <div className="card">
          <SkeletonTheme color="#202020" highlightColor="#444" enableAnimation="true">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`}>
          <div className="card">
            <img
              className="card__image"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
            />
            <div className="cardoverlay">
              <div className="cardtitle">{movie.original_title}</div>
              <div className="cardreldate">
                {movie.release_date}
                <br></br>
                <span className="card__rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" id="star" />
                </span>
              </div>
              <div className="card__description">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Card;
