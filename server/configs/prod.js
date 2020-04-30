//don't commit
module.exports = {
  PORT: 5001,

  MONGODB: {
    uri: "mongodb://localhost:27017/pizza",
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      auto_reconnect: true,
      useUnifiedTopology: true,
      keepAlive: true,
    },
  },
};
