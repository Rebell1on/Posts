import About from '../Pages/About'
import Posts from '../Pages/Posts'
import PostIdPage from '../Pages/PostIdPage'
import Login from '../Pages/Login'

export const privatRoutes = [
  { path: '/about', component: About },
  { path: '/posts/:id', component: PostIdPage },
  { path: '/posts', component: Posts },
]

export const publicRoutes = [{ path: '/login', component: Login }]
