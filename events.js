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




// const { QueueEvents } = require('bullmq');

// const queueEvents = new QueueEvents('emailQueue', {
//     connection: {
//         host: '127.0.0.1',
//         port: 6379
//     }
// });

// queueEvents.on('failed', ({ jobId, failedReason }) => {
//     console.log(`job ${jobId} failed: ${failedReason}`);
// });

// queueEvents.on('waiting', ({ jobId }) => {
//     console.log(`job ${jobId} is waiting for retry (backoff applied)`);
// });

// queueEvents.on('delayed', ({ jobId, delay }) => {
//     console.log(`job ${jobId} will retry after ${delay} ms`);
// });
