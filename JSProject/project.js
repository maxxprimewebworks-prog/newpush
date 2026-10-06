
const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJhYTRkYmZkNTZjYjRlODljMjFmMjFkYjAzODlhYyIsIm5iZiI6MTc5MDI0MDk5NC40MzEsInN1YiI6IjZhYjRlOGUyZDFhYjA3YWZhMDNmODkzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CfmqbP8mOcBYb1IgLFOarLo4PdAKkTGtKu1y2CAVDB4'
  }
};


// HTML elements
const movieContainer = document.querySelector('#movie-container');
const loading = document.querySelector('#loading');
const error = document.querySelector('#error');
const errorMessage = document.querySelector('#error-message');
const retryButton = document.querySelector('#retry-button');
const movieCount = document.querySelector('#movie-count');


// Genre IDs from TMDB
const genres = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',

  // TV genres
  10759: 'Action & Adventure',
  10762: 'Kids',
  10763: 'News',
  10764: 'Reality',
  10765: 'Sci-Fi & Fantasy',
  10766: 'Soap',
  10767: 'Talk',
  10768: 'War & Politics'
};


// Get the title
function getTitle(movie) {
  if (movie.media_type === 'tv') {
    return movie.name;
  }

  return movie.title;
}


// Get the original title
function getOriginalTitle(movie) {
  if (movie.media_type === 'tv') {
    return movie.original_name;
  }

  return movie.original_title;
}


// Get release date
function getReleaseDate(movie) {
  if (movie.media_type === 'tv') {
    return movie.first_air_date;
  }

  return movie.release_date;
}


// Convert genre IDs into names
function getGenres(movie) {
  if (!movie.genre_ids) {
    return 'Not available';
  }

  const movieGenres = movie.genre_ids
    .map(id => genres[id])
    .filter(Boolean);

  return movieGenres.length
    ? movieGenres.join(', ')
    : 'Not available';
}


// Format the release date
function formatDate(date) {
  if (!date) {
    return 'Not available';
  }

  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}


// Create one movie card
function createMovieCard(movie) {

  const title = getTitle(movie) || 'Untitled';
  const originalTitle = getOriginalTitle(movie) || 'Not available';
  const releaseDate = getReleaseDate(movie);
  const movieGenres = getGenres(movie);

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Poster';


  return `
    <article
  class="cursor-pointer overflow-hidden rounded-lg bg-zinc-900 shadow-lg">
  
      <!-- Poster -->
     <div class="group relative h-[360px] overflow-hidden bg-zinc-800">

  <img
    src="${poster}"
    alt="${title} poster"
    class="h-full w-full object-cover transition duration-300 group-hover:scale-110"
    loading="lazy"
  >

        <!-- Media type -->
        <span
          class="absolute left-3 top-3 rounded bg-black/80 px-2 py-1 text-xs font-bold uppercase">
          ${movie.media_type}
        </span>

        <!-- Rating -->
        <span
          class="absolute right-3 top-3 rounded bg-red-600 px-2 py-1 text-xs font-bold">
          ★ ${Number(movie.vote_average).toFixed(1)}
        </span>

      </div>


      <!-- Card information -->
      <div class="p-4">

        <!-- Name -->
        <h2 class="mb-2 text-xl font-bold">
          ${title}
        </h2>


        <!-- Original title -->
        <p class="mb-3 text-sm text-gray-400">
          <span class="font-semibold text-gray-300">
            Original title:
          </span>

          ${originalTitle}
        </p>


        <!-- Popularity and votes -->
        <div
          class="mb-3 flex gap-3 border-y border-zinc-700 py-3 text-xs text-gray-300">

          <span>
            Popularity:
            ${Number(movie.popularity).toFixed(1)}
          </span>

          <span>
            Votes:
            ${Number(movie.vote_count).toLocaleString()}
          </span>

        </div>


        <!-- Genre -->
        <p class="mb-2 text-sm text-gray-400">
          <span class="font-semibold text-gray-300">
            Genre:
          </span>

          ${movieGenres}
        </p>


        <!-- Release date -->
        <p class="mb-3 text-sm text-gray-400">
          <span class="font-semibold text-gray-300">
            Release date:
          </span>

          ${formatDate(releaseDate)}
        </p>


        <!-- Overview -->
        <p
          class="line-clamp-5 text-sm leading-6 text-gray-400">

          ${movie.overview || 'No overview available.'}

        </p>

      </div>

    </article>
  `;
}


// Fetch movies from TMDB
async function getTrendingMovies() {

  // Show loading
  loading.classList.remove('hidden');
  movieContainer.classList.add('hidden');
  error.classList.add('hidden');

  try {

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);


    // Make sure results exist
    if (!data.results || data.results.length === 0) {
      throw new Error('No movies or shows were found.');
    }


    // Create all cards
    movieContainer.innerHTML = data.results
      .map(movie => createMovieCard(movie))
      .join('');


    // Display number of results
    movieCount.textContent =
      `${data.results.length} titles`;


    // Show movies
    loading.classList.add('hidden');
    movieContainer.classList.remove('hidden');

  }

  catch (err) {

    console.error(err);

    loading.classList.add('hidden');

    error.classList.remove('hidden');

    errorMessage.textContent = err.message;
  }
}


// Try again button
retryButton.addEventListener('click', getTrendingMovies);


// Start the application
getTrendingMovies();

