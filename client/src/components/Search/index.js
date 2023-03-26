import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("City: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <section id="search-container">
        <form
          className="form-container right-inner-addon input-container"
          onSubmit={this.handleSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 search-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            className="form-control"
            placeholder="San Antonio"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </section>
    );
  }
}

export default Search;
