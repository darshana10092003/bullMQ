const {Queue} = require('bullmq');

const myQueue=new Queue('emailQueue',{
    connection:{
        host: "127.0.0.1",
        port: 6379
    }
});

module.exports=myQueue;