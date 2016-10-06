class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
    this.handleFindByID = this.handleFindByID.bind(this);
  }

  handleFindByID(movie) {
    debugger;
    this.setState({
      movies: [movie].concat(this.state.movies)
    })
  }

  render() {
    return(
      <div>

        <h2>Movies!!!</h2>
        <h5>Search by:</h5>

        <IDSearch onSearch={this.handleFindByID} key="blahp" />

        <TitleSearch onSearch={this.handleFindByID} key="gooblybop" />

        <MovieList movies={this.state.movies} key="bloop" />


      </div>
    );
  }

}
