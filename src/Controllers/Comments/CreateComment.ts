import { Response } from "express";
import CommentWorker from "../../Database/DatabaseWorkers/CommentWorker";
import { ExpressRequest } from "../../Types/express";
import { serverService } from "../../server";

const commentWorker = new CommentWorker();

export async function CreateComment(
  req: ExpressRequest,
  res: Response
): Promise<void> {
  try {
    const body = req.body;

    const comment_params = {
      user_id: req.user!.id,
      partner_id: body.partner_id ? body.partner_id : null,
      text: body.text,
    };
    const webSocketService = serverService.getWebSocketService();

    const newComment = await commentWorker.createComment(comment_params);

    webSocketService.broadcastMessage({
      type: "new-comment",
      data: { comment: newComment.dataValues },
    });

    res
      .status(201)
      .json({ message: "Comment added successfully", token: req.token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
