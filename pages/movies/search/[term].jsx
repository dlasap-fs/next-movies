import MovieList from "@/components/MovieList";
import helpers from "@/utils/helpers";
import styles from "../../../styles/Movies.module.css";

import { useRouter } from "next/router";
import SearchMovieBar from "@/components/SearchMovieBar";

export default function Movies({ movies }) {
  const router = useRouter();
  const { term } = router.query;
  return (
    <div>
      <SearchMovieBar currentTerm={term} />
      <MovieList movies={movies} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { term } = context.params; // Assuming URL is something like /pages/[id]

  const url =
    `
  https://api.themoviedb.org/3/search/movie?api_key=4279511eb3560a76761ec9aa2d6c8b7e&query=` + term;
  const movies = await helpers.read(url);
  return { props: { movies: movies.results } };
};
