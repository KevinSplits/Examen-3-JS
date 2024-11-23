import React, { useState } from 'react';
import { searchVideos } from '../services/videoService';
import '../css/VideoGallery.css';

const VideoGallery = () => {
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            if (!searchTerm) {
                setError("Ingresa un término de búsqueda valido.");
                return;
            }
            const videoResults = await searchVideos(searchTerm);
            const randomIndex = Math.floor(Math.random() * videoResults.length);
            setVideos([videoResults[randomIndex]]);
            setError(null);
        } catch (err) {
            setError("Hubo un error al buscar videos.");
        }
    };

    return (
        <div className="video-gallery-container">
            <h2>Video de Pexels: Examen de JavaScript 3</h2>
            <div className="search-bar">
                <input type="text" placeholder="Buscar video..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={handleSearch}>Buscar</button>
            </div>
            {error && <p>{error}</p>}
            <h3>Autor: Kevin Kobashikawa Cavero</h3>
            <div className="video-gallery">
                {videos.map((video) => (
                    <div key={video.id} className="video-item">
                        <video controls>
                            <source src={video.video_files[0].link} type="video/mp4" />
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGallery;
