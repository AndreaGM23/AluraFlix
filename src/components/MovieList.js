import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, onDelete }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <Movie key={movie.id} title={movie.title} url={movie.url} onDelete={() => onDelete(movie.id)} />
            ))}
        </div>
    );
};

export default MovieList;