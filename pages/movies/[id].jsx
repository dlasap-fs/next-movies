import { useRouter } from "next/router";

export default function (props) {
  const router = useRouter();
  const { id } = router.query;

  return <>MOVIE {id} </>;
}
