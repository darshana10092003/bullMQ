const queue=require('./queue');

async function addJobs(){
    await queue.add("sendEmail",{
            email:"user1@gmail.com"
        });
    await queue.add("sendEmail",{
            email:"user2@gmail.com"
        });

        console.log("jobs added");
}

addJobs();