<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()">
          View All Posts
        </button>
      </small>
    </h4>
    <div v-if="post" class="col-md-12 form-wrapper">
      <h2>Edit Post</h2>
      <form id="edit-post-form" @submit.prevent="editPost">
        <div class="form-group col-md-12">
          <label for="title"> Title </label>
          <input
            type="text"
            id="title"
            v-model="post.title"
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
            v-model="post.desc"
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
            v-model="post.body"
            class="form-control"
          ></textarea>
        </div>
        <div class="form-group col-md-12">
          <label for="author"> Author </label>
          <input
            type="text"
            id="author"
            v-model="post.author"
            name="author"
            class="form-control"
          />
        </div>

        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit Post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return { id: 0 };
  },
  computed: {
    post() {
      return this.$store.getters.SINGLE_POST;
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getPost();
  },
  methods: {
    editPost() {
      let postData = {
        title: this.post.title,
        desc: this.post.desc,
        body: this.post.body,
        author: this.post.author,
        date: this.post.date,
        id: this.id,
      };
      this.$store.dispatch("UPDATE_POST", postData).then(() => {
        router.push({ name: "home" });
      });
    },
    getPost() {
      this.$store.dispatch("GET_SINGLE_POST", this.id);
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>
