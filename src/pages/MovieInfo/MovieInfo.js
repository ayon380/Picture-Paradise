import React, {useEffect, useState} from "react"
import "./MovieInfo.css"
import { useParams } from "react-router-dom"

const Movieinfo = () => {
    const [movie, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()

    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return (
        <div className="movie">
            <div className="movieposter">
                <img className="movieposterimg" alt="" src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}`} />
            </div>
            <div className="movieinfo">
                <div className="movieinfoLeft">
                    <div className="movieposter1">
                        <img className="movieposter1img" alt=" " src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movieinfoRight">
                    <div className="movieinfoRightTop">
                        <div className="moviename">{movie ? movie.original_title : ""}</div>
                        <div className="movietagline">{movie ? movie.tagline : ""}</div>
                        <div className="movierating">
                            {movie ? movie.vote_average: ""} <i class="fas fa-star" />
                            <span className="movievoteCount">{movie ? "(" + movie.vote_count + ") votes" : ""}</span>
                        </div> 
                        <div className="movieruntime">{movie ? movie.runtime + " mins" : ""}</div>
                        <div className="moviereleaseDate">{movie ? "Release date: " + movie.release_date : ""}</div>
                        <div className="moviegenres">
                            {
                                movie && movie.genres
                                ? 
                                movie.genres.map(genre => (
                                    <><span className="moviegenre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movieinfoRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div className="synopsisp">{movie ? movie.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movielinks">
                {
                    movie && movie.homepage && <a href={movie.homepage} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}><p><span className="homepagebtn">Homepage <i className="newTab fas fa-external-link-alt" id="homepagelink"></i></span></p></a>
                }
                {
                    movie && movie.imdb_id && <a href={"https://www.imdb.com/title/" + movie.imdb_id} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}><p><span className="imdbpagebtn">IMDb<i className="newTab fas fa-external-link-alt" id="imdbpagelink"></i></span></p></a>
                }
            </div>
            <div className="movieheading">Production companies</div>
            <div className="movieprc">
                {
                    movie && movie.production_companies && movie.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="prcimg">
                                    <img className="mprcomp" alt="dfsf" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Movieinfo