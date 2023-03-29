import { createQueue, Queue } from "kue";

// Create a queue with Kue
// Create an object containing the Job data with the following format:
//     {
//     phoneNumber: string,
//     message: string,
//     }

//     Create a queue named push_notification_code, and create a job with the object created before
// When the job is created without error, log to the console Notification job created: JOB ID
// When the job is completed, log to the console Notification job completed
// When the job is failing, log to the console Notification job failed

const my_queue = createQueue();

const object_for_job_data = {
    phoneNumber: '+254113469447',
    message: 'your object data implemented successfully'
}

const my_first_job = my_queue.create('push_notification_code', object_for_job_data).save((err) => {
    if(!err) console.log(`Notification job created: ${my_first_job.id}`);
});

my_first_job.on('completed', () => console.log('Notification job completed'));
my_first_job.on('failed', () => console.log('Notification job failed'));

// const my_first_job = Queue.createQueue('push_notification_code', object_for_job_data).save(err)