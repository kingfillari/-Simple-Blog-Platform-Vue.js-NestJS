<template>
  <div style="max-width: 800px; margin: auto; padding: 20px;">
    <CreatePost />
    <BlogList />
  </div>
</template>

<script>
import CreatePost from './components/CreatePost.vue';
import BlogList from './components/BlogList.vue';

export default {
  name: 'App',
  components: {
    CreatePost,
    BlogList
  }
};
</script>