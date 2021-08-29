const mongoose = require('mongoose');

// In the future, we'll maybe ping https://api.zuri.chat/data/ to make sure it's active

const connectToDatabase = async (session = false) => {
  const { connection } = await mongoose.connect(process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : process.env.MONGO_DEV_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })

  if (session) return connection.getClient();

  console.log(`✬ | Mongoose connected successfully to ${connection.host}`.cyan.bold);
}

module.exports = connectToDatabase;