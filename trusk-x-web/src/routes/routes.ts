import { IPost } from '../domain/post'

const AppRoutes = {
  INDEX: '/',
  LOGIN: '/login',
  LOGOUT: '/logout',
  POST: (post: IPost): string => `/posts/details/${post._id}`,
  POST_FORM: '/posts/write',
  POSTS: '/posts',
  POST_TMPL: '/posts/details/:postId',
  SIGNUP: '/signup',
}

export default AppRoutes
