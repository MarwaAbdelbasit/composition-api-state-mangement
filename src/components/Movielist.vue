<template>
    <div>
        <ul>
            <li v-for="movie in movies" :key="movie.id">
                {{movie.title}}
                <span v-if="movie.requiresLoggin">(login required)</span>
                <button v-if="isLogged" @click="deleteMovieAction(movie.id)">X</button>
            </li>
        </ul>
        <button v-if="isLogged" @click.prevent="addMovie">Add movie</button>
    </div>
</template>

<script>
import useMovieState from "@/store/useMovieState";
import useUserState from "@/store/useUserState";

export default {
    name: 'Movielist',
    setup: () => {
        const {  
            getNumberOfMovies, 
            addMovieAction, 
            deleteMovieAction,
            getMovies
        } = useMovieState()
        const { getIsLogged } = useUserState()

        const addMovie = () => {
            addMovieAction({
                id: getNumberOfMovies().value + 1,
                title: `movie ${getNumberOfMovies().value + 1}`,
                requiresLoggin: false
            })
        }

        // const deleteMovie = (movieId) => {
            // deleteMovieAction(movieId)
        // }

        return {
            movies: getMovies(),
            addMovie,
            isLogged: getIsLogged(),
            deleteMovieAction,
        }
    }
}
</script>
