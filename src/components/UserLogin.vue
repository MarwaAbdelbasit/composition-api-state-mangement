<template>
    <form @submit.prevent="onSubmit">
        <label>
            email:
            <input type="email" v-model="userForm.email">
        </label>
        <label>
            password:
            <input type="password" v-model="userForm.password">
        </label>
        <button 
            type="submit"
            :disabled="userState.loading"
        >
            {{userState.loading ? "loading..." : "Submit"}}
        </button>
    </form>
</template>

<script>
import { ref } from 'vue'
import { login } from '@/api'
import useUserState from '../store/useUserState'

export default {
    name: 'UserLogin',
    setup: () => {
        const userForm = ref({
            email: "",
            password: ""
        })

        const { state: userState, setUser, updateLoading } = useUserState()

        const onSubmit = () => {
            // console.log(userForm.value);
            updateLoading(true)
            login()
            .then((data) => {
                console.log(data)
                setUser(data)})
            .finally(()=> updateLoading(false))
        }

        return {
            userForm,
            onSubmit,
            userState
        }
    }
}
</script>