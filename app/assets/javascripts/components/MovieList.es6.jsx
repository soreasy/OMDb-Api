class MovieList extends React.Component {

  render() {
    let { movies } = this.props;

    return(
      <div id="movies-container">
        <p>Movies matching search: </p>

        <section>
          <ul>
            {movies.map((movie, i) =>
              <Movie key={i} data={movie} />
            )}
          </ul>
        </section>
      </div>
    )
  }
}
