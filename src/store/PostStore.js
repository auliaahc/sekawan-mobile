import { makeAutoObservable } from "mobx";
import PostModel from "../models/PostModel";
import { fetchPosts, fetchPostDetail } from "../utils/api";

class PostStore {
  postsData = [];
  postData = null;
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  handlePress(id) {
    router.push(`/detail/${id}`);
  }

  async loadPosts() {
    this.isLoading = true;
    this.error = null;
    try {
      const data = await fetchPosts();
      this.postsData = data.map(
        (post) => new PostModel(post.userId, post.id, post.title, post.body)
      );
    } catch (error) {
      this.error = error;
    } finally {
      this.isLoading = false;
    }
  }

  async loadPostDetail(id) {
    this.isLoading = true;
    this.error = null;
    this.postData = null;
    try {
      const data = await fetchPostDetail(id);
      this.postData = new PostModel(data.userId, data.id, data.title, data.body);
    } catch (error) {
      this.error = error;
    } finally {
      this.isLoading = false;
    }
  }
}

export default new PostStore();
