import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(
      "mongodb+srv://harshmakwana22211:harsh123@authcluster.k4grfuh.mongodb.net/?retryWrites=true&w=majority"
    );
    if (connection.readyState == 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
