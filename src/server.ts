// src/app.ts
import config from "../config/config";
import ServerService from "./Services/ServerService";

const PORT = config.server.PORT || 8000;

export const serverService = new ServerService(+PORT);
