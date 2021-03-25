import { Component } from 'react';
import axios from 'axios';

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=90996ae54f24edbe7886996fac12fc31&language=en-US&page=1`,
      )
      .then(response => {
        this.setState({ reviews: response.data.results });
      });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          "We don't have any reviews for this movie."
        )}
      </>
    );
  }
}

export default Reviews;
