import Image from "next/image";
import styles from "../styles/Movies.module.css";

export default function MovieList({ movies }) {
  return (
    <div className={styles.movies}>
      {movies.results.map((movie) => {
        const { id, vote_average, original_language, title, release_date, overview, poster_path, backdrop_path } = movie;
        return (
          <div className={styles.movieCard}>
            <div className={styles.rating}>
              <p>RATING</p>
              {vote_average}
            </div>
            <div className={styles.imageHeader}>
              <Image src={`https://image.tmdb.org/t/p/original${poster_path}`} width={375} height={375} />
            </div>
            <div className={styles.movieCardHeader}>
              <h1>{title}</h1>
              <div className={styles.movieCardSubHeader}>
                <p>ID: {id}</p>
                <p>RELEASE: {release_date}</p>
                <p>LANGUAGE: {original_language.toUpperCase()}</p>
              </div>
            </div>
            <div className={styles.desc}>
              <p className={styles.descHeader}>Synopsis</p>
              <p className={styles.description}>{overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
