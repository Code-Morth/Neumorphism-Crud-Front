<script setup lang="ts">

import { createUsers } from '../services/User.services'

const addUserThis = async (data: any) => {

    data.preventDefault()

    await createUsers(Object.fromEntries(new FormData(data.target)))

}

</script>

<template>
    <div class="AddUser">
        <form @submit='addUserThis' class="container-form">
            <label for="name">Nombre</label>
            <input placeholder="Nombre de usuario" name="name" type="text">
            <label for="email">Email</label>
            <input placeholder="example@gmail.com" type="text" name="email">
            <button>Agregar usuario</button>
        </form>
    </div>
</template>
