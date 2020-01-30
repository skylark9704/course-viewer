import React from "react";
import { connect } from "react-redux";
import { getAuthors } from "../../redux/authors/actions";

class AuthorList extends React.Component {
  componentDidMount = () => {
    const { getAuthors } = this.props;
    getAuthors();
  };

  onChange = e => {
    const { onSelect } = this.props;
    onSelect && onSelect(e.target.value);
  };

  render() {
    const { authors, required, value } = this.props;
    return (
      <div className="form-group">
        <label>Authors</label>
        <select
          required={required}
          name="author"
          className="form-control"
          defaultValue={value && value}
          onChange={this.onChange}
        >
          <option value={null}>Choose</option>
          {authors &&
            authors.map((author, index) => {
              return (
                <option key={index} value={author.id}>
                  {author.name}
                </option>
              );
            })}
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { authorList } = state.authors;
  return {
    authors: authorList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAuthors: () => dispatch(getAuthors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList);
