import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
    async render() {
        return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
    },

    async afterRender() {
        // memanggil data dari API
        const movies = await TheMovieDbSource.nowPlayingMovies();
        // memanggil element pertama dengan atribute id yang ber-value "movies"
        const moviesContainer = document.querySelector('#movies');

        // TODO: tampilkan movies di dalam DOM
        movies.forEach((movie) => {
            // menampilkan data movies melalui fungsi template-creator
            moviesContainer.innerHTML += createMovieItemTemplate(movie);
        });
    },
};

export default NowPlaying;
