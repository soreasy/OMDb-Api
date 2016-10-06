class TitleSearch extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var title = this.refs.TitleEntry.value;
    var year = this.refs.YearEntry.value;
    var api_url = 'http://www.omdbapi.com/?t='+title+'&y='+year+'&plot=short&r=json'
    var this_comp  = this;

    $.ajax({
      url: api_url
    }).done(function(response) {
      debugger;
      this_comp.props.onSearch(response)
    })

  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Title: </label>
        <input ref="TitleEntry" type="text" />
        <label>Year: </label>
        <input ref="YearEntry" type="text" placeholder="optional" />

        <input type="submit" value="Search" />
      </form>
    )
  }

}
