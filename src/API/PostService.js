import axios from 'axios';

export default class PostService {
  static async getAll() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  }

  static async getById(id) {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    return res.data;
  }

  static async getCommentsByPostId(id) {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    );
    return res.data;
  }
}
