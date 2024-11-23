import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.pexels.com/videos',
    headers: {
        Authorization: 'nHtdv1Ks6JcMdl5S6AKcDoJUCNV7bys5FrS3NT8UugU0oGnILNqWAoUj' 
    }
});

export const searchVideos = async (query) => {
    try {
        const response = await api.get(`/search?query=${query}&per_page=10`);
        return response.data.videos; 
    } catch (error) {
        console.error("Error al buscar:", error);
        throw error;
    }
};
