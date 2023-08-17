/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Aug 17 2023 11:22:39 GMT-0400 (Eastern Daylight Time)

Copyright (c) geekofia 2023 and beyond
*/

import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  });
});

router.get('/random/:min/:max', (req, res) => {
  const [min, max] = Object.keys(req.params).map((k) =>
    parseInt(req.params[k])
  );

  const randomNo = Math.floor(Math.random() * (max - min + 1) + min);

  res.json({
    randomNo
  });
});

export default router;
