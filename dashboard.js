const express = require('express');
const { Queue } = require('bullmq');

const { createBullBoard } = require('@bull-board/api');
const { BullMQAdapter } = require('@bull-board/api/bullMQAdapter');
const { ExpressAdapter } = require('@bull-board/express');

const app = express();

const emailQueue = new Queue('emailQueue', {
  connection: {
    host: '127.0.0.1',
    port: 6379
  }
});

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
  queues: [new BullMQAdapter(emailQueue)],
  serverAdapter
});

app.use('/admin/queues', serverAdapter.getRouter());

app.listen(3000, () => {
  console.log('Dashboard running on http://localhost:3000/admin/queues');
});