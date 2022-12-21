import axios from 'axios'

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      },
    })
    return posts
  }

  static async getById(id) {
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts/` + id)
    return posts
  }

  static async getComment(id) {
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts/` + id + '/comments')
    return posts
  }
}
