import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Card/Card";
import "./MovieList.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      tag: "",
      hasMore: true,
      page: 1,
      movies: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData =async () => {
    console.log("fetching")
    if (this.props.tag.startsWith('#')) {
      const str=this.props.tag.slice(1);
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=0581dd72e9a05a0829a37503ce5b9111&language=en-US&query=${str}&page=${this.state.page}&include_adult=true`
      )
        .then((res) => res.json())
        .then((data) =>
          this.setState({ movies: this.state.movies.concat(data.results) })
        );
        console.log(this.props.tag)
    } else {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.props.tag}?api_key=0581dd72e9a05a0829a37503ce5b9111&language=en-US&page=${this.state.page}`
      )
        .then((res) => res.json())
        .then((data) =>
          this.setState({ movies: this.state.movies.concat(data.results) })
        );
        console.log(this.props.tag)
    }
    if (this.state.page === 10) {
      this.setState({ hasMore: false });
    }
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
  };

  render() {
    return (
      <div>
        <h1 className="movieh1">
          {this.props.tag.startsWith('#')?this.props.tag.slice(1):this.props.tag[0].toUpperCase() + this.props.tag.slice(1)} Movies
        </h1>
        <div className="scrolll">
          <InfiniteScroll
            dataLength={this.state.movies.length}
            next={this.fetchData}
            hasMore={this.state.hasMore}
            // loader={<Loading />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="scroll">
              {this.state.movies.map((movie) => (
                <div className="carddiv">
                  <Card movie={movie} />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default App;
