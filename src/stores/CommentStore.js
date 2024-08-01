import { makeAutoObservable } from "mobx";
import CommentModel from "../models/CommentModel";
import { fetchComments } from "../apis/commentApi";

class CommentStore {
  commentsData = [];
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async loadComments(id) {
    this.commentsData = [];
    this.isLoading = true;
    this.error = null;
    try {
      const data = await fetchComments(id);
      console.log(data);
      this.commentsData = data.map(
        (comment) => new CommentModel(comment.postId, comment.id, comment.name, comment.email, comment.body)
      );
    } catch (error) {
      this.error = error;
    } finally {
      this.isLoading = false;
    }
  }
}

export default new CommentStore();
