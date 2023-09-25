import { Link } from 'react-router-dom';
const Movie = (props) => {
    return (
        <div>
            <img src={props.medium_cover_image} alt={props.title} />
            <h2>
                <Link to={`/movie/${props.id}`}>{props.title}</Link>
            </h2>
            <p>{props.summary.length > 235 ? `${props.summary.slice(0, 235)}...` : props.summary}</p>
            <ul>
                {props.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
};
export default Movie;
