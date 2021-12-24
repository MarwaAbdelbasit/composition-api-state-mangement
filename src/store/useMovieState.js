import { reactive, readonly, computed } from 'vue'
import useUserState from './useUserState'

const defaultState = {
    movies: [
        {
            id: 1,
            title: 'movie 1',
            requiresLoggin: false
        },
        {
            id: 2,
            title: 'movie 2',
            requiresLoggin: true
        },
        {
            id: 3,
            title: 'movie 3',
            requiresLoggin: false
        }
    ]
}

//allow components to track changes in the state and react accordingly
const state = reactive(defaultState)

const getters = {
    getNumberOfMovies: () => {
        return computed(() => state.movies.length)
    },
    getMovies: () => {
        return computed(() => {
            const { getIsLogged } = useUserState()

            if(getIsLogged().value) {
                return state.movies
            } 
            
            return state.movies.filter(m => m.requiresLoggin === false)
        })
    }
}

const actions = {
    addMovieAction: (newMovie) => {
        state.movies.push(newMovie)
    },
    deleteMovieAction: (movieId) => {
        const index = state.movies.findIndex(m=>m.id === movieId)
        state.movies.splice(index, 1)
    }
}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions
})