import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/';
function Detail() {
    const [loading, setLoading] = useState(true);
    const [detailMovie, setDetailMovie] = useState(true);
    const { id } = useParams();
    // const getMovie = async () => {
    //     const json = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then((response) =>
    //         response.json()
    //     );
    //     setDetailMovie(json.data.movie);
    //     setLoading(false);
    // };

    useEffect(() => {
        const getDetail = async () => {
            const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            setDetailMovie(json.data.movie);
            setLoading(false);
        };
        getDetail();
    }, [id]);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : null}
            <img src={detailMovie.medium_cover_image} alt={detailMovie.title} />
            <h2>{detailMovie.title}</h2>
            <p>{detailMovie.summary}</p>
        </div>
    );
}
export default Detail;
