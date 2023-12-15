import * as http from "http";
import * as WebSocket from "ws";

class WebSocketService {
  private wss: WebSocket.Server;

  constructor(server: http.Server) {
    this.wss = new WebSocket.Server({ server });

    this.wss.on("connection", (ws) => {
      console.log("Client connected");
      ws.on("close", () => {
        console.log("Client disconnected");
      });
    });
  }

  broadcastMessage(message: Record<string, any>): void {
    this.wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  }
}

export default WebSocketService;
