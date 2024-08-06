import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.info('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
};

export default dbConnect;
