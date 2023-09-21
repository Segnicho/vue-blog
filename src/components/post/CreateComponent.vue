<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2>Create Post</h2>
      <form id="create-post-form" @submit.prevent="createPost">
        <div class="form-group col-md-12">
          <label for="title"> Title </label>
          <input
            type="text"
            id="title"
            v-model="title"
            name="title"
            class="form-control"
            placeholder="Enter title"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="description"> Description </label>
          <input
            type="text"
            id="description"
            v-model="description"
            name="description"
            class="form-control"
            placeholder="Enter Description"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="body"> Write Content </label>
          <textarea
            id="body"
            cols="30"
            rows="5"
            v-model="body"
            class="form-control"
          ></textarea>
        </div>
        <div class="form-group col-md-12">
          <label for="author"> Author </label>
          <input
            type="text"
            id="author"
            v-model="author"
            name="author"
            class="form-control"
          />
        </div>

        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Create Post</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { baseURL } from "@/utils/helper";
import axios from "axios";
import router from "@/router";
export default {
  data() {
    return {
      title: "",
      desc: "",
      author: "",
      date: "",
    };
  },
  created() {
    this.date = new Date().toLocaleDateString();
  },
  methods: {
    createPost() {
      let postData = {
        title: this.title,
        author: this.author,
        desc: this.desc,
        date: this.date,
        id: Math.random()
      };
      this.submitPost(postData);
    },
    submitPost(data) {
      axios.post(`${baseURL}/posts`, data).then((response) => {
        console.log(response);
        router.push({ name: "home" });
      });
    },
  },
};
</script>
