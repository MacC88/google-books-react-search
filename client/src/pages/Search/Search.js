import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Search extends Component {
  state = {
    title: "",
    toResults: false,
    results: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {

      const title = this.state.title.trim();

      API.getNewBooks(title)
        .then(res => {

          console.log(res.data.items);

          this.setState({
            toResults: true,
            results: res.data.items
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    if (this.state.toResults) {
      return <Redirect to={{
        pathname: "/results",
        data: { results: this.state.results }
      }} />
    }
    return (
      <div>
        <Link className="btn btn-default btn-lg bg-dark text-light" to="/" role="button">New Search</Link>
        <Link className="btn btn-default btn-lg bg-dark text-light" to="/saved" role="button">Saved Books</Link>
        <Jumbotron>
          <h1 className="display-4">Google Books Search</h1>
          <p className="lead">Search for and save books of interest.</p>
        </Jumbotron>
        <Container>
          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              label="Search Book"
              placeholder="Enter Book Title"
            />
            <FormBtn         
              onClick={this.handleFormSubmit}
              className="btn btn-dark"
            >
              Search
            </FormBtn>
          </form>
        </Container>
      </div>
    );
  }
}

export default Search;
