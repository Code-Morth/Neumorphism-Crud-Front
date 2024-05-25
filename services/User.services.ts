const url = 'http://localhost:3000/api/user'

//  const urlPrueba = process.env.API_URL

const createUsers = async (dataUser: FormData) => {

  console.log(dataUser)

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: dataUser
    })

    return response.json()
  } catch (error) {
    console.log('Hubo un error al crear el usuario ', error)

    throw error
  }
}

const getAllUsers = async () => {
  try {
    const response = await fetch(url)

    return response.json()
  } catch (error) {
    console.log('Hubo un error con el fetching de los usuarios: ', error)

    throw error
  }
}

const userById = async (id: any) => {
  try {
    const response = await fetch(`${url}/${id}`)

    return response.json()
  } catch (error) {
    console.log('Hubo un error con el fetchin del usuario: ', error)

    throw error
  }
}

const editUser = async (dataUser: any) => {
  try {
    const response = await fetch(`${url}/${dataUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataUser)
    })

    return response.json()
  } catch (error) {
    console.log('Hubo un error al editar el usuario ', error)

    throw error
  }
}

const deleteUser = async (dataParam: any) => {
  try {
    const response = await fetch(`${url}/${dataParam.id}`, {
      method: 'DELETE'
    })

    return response.json()
  } catch (error) {
    console.log('Hubo un error al eliminar el usuario ', error)

    throw error
  }
}

export { userById, getAllUsers, createUsers, editUser, deleteUser }
