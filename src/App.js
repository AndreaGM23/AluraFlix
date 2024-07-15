import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import defaultMovies from './components/defaultMovies'; // Importar el array de películas predefinidas

const App = () => {
    const [movies, setMovies] = useState(defaultMovies); // Inicializar con las películas predefinidas

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handleAddMovie = () => {
        if (title.trim() !== '' && url.trim() !== '') {
            const newMovie = {
                id: Date.now(),
                title: title,
                url: url,
            };
            setMovies([...movies, newMovie]);
            setTitle('');
            setUrl('');
        }
    };

    const handleDeleteMovie = id => {
        const updatedMovies = movies.filter(movie => movie.id !== id);
        setMovies(updatedMovies);
    };

    return (
        <div className="App">
            <h1>Netflix Clone</h1>
            <div className="form">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="YouTube URL"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                />
                <button onClick={handleAddMovie}>Add Movie</button>
            </div>
            <MovieList movies={movies} onDelete={handleDeleteMovie} />
        </div>
    );
};

export default App;
