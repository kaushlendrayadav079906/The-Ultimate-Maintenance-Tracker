const cron = require('node-cron');
const MaintenanceRequest = require('../MaintenanceRequest');

const startOverdueChecker = () => {
  cron.schedule('0 0 * * *', async () => {
    try {
      console.log('Running overdue check...');
      const requests = await MaintenanceRequest.find({ 
        status: { $nin: ['Repaired', 'Scrap'] },
        scheduledDate: { $exists: true, $lt: new Date() },
        isOverdue: false
      });
      
      if (requests.length > 0) {
        await MaintenanceRequest.updateMany(
          { 
            _id: { $in: requests.map(r => r._id) }
          },
          { isOverdue: true }
        );
        console.log(`Marked ${requests.length} requests as overdue`);
      } else {
        console.log('No requests to mark as overdue');
      }
    } catch (error) {
      console.error('Overdue check error:', error.message);
    }
  });
  
  console.log('Overdue checker scheduled (daily at midnight)');
};

module.exports = startOverdueChecker;
