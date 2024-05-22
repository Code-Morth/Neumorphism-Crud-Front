<script setup lang='ts'>
import { ref } from 'vue';
import { userById } from '../services/User.services';


const user = ref<any>([])
const idUser = ref<number>(0)

const getUserById = async () => {

    const data = await userById(idUser.value)

    user.value = [data]

}

const inputChange = (data: any) => {

    idUser.value = data.target.value

}
</script>

<template>
    <div class='UserById'>
        <div class='userById-container'>
            <div class='search-container'>
                <input @input='inputChange' type="text">
                <button @click='getUserById'>Buscar</button>
            </div>
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
                <tbody v-if="user.value !== null" v-for="data in user" :key="data.id">
                    <tr>
                        <td>{{ data.id }}</td>
                        <td>{{ data.name }}</td>
                        <td>{{ data.email }}</td>
                        <td>{{ data.createdAt }}</td>
                        <td>{{ data.updatedAt }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
