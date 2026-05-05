const {Worker}=require('bullmq');

const worker= new Worker(
    'emailQueue',
    async job =>{
        console.log("processing job:", job.id, job.name);

        if(job.name==="sendEmail"){
            console.log(`sending email to ${job.data.email}`);

            // await new Promise(res=> setTimeout(res,2000));
        }
        return "done";
    },
    {
        connection:{
            host: "127.0.0.1",
            port: 6379
    }
    }
);

console.log("worker started..........");