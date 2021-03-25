import { Component } from 'react';
import axios from 'axios';

class Cast extends Component {
  state = {
    cast: [],
  };
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=90996ae54f24edbe7886996fac12fc31&language=en-US`,
      )
      .then(response => {
        this.setState({ cast: response.data.cast });
      });
  }

  render() {
    return (
      <ul>
        {this.state.cast.map(item => (
          <li key={item.id}>
            <img
              width="50"
              src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
              alt=""
            />
            <h3>{item.original_name}</h3>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
