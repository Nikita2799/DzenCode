import * as http from "http";
import WebSocketService from "../Services/WebSocketService";
import ExpressService from "../Services/ExpressService";
import config from "../../config/config";

class ServerService {
  private server: http.Server;
  private expressService: ExpressService;
  private webSocketService: WebSocketService;

  constructor(port: number) {
    this.expressService = new ExpressService();
    this.server = http.createServer(this.expressService.getApp());
    this.webSocketService = new WebSocketService(this.server);

    this.server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }

  getWebSocketService(): WebSocketService {
    return this.webSocketService;
  }
}

export default ServerService;
