import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from './Home.module.css';
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
            .then((response) => response.json())
            .then((json) => {
                setMovies(json.data.movies);
                setLoading(false);
            });
    }, []);
    console.log(movies);
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            summary={movie.summary}
                            medium_cover_image={movie.medium_cover_image}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Home;
