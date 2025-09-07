import mongoose from "mongoose";

export async function connectDB(uri) {
  mongoose.set("strictQuery", true);

  const connect = async (attempt = 1) => {
    try {
      await mongoose.connect(uri, { dbName: "empleados_db" });
      console.log("MongoDB conectado");
    } catch (err) {
      console.error("Error conectando a MongoDB (intento ${attempt}):", err.message);
      if (attempt < 5) {
        await new Promise(r => setTimeout(r, 2000 * attempt));
        return connect(attempt + 1);
      }
      process.exit(1);
    }
  };

  await connect();
}