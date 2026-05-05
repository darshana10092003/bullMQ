const {QueueEvents} = require('bullmq');

const queueEvents = new QueueEvents('emailQueue', {
    connection: {
        host: '127.0.0.1',
        port: 6379
    }
});

queueEvents.on('completed', ({ jobId}) =>{
    console.log(`job ${jobId} completed`);
});

queueEvents.on('failed', ({ jobId, failedReason}) =>{
    console.log(`job ${jobId} failed reason ${failedReason}`);

});