<template>
    <div id="user">
        <div class="container">
            <div v-if="user" class="card card-body mt-4">
                <h5 class="card-title">Username: {{ user.username }}</h5>
                <h5 class="card-subtitle mb-2 text-muted">Email: {{ user.email }}</h5>
                <h5 class="card-subtitle mb-2 text-muted">First Name: {{ user.first_name }}</h5>
                <h5 class="card-subtitle mb-2 text-muted">Last Name: {{ user.last_name }}</h5>
                <h5 class="card-subtitle mb-2 text-muted">Full Name: {{ user.full_name }}</h5>

            </div>
        </div>
    </div>
</template>

<script async setup lang="ts">


import { useAuthStore } from '../../stores/auth';
import { computed, onMounted } from 'vue'

const authStore = useAuthStore()

const user = computed(()=>{
    console.log(authStore.userDetail)
    return authStore.userDetail
})

async function getUser(){
    await authStore.getUser()
}

onMounted(async ()=>{
    console.log("onMounted triggered")
    await getUser()
})

</script>

<style scoped>
#user .card{
    max-width: 40vw;
    margin: auto;
}
</style>