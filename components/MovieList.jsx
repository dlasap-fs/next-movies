import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Movies.module.css";

export default function MovieList({ movies, minimal }) {
  return (
    <div className={styles.movies}>
      {movies.map((movie) => {
        const { id, vote_average, original_language, title, release_date, overview, poster_path, backdrop_path } = movie;
        return (
          <Link key={id} href={`/movies/${id}`}>
            {" "}
            <div key={id} className={styles.movieCard}>
              <div className={styles.rating}>
                <p>RATING</p>
                {vote_average}
              </div>
              <div className={styles.imageHeader}>
                <Image
                  key={id}
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={title}
                  width={!minimal ? 330 : 200}
                  height={!minimal ? 330 : 200}
                />
              </div>
              <div className={styles.movieCardHeader}>
                <h1>{title}</h1>
                {!minimal && (
                  <div className={styles.movieCardSubHeader}>
                    <p>ID: {id}</p>
                    <p>RELEASE: {release_date}</p>
                    <p>LANGUAGE: {original_language.toUpperCase()}</p>
                  </div>
                )}
              </div>
              {!minimal && (
                <div className={styles.desc}>
                  <p className={styles.descHeader}>Synopsis</p>
                  <p className={styles.description}>{overview}</p>
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
