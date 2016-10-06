class IDSearch extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var id = this.refs.IDSearcher.value;
    var api_url = "http://omdbapi.com/?i="+id;
    var this_comp = this;

    $.ajax({
      url: api_url
    }).done(function(response) {
      this_comp.props.onSearch(response)
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>IMBD id: </label>
        <input ref="IDSearcher" type="text" />
        <input type="submit" value="Search" />
      </form>
    )
  }
}
