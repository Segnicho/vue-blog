<template>
  <div>
    <div class="text-center">
      <h1>Vue Blog</h1>
      <p>
        This is the description of the blog built with Nest.js, Vue.js and
        MongoDB
      </p>

      <div v-if="posts.length === 0">
        <h2>No post found at the moment</h2>
      </div> 
    </div>

    <div class="row">
      <div class="col-md-4" v-for="post in posts" :key="post.id">
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h2 class="card-img-top">{{ post.title }}</h2>
            <p class="card-text">{{ post.body }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group" style="margin-bottom: 20px">
                <router-link
                  :to="{ name: 'Posts', params: { id: post.id } }"
                  class="btn btn-sm btn-outline-secondary"
                  >View Post
                </router-link>
                <router-link
                  :to="{ name: 'Edit', params: { id: post.id } }"
                  class="btn btn-sm btn-outline-secondary"
                  >Edit Post
                </router-link>
                <button
                  class="btn btn-sm btn-outline-secondary"
                  v-on:click="deletePost(post.id)"
                >
                  Delete Post
                </button>
              </div>
            </div>

            <div class="card-footer">
              <small class="text-muted">Posted on: {{ post.date_posted }}</small
              ><br />
              <small class="text-muted">by: {{ post.author }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { baseURL } from "@/utils/helper";
import axios from "axios";
export default {
  data() {
    return { posts: [] };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get(`${baseURL}/posts`).then((res) => {
        console.log("res", res);
        this.posts = res.data});
    },
    deletePost(id) {
      axios.delete(`${baseURL}/posts/${id}`).then((data) => {
        console.log(data);
        window.location.reload();
      });
    },
  },
};
</script>
