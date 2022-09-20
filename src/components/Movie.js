import {
  Link
} from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return <div>
    <div>
      <img src={coverImg} alt={title} />
      <h2><Link to={`movie/${id}`}>{title}</Link></h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)} ...` : summary}</p>
      <ul>
        {genres.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  </div>;
}

export default Movie;