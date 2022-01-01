const router = require('express').Router();
const redis = require('../lib/redis.js');

router.get('/redis', async (req, res, next)=>{
  await redis.set('key', 'value');
  const r = await redis.get('key');
  res.send(`${r}`+`${Date.now()}`+`-1`);
});

module.exports = router;