const queue=require('./queue');

async function addJobs(){
//     await queue.add("sendEmail",
//         {email:"user1@gmail.com"},
//         {
//             attempts:3,
//             backoff:{
//                 type:"exponential",
//                 delay:5000
//             },
//             priority: 10
//         }
//     );
//     await queue.add("sendEmail",{
//             email:"user2@gmail.com"
//         },
//     {
//             attempts:3,
//             backoff:{
//                 type:"exponential",
//                 delay:5000
//             },
//             priority: 1
// });

await queue.addBulk([
     { name: "sendEmail", data: { email: "user1@gmail.com" } },
        { name: "sendEmail", data: { email: "user2@gmail.com" } },
        { name: "sendEmail", data: { email: "user3@gmail.com" } },
        { name: "sendEmail", data: { email: "user4@gmail.com" } },
        { name: "sendEmail", data: { email: "user5@gmail.com" } },
        { name: "sendEmail", data: { email: "user6@gmail.com" } },
        { name: "sendEmail", data: { email: "user7@gmail.com" } },
        { name: "sendEmail", data: { email: "user8@gmail.com" } },
        { name: "sendEmail", data: { email: "user9@gmail.com" } },
        { name: "sendEmail", data: { email: "user10@gmail.com" } },
]);
        console.log("jobs added");

       //comnplete jobs cleanup
        await queue.add('successJob',{val:1},{
            removeOnComplete:true
        });

        //failed jobs cleanup
        await queue.add('failedJob',{val:2},{
            attempts:2,
            removeOnFail:true
        });
}

addJobs();