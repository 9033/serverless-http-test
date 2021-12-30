const router = require('express').Router();

const redisClient = process.env.REDIS_ENABLE == 1 ?
  require('redis').createClient({
    host: process.env.REDIS_HOST,
  }) : undefined;

const { promisify } = require("util");
redisClient._set = promisify(redisClient.set);
redisClient._get = promisify(redisClient.get);
redisClient._quit = promisify(redisClient.quit);

router.get('/redis', async (req, res, next)=>{
  await redisClient._set('key', 'value');
  const r = await redisClient._get('key');
  // await redisClient._quit();
  res.send(`${r}`+`${Date.now()}`+`-1`);
  // res.end();
});

module.exports = router;