import Head from 'next/head'
import Genres from '../../components/Genres'
import SearchBar from '../../components/SearchBar'
import { genreMovie, getGenre, getUrl } from '../../lib/tmdb'
import { pathToSearchMovie } from '../../utils'

export default function Movie({ data }) {
  // Add console.log here to see what the component receives
  console.log('Movie component received data:', data)
  console.log('Genres array passed to Genres component:', data?.genres)
  return (
    <>
      <Head>
        <title>Movies | Entertainment App</title>
      </Head>
      <SearchBar
        placeholder='Search for movies'
        searchPath={pathToSearchMovie}
      />
      <Genres
        arr={data?.genres}
        media_type='movie'
        oddBgColor='odd:bg-cyan-700'
      />
    </>
  )
}

export async function getStaticProps() {
  const directUrl =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=cec32673e412bd9ab834dd9a79289f20'

  console.log('TEST: Attempting to fetch from direct URL:', directUrl)

  const response = await fetch(directUrl)

  // const url = getGenre(genreMovie)
  // const response = await fetch(url)
  const data = await response.json()

  return {
    props: {
      data,
    },
  }
}
