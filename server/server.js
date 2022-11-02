import dotenv from "dotenv";
import app  from "./express";
import connectDB from "./db/db.connector";

dotenv.config();

const startServer = async () => {

    await connectDB(process.env.MONGO_URL);

    app.listen(process.env.PORT, (err) => {
        if (err) {
            console.log(err);
        }
        console.info("Server started on port %s.", process.env.PORT);
    });
}

startServer().then(null);