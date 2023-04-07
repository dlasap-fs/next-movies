import Image from "next/image";
import styles from "../styles/Movie.module.css";

export default function MovieCard({ movie, movie_videos }) {
  console.log("%c  movie:", "color: #0e93e0;background: #aaefe5;", movie);

  const movie_trailer = movie_videos.reduce((acc, curr) => {
    if (curr.type == "Trailer" && curr.official && curr.site == "YouTube") return curr;
    return acc;
  }, {});

  console.log("%c  movie_trailer:", "color: #0e93e0;background: #aaefe5;", movie_trailer);

  const {
    adult,
    backdrop_path,
    budget,
    genres,
    homepage,
    id,
    imdb_id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    production_companies,
    belongs_to_collection,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    status,
    tagline,
    title,
    video,
    vote_average,
    vote_count,
  } = movie;

  const formatMoney = (money_num) => {
    const converted_money =
      Number(money_num) > 1_000_000
        ? Math.floor(Number(money_num) / 1_000_000).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          }) + "M"
        : Math.floor(Number(money_num) / 1_000).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          }) + "K";

    return converted_money;
    Number(money_num) > 1_000_000 ? Number(converted_money) / 1_000_000 + "M" : converted_money / 1_000 + "K";
  };
  return (
    <div className={styles.MovieCard}>
      <div className={styles.MovieCardContent}>
        <div className={styles.titleContainer}>
          <h1>{title}</h1>
          <p className={styles.Tag}>{tagline}</p>
        </div>

        <div className={styles.InfoBoxes}>
          <h5 className={styles.MovieID}>ID {id}</h5>
          <h5 className={styles.MovieStatus}>{status}</h5>
          <h5 className={styles.MovieYear}>{new Date(release_date).getFullYear()}</h5>
          <h5 className={styles.MovieRuntime}>{runtime} mins</h5>
        </div>
        {genres.map((genre) => (
          <h5 key={genre.name} className={styles.MovieGenre}>
            {genre.name}{" "}
          </h5>
        ))}
        <p>{release_date}</p>

        <p>{overview}</p>
        {/* <p>POPULARITY: {popularity}</p> */}
        <p>Budget: {budget ? formatMoney(budget) : "N/A"}</p>
        <p>Revenue: {revenue ? formatMoney(revenue) : "N/A"}</p>
        <div>
          {" "}
          {vote_average} / 10 Rating
          <p>{vote_count} Votes</p>
        </div>

        <div>
          <p>Produced by: </p>
          {production_companies.map((pc) => {
            return (
              <div key={movie.id}>
                <Image key={movie.id} src={"https://image.tmdb.org/t/p/original" + pc.logo_path} height={50} width={50} alt={title} />
                <p>{pc.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image key={movie.id} src={"https://image.tmdb.org/t/p/original" + poster_path} height={800} width={600} alt={title} />

        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + movie_trailer?.key}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* <Image key={movie.id} src={"https://image.tmdb.org/t/p/original" + backdrop_path} height={800} width={1000} alt={title} /> */}
    </div>
  );
}
