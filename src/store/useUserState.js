import { computed, reactive, readonly } from "vue"

const USER_STATE = "userState"

const defaultState = {
    user: {
        firstName: '',
        lastName: ''
    },
    islogged: false,
    loading: false
}

const getdefaultState = () => {
    if(localStorage.getItem(USER_STATE) !== null) {
        // return JSON.parse(localStorage.getItem(USER_STATE))
        if(typeof localStorage.getItem(USER_STATE) === 'object') {
            return localStorage.getItem(USER_STATE)
        }
        if(typeof localStorage.getItem(USER_STATE) === 'string') {
            return JSON.parse(localStorage.getItem(USER_STATE))
        }
    }

    return defaultState;
}

const state = reactive(getdefaultState())

const getters = {
    getFullName: () => {
        return computed(() => `${state.user.firstName} ${state.user.lastName}`)
    },
    getIsLogged: () => {
        return computed(()=>state.islogged)
    }
}

const actions = {
    setUser: ({ firstName, lastName }) => {
        state.user.firstName = firstName,
        state.user.lastName = lastName

        actions.updateIsLogged(true)
    },
    updateIsLogged: (isLogged) => {
        state.islogged = isLogged
    },
    updateLoading: (loadingStatue) => {
        state.loading = loadingStatue
    }
}

export default () => {
    if(localStorage.getItem(USER_STATE) === null) {
        localStorage.setItem(USER_STATE, JSON.stringify(state))
    }

    return {
        state: readonly(state),
        ...getters,
        ...actions,
    }
}
