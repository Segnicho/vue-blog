<template>
  <div>
    <div class="text-center">
      <h1>Single Post</h1>
    </div>

    <div v-if="post">
      <div class="card mb-4 shadow-sm">
        <div class="card-body">
          <h2 class="card-img-top">{{ post.title }}</h2>
          <p class="card-text">{{ post.body }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group" style="margin-bottom: 20px"></div>
          </div>

          <div class="card-footer">
            <small class="text-muted"
              >Posted on: {{ post.date }}</small
            ><br />
            <small class="text-muted">by: {{ post.author }}</small>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <h2>No single post found</h2>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      return this.$store.getters.SINGLE_POST;
    },
  },
};
</script>
