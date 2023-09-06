import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Upcoming in Cinema</h2>
            <div id="movies" class="movies">
            </div>
        </div>
      `;
    },

    // Fungsi ini akan dipanggil setelah render()
    async afterRender() {
        const movies = await TheMovieDbSource.upcomingMovies();
        const moviesContainer = document.querySelector('#movies');

        // TODO: tampilkan movies di dalam DOM
        movies.forEach((movie) => {
            moviesContainer.innerHTML += createMovieItemTemplate(movie);
        });
    },
};

export default Upcoming;
