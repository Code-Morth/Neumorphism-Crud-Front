<script setup lang='ts'>
import { deleteUser } from '../services/User.services';


const deleteUserThis = async (data: any) => {

    data.preventDefault()

    await deleteUser(Object.fromEntries(new FormData(data.target)))
}

</script>

<template>
    <div class='DeleteUser'>

        <form @submit='deleteUserThis' class='deleteUser-container'>
            <input placeholder='Ingrese el id a eliminar' name='id' type="text">
            <button>Eliminar usuario</button>
        </form>

    </div>
</template>
