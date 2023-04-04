import MovieCard from "@/components/MovieCard";
import helpers from "@/utils/helpers";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Movie({ movie }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      {movie.title}
      {movie.homepage}
      MOVIE {id}
      {JSON.stringify(movie)}
      <MovieCard movies={[movie]} />
      <Image src={"https://image.tmdb.org/t/p/original" + movie.poster_path} height={200} width={200} alt={movie.title} />
    </>
  );
}
export const getStaticPaths = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  const response = await helpers.read(url);

  const paths = response.results.map((d) => {
    return {
      params: {
        id: d.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`;
  const movie = await helpers.read(url);
  return { props: { movie: movie }, revalidate: 1 };
};
