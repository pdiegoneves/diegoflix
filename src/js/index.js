const doc = document
const hero = doc.getElementById('hero')

const API_KEY = 'a8917691c1e73fa663f848a0e1f2e239'
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1&language=pt-BR`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&language=pt-BR&query="`


async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  mountHero(data.results)
}

getMovies(API_URL)

function mountHero(movies) {
  hero.style.backgroundImage = `url('${IMG_PATH}${movies[0].poster_path}')`
}