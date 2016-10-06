class Movie extends React.Component {

  render() {
    return(
      <li>
        <p>Title: {this.props.data.Title}</p>
        <p>Year: {this.props.data.Year}</p>
        <img src={this.props.data.Poster} />
      </li>
    )
  }
}
