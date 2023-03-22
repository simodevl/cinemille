import { useState, useEffect } from "react";

const TMDB_API_KEY = import.meta.env.VITE_API_KEY;
const TMDB_API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=it-IT&page=1`;

export const useTMDbMovies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const AVERAGE_PROGRAMMING_MONTHS = 5;

    const addMonthsToDate = (dateString, months) => {
        const date = new Date(dateString);
        date.setMonth(date.getMonth() + months);
        return date;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(TMDB_API_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch data from TMDb API');
                }
                const data = await response.json();
                const formattedMovies = data.results.slice(0, 12).map((movie) => ({
                    id: movie.id,
                    title: movie.title,
                    duration: movie.runtime,
                    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    releaseDate: movie.release_date,
                    endDate: addMonthsToDate(movie.release_date, AVERAGE_PROGRAMMING_MONTHS),
                }));
                setMovies(formattedMovies);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { movies, isLoading, error };
};