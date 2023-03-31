import MovieList from "@/components/MovieList";
import helpers from "@/utils/helpers";
import styles from "../../styles/Movies.module.css";

export default function ({ movies }) {
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}

export const getStaticProps = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  const movies = await helpers.read(url);
  return { props: { movies }, revalidate: 1 };
};
