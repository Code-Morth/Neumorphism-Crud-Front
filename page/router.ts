import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AddUser from '../components/AddUser.vue'
import AllUsers from '../components/AllUsers.vue'
import UserById from '../components/UserById.vue'
import EditUser from '../components/EditUser.vue'
import DeleteUser from '../components/DeleteUser.vue'
import AllUsersChildren from '../components/AllUsersChildren.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AddUser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/AllUsers',
      name: 'AllUsers',
      component: AllUsers
    },
    {
      path: '/AllUsers/:id',
      name: 'AllUsersChildren',
      component: AllUsersChildren
    },
    {
      path: '/UserById',
      name: 'UserById',
      component: UserById
    },
    {
      path: '/EditUser',
      name: 'EditUser',
      component: EditUser
    },
    {
      path: '/DeleteUser',
      name: 'DeleteUser',
      component: DeleteUser
    }
  ]
})

export default router
