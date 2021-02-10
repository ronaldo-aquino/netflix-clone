import { Token } from "./Token";

const API_KEY = Token;
const API_BASE = "https://api.themoviedb.org/3";
const LANGUAGE = "pt-BR";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const data = await req.json();
  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais da Netflix",
        items: await basicFetch(
          `/discover/tv/?with_network=213&language=${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch(
          `/trending/all/week?language=${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(
          `/movie/top_rated?language=${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10748&language=${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: "Documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=${LANGUAGE}&api_key=${API_KEY}`
        ),
      },
    ];
  },
};
