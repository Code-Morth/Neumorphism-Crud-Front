<script setup lang="ts">

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { userById } from '../services/User.services'

const route = useRoute()
const userId = ref(route.params.id)
const dataUser = ref<any>(null);

(async () => {

    const data = await userById(userId.value)

    dataUser.value = data

    console.log('data.avatar ', dataUser?.value?.avatar)

})()

</script>

<template>
    <div class='AllUsersChildren'>
        <img v-if='dataUser?.value?.avatar !== null' :src='dataUser?.value?.avatar' alt="">
        <div class='allUsersChildren-container' v-if='dataUser !== null'>
            Hola {{ dataUser?.name }}, con correo {{ dataUser?.email }} e id {{ dataUser?.id }}
        </div>
    </div>
</template>
