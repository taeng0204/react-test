import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom"

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState();

  const getMovie = useCallback(async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setContent(json.data.movie)
    setLoading(false)
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{content.title_long}</h1>
          <img src={content.medium_cover_image} alt="movie" />
          <div>
            <p>Rating : {content.rating}</p>
            <p>Likes : {content.like_count}</p>
            <p>Genres</p>
            <ul>
              {content.genres.map(genre => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
            <p>Runtime : {content.runtime}</p>
          </div>
          <div>
            <h2>Description</h2>
            <p>{content.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;