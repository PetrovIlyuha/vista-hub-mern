import { injectable, inject } from "inversify";
import mongoose from "mongoose";

@injectable()
export class MongoDBService {
  constructor(@inject("MongoDB_URI") private mongoURI: string) {}

  async connectToMongoDB() {
    try {
      await mongoose.connect(this.mongoURI);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
}
