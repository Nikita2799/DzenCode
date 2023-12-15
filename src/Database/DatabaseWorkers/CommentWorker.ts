import { Comment } from "../../Database/Models/Comment";
import { CommentInstance } from "../../Types/comment";

class CommentWorker {
  private comment;
  constructor() {
    this.comment = Comment;
  }
  async createComment(comment_params: any) {
    return await this.comment.create({ ...comment_params });
  }

  async findCommentById(id: number): Promise<CommentInstance | null> {
    return await this.comment.findByPk(id);
  }
}

export default CommentWorker;
