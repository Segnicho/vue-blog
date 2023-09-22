import axios from "axios";
import { baseURL } from "./utils/helper";

const state = {
  posts: [],
  singlePost: null,
};
const getters = {
  POSTS: (state) => state.posts,
  SINGLE_POST: (state) => state.singlePost,
};
const mutations = {
  SET_SINGLE_POST: (state, post) => {
    state.singlePost = post;
  },
  SET_POSTS: (state, posts) => {
    state.posts = posts;
  },
  ADD_POST: (state, post) => {
    state.posts.push(post);
  },
  DELETE_POST: (state, id) => {
    state.posts = state.posts.filter((post) => post.id !== id);
  },
  UPDATE_POST: (state, post) => {
    const index = state.posts.findIndex((p) => p.id === post.id);
    if (index !== -1) {
      state.posts.splice(index, 1, post);
    }
  },
};
const actions = {
  GET_SINGLE_POST: async ({ commit }, id) => {
    try {
      const response = await axios.get(`${baseURL}/posts/${id}`);
      const data = await response.data;
      commit("SET_SINGLE_POST", data);
    } catch (error) {
      console.error("Error fetching single post:", error);
    }
  },
  GET_POSTS: async ({ commit }) => {
    const response = await axios.get(baseURL + "/posts");
    const data = await response.data;
    commit("SET_POSTS", data);
  },
  ADD_POST: async ({ commit }, post) => {
    const response = await axios.post(baseURL + "/posts", post);
    const data = await response.data;
    commit("ADD_POST", data);
  },
  DELETE_POST: async ({ commit }, id) => {
    await axios.delete(baseURL + "/posts/" + id);
    commit("DELETE_POST", id);
  },
  UPDATE_POST: async ({ commit }, post) => {
    await axios.put(baseURL + "/posts/" + post.id, post);
    commit("UPDATE_POST", post);
  },
};


export default {
  state,
  getters,
  mutations,
  actions,
};
