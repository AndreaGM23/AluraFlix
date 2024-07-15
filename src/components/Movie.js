import React from 'react';

const Movie = ({ title, url, onDelete }) => {
    return (
        <div className="movie">
            <h2>{title}</h2>
            <div className="video-container">
                <iframe
                    title={title}
                    src={url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Movie;