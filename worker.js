const { Worker } = require('bullmq');

const worker = new Worker(
    'emailQueue',
    async job => {
        // console.log("processing job:", job.id, job.name);

        //  if (job.name === "sendEmail") {
        //   console.log(`sending email to ${job.data.email}`);
        //  }
        //   await new Promise(res => setTimeout(res, 5000));

        //     throw new Error("email service failed");
        // }

    //      if (job.name === 'sendEmail') {
    //     console.log(`Sending email to ${job.data.email}`);
    // }

    if (job.name === 'failedJob') {
        console.log("Failing job intentionally...");
        throw new Error("Intentional failed");
    }

        return "done";
    },
    {
        connection: {
            host: "127.0.0.1",
            port: 6379
        },
        concurrency: 5,

        limiter:{
            max:2,
            duration:5000
        }
    }
);

console.log("worker started..........");