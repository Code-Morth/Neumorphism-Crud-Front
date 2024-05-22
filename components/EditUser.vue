<script setup lang='ts'>
import { editUser } from '../services/User.services';



const editUserThis = async (data: any) => {

    data.preventDefault()

    await editUser(Object.fromEntries(new FormData(data.target)))

}


</script>

<template>
    <div class="EditUser">
        <div class='editUser-container'>

            <form @submit='editUserThis' class="container-form">
                <label for="id">Id</label>
                <input placeholder='Ingrese el id del usuario a editar' type="text" name='id'>
                <label for="name">Nombre</label>
                <input placeholder="Nuevo nombre" name="name" type="text">
                <label for="email">Email</label>
                <input placeholder="Nuevo correo" type="text" name="email">            
                <button>Editar Usuario</button>
            </form>
        </div>
    </div>
</template>
