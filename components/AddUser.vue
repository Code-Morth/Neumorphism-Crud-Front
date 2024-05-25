<script setup lang="ts">

import { createUsers } from '../services/User.services'

const addUserThis = async (data: any) => {

    data.preventDefault()

    await createUsers(new FormData(data.target as HTMLFormElement))

}

</script>

<template>
    <div class="AddUser">
        <form @submit='addUserThis' class="container-form">
            <label for="name">Nombre</label>
            <input placeholder="Nombre de usuario" name="name" type="text">
            <label for="email">Email</label>
            <input placeholder="example@gmail.com" type="text" name="email">
            <label for="avatar">Foto</label>
            <input type="file" name='avatar'>

            <button>Agregar usuario</button>
        </form>
        
    </div>
</template>
