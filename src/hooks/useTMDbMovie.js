import { useState, useEffect } from "react";

const TMDB_API_KEY = import.meta.env.VITE_API_KEY;

export const useTMDbMovie = (id) => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const AVERAGE_PROGRAMMING_MONTHS = 5;

    const addMonthsToDate = (dateString, months) => {
        const date = new Date(dateString);
        date.setMonth(date.getMonth() + months);
        return date;
    };


    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=it-IT`
                );
                const data = await response.json();
                const formattedMovie = {
                    title: data.original_title,
                    overview: data.overview,
                    poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                    rating: data.vote_average,
                    releaseDate: data.release_date,
                    endDate: addMonthsToDate(data.release_date, AVERAGE_PROGRAMMING_MONTHS),
                };
                setMovie(formattedMovie);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchMovie();
    }, [id]);

    return { movie, isLoading, error };
};

