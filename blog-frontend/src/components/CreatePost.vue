<template>
  <div>
    <h2>Create Post</h2>
    <input v-model="title" placeholder="Title" />
    <br /><br />
    <textarea v-model="content" placeholder="Content"></textarea>
    <br /><br />
    <button @click="createPost">Add Post</button>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    async createPost() {
      await api.post('/posts', {
        id: Date.now(),
        title: this.title,
        content: this.content
      });
      this.title = '';
      this.content = '';
      alert('Post created!');
    }
  }
};
</script>