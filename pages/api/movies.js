// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import helper from "@/utils/helpers";
export default async function handler(req, res) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  const resp = await helper.read(url);
  res.status(200).json({ name: "John Does", resp });
}
