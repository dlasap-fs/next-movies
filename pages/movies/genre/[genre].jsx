import MovieList from "@/components/MovieList";
import { useRouter } from "next/router";

export default function ({ movies }) {
  const router = useRouter();
  const { genre } = router.query;

  return (
    <div
    //  className={styles.movies}
    >
      {/* <MovieList /> */}
      GENRE : {genre}
    </div>
  );
}
