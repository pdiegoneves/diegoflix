const doc = document
const rowTops = doc.getElementById('rowtops')

const API_KEY = 'ad82b8c14eb998df2dd8dff78b386565'
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1&language=pt-BR`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&language=pt-BR&query="`

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  mountHero(data.results)
  mountRowTops(data.results)
}

getMovies(API_URL)

function mountHero(movies) {
  const hero = doc.getElementById('hero')
  const heroTitle = doc.querySelector('#hero .title-hero')
  const heroSinopse = doc.querySelector('#hero .sinopse-hero')
  const { title, poster_path, vote_average, overview } = movies[0]
  hero.style.backgroundImage = `url('${IMG_PATH}${poster_path}')`
  heroTitle.innerText = `${title}`
  heroSinopse.innerText = `${overview}`
}

function mountRowTops(movies) {
  let moviesRowTop = []

  for (let i = 1; i <= 10; i++) {
    const { title, poster_path, vote_average, overview } = movies[i]
    moviesRowTop.push(
      `<div class="card">
        <div class="card-number">${i}</div>
        <div class="card-cover" style="background-image: url('${IMG_PATH}${poster_path}');"></div>
        
      </div>`
    )
  }
  rowTops.innerHTML += moviesRowTop
}
