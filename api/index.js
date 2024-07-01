import connectDB from './src/database/mongo.db.js';
import app from './app.js';
const PORT = 5454;





// "mongodb+srv://shivamofficial285:VhAqQlSd7UO4mSO7@apalabazar.jcypil6.mongodb.net/";
// const MONGO = "mongodb+srv://apalabazar:IAKQKP3lF4hcyKg2@cluster0.k8mosmp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongodb+srv://apalabazar:IAKQKP3lF4hcyKg2@cluster0.k8mosmp.mongodb.net/

connectDB()


.then(() => {

  app.listen(PORT, () => {
    console.log(`⚙️  ⚙️   Server is running on port ${PORT} successfully 🎉  ➡️  ✈️`);
  });

})
.catch((err) => {
  console.error("MongoDB connection error => ", err);
});

