<template>
  <div>
    <h2>Blog Posts</h2>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
      <button @click="deletePost(post.id)">Delete</button>
      <hr />
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.loadPosts();
  },
  methods: {
    async loadPosts() {
      const res = await api.get('/posts');
      this.posts = res.data;
    },
    async deletePost(id) {
      await api.delete(`/posts/${id}`);
      this.loadPosts();
    }
  }
};
</script>