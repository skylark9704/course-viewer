import React from "react";
import { connect } from "react-redux";
import { GET } from "../../sagas/authors/actions";

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
    const { authors, required, value, name } = this.props;
    return (
      <div data-testid="author-list" className="form-group">
        <label data-testid="label">Authors</label>
        <select data-testid="select"
          required={required}
          name={name}
          className="form-control"
          defaultValue={value && value}
          onChange={this.onChange}
        >
          <option data-testid="option" value={null}>Choose</option>
          {authors &&
            authors.map((author, index) => {
              return (
                <option data-testid="option" key={index} value={author.id}>
                  {author.name}
                </option>
              );
            })}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { authorList } = state.authors;
  return {
    authors: authorList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAuthors: () => dispatch(GET.REQUEST())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList);
