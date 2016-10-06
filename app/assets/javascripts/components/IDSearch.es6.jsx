class IDSearch extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    debugger;
    $.ajax({
      url: 'omdbapi.com/' + input
    }).done(function(response) {
      this.props.onSearch(response)

    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>ID: </label>
        <input ref="IDSearcher" type="text" />
        <input type="submit" value="Search" />
      </form>
    )
  }
}
