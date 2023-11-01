import "dotenv/config";
import express from "express";
import "reflect-metadata";

import { InversifyExpressServer } from "inversify-express-utils";

import { Container } from "inversify";
import { MongoDBService } from "./infra/MongoDbService";
import errorHandlingMiddleware from "./middleware/errorHandlingMiddleware";
import { UserController } from "./user/UserController";
import { UserService } from "./user/UserService";

// Create the Express app
const app = express();
const port = process.env.PORT || 3000;

// Set up the Inversify Express server
const container = new Container();
container.bind<string>("MongoDB_URI").toConstantValue(process.env.MONGO_URI!);
container.bind<MongoDBService>(MongoDBService).toSelf();
container.bind<UserService>(UserService).toSelf();
container.bind<UserController>(UserController).toSelf();
const server = new InversifyExpressServer(container, app, { rootPath: "/api" });

// Configure the server
server.setConfig((app) => {
  app.use(express.json());
  app.use(errorHandlingMiddleware);
});

// Initialize and connect to MongoDB before starting the app
const mongoDBService = container.get<MongoDBService>(MongoDBService);

mongoDBService.connectToMongoDB().then(() => {
  const serverApp = server.build();
  serverApp.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
