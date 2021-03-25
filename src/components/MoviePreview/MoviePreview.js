import React from 'react';

const MoviePreview = ({ img, title }) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original${img}`}
        alt="poster"
        width="100"
      />
      <p>{title}</p>
    </>
  );
};
export default MoviePreview;
