<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <user-login-vue v-if="!isLogged"></user-login-vue>
  <user-profile-vue v-else></user-profile-vue>
  <movielist-vue></movielist-vue>
  <p>number of movies: {{moviesLength}}</p>
</template>

<script>
import useMovieState from "@/store/useMovieState";
import useUserState from "@/store/useUserState";
import MovielistVue from "./components/Movielist.vue"
import UserLoginVue from "./components/UserLogin.vue";
import UserProfileVue from "./components/UserProfile.vue";

export default {
  name: 'App',
  components: {
    MovielistVue,
    UserLoginVue,
    UserProfileVue
  },
  setup: () => {
    const { getNumberOfMovies } = useMovieState()
    const { getIsLogged } = useUserState()

    return {
      moviesLength: getNumberOfMovies(),
      isLogged: getIsLogged()
    }
  }
}
</script>
