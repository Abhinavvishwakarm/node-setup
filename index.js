import dbConnect from './mongo/dbConnection.js'; // Ensure the file extension matches
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World  this is Node js setup with Mongoose');
});

const PORT = process.env.PORT || 3002;

async function startServer() {
  try {
    await dbConnect();

    app.listen(PORT, () => {
      console.info(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
}

startServer();
