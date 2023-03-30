import { createQueue } from "kue";
import { createClient } from "redis";

my_queue = createClient();

// In a file named 8-job.js, create a function named createPushNotificationsJobs:

// It takes into argument jobs (array of objects), and queue (Kue queue)
// If jobs is not an array, it should throw an Error with message: Jobs is not an array
// For each job in jobs, create a job in the queue push_notification_code_3
// When a job is created, it should log to the console Notification job created: JOB_ID
// When a job is complete, it should log to the console Notification job JOB_ID completed
// When a job is failed, it should log to the console Notification job JOB_ID failed: ERROR
// When a job is making progress, it should log to the console Notification job JOB_ID PERCENT% complete


function createPushNotificationsJobs(jobs, queue){
    if(!Array.isArray(jobs)) throw new Error('Jobs is not an array');
    jobs.forEach((jobdata) => {
        const data = my_queue.create('push_notification_code_3', jobdata);
        data.save((error) => {
            if(!error) console.log(`Notification job created: ${job.id}`)
        })
    })

    job.on('complete', () => console.log(`Notification job ${job.id} completed`));
    job.on('progress', (progress) => console.log(`Notification job ${job.id} ${progress}% completed`));
    job.on('failed', (errorMessage) => console.log(`Notification job ${job.id} failed: ${errorMessage}`));

//     if(!Array.isArray(jobs)) console.console.log(('Jobs is not an array'));
//     jobs.forEach(job => {
//         job.my_queue()
//     });
 }