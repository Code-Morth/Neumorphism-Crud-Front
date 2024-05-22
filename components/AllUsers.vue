<script setup lang='ts'>

import { getAllUsers } from '../services/User.services'
import { ref } from 'vue'

const users = ref<any>([]);

(async () => {

    const data = await getAllUsers()

    users.value = data

})()
</script>

<template>
    <div class='AllUsers'>
        <div class='allUsers-container'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Fecha de creacion</th>
                        <th>Fecha de modificacion</th>
                    </tr>
                </thead>
                <tbody v-if="users.value !== null" v-for="data in users" :key="data.id">
                    <router-link class='router-container' :to="{ name: 'AllUsersChildren', params: { id: data.id } }"
                        tag="tr">
                        <td>{{ data.id }}</td>
                        <td>{{ data.name }}</td>
                        <td>{{ data.email }}</td>
                        <td>{{ data.createdAt }}</td>
                        <td>{{ data.updatedAt }}</td>
                    </router-link>
                </tbody>
            </table>
        </div>
    </div>
</template>
