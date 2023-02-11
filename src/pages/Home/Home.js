import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MovieList from "../../components/movielist/MovieList";

const Home = (props) => {
  const [pmovies, setpmovies] = React.useState([]);
  const tag=props.tag;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${tag}?api_key=0581dd72e9a05a0829a37503ce5b9111&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setpmovies(data.results));
  }, [tag]);
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        transitionTime={1000}
        swipeable={true}
        autoFocus={true}
        emulateTouch={true}
        showThumbs={false}
        showStatus={false}
      >
        {pmovies.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <div className="poster">
              <img
              className="posterimg"
                alt=""
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
              />
              <div className="posterDes">
                <div className="posterdestit">
                  {movie ? movie.original_title : "No Title"}
                </div>
                <div className="posterdesRelDate">
                  {movie ? movie.release_date : ""}
                  <span className="posterdesRating">
                    {movie ? movie.vote_average : ""}
                  </span>
                  <span>
                    <i class="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="posterdesOverView">
                  {movie.overview.length > 700
                    ? movie.overview.slice(0, 700) + "......"
                    : movie.overview}
                </div>
              </div>

            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList tag={`${tag}`} key={`${tag}`}/>
    </div>
  );
};

export default Home;
