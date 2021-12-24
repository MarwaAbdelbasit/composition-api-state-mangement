<template>
    <div>
        <h3>Hi, {{fullName}}</h3>
        <button @click="updateIsLogged(false)">Logout</button>
    </div>
</template>

<script>
import useUserState from "../store/useUserState"

export default {
    name: 'UserProfile',
    setup: () => {
        const { getFullName, updateIsLogged } = useUserState()

        return {
            fullName: getFullName(),
            updateIsLogged
        }
    }
}
</script>