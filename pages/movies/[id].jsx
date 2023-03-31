import { useRouter } from "next/router";

export default function Movie(props) {
  const router = useRouter();
  const { id } = router.query;

  return <>MOVIE {id} </>;
}
