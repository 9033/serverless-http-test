const redis = require('redis')

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
})
redisClient.connect();

module.exports = redisClient;