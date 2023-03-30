export const createPushNotificationsJobs = (jobs, queue) => {
  if (!Array.isArray(jobs)) {
    throw new Error('Jobs is not an array');
  }

  jobs.forEach((job) => {
    const notificationJob = queue.create('push_notification_code_3', job);

    notificationJob.on('complete', () => {
      console.log(`Notification job ${notificationJob.id} completed`);
    });

    notificationJob.on('failed', (err) => {
      console.log(`Notification job ${notificationJob.id} failed: ${err}`);
    });

    notificationJob.on('progress', (progress) => {
      console.log(`Notification job ${notificationJob.id} ${progress}% complete`);
    });

    console.log(`Notification job created: ${notificationJob.id}`);

    notificationJob.save((err) => {
      if (err) {
        console.error(err);
      }
    });
  });
};

export default createPushNotificationsJobs;
