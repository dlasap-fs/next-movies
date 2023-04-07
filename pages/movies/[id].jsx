import MovieCard from "@/components/MovieCard";
import helpers from "@/utils/helpers";
import { useRouter } from "next/router";

export default function Movie({ movie, movie_videos }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <MovieCard movie={movie} movie_videos={movie_videos} />
    </>
  );
}
// export const getStaticPaths = async () => {
//   const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

//   const response = await helpers.read(url);

//   const paths = response.results.map((d) => {
//     return {
//       params: {
//         id: d.id.toString(),
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`;
  const vids_url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}`;
  const movie = await helpers.read(url);
  const movie_videos = await helpers.read(vids_url);
  console.log("%c  movie_videos:", "color: #0e93e0;background: #aaefe5;", movie_videos);

  // return { props: { movie: movie, movie_videos: movie_videos.results ?? [] }, revalidate: 1 };
  return { props: { movie: movie, movie_videos: movie_videos.results ?? [] } };
};
