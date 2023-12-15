import express from "express";
import expressRouter from "../../config/router_settings/router";

class ExpressService {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use("/api", expressRouter);
  }

  public getApp(): express.Application {
    return this.app;
  }
}

export default ExpressService;
