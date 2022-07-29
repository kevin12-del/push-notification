var push = require('web-push');

let vapidKeys = {
    publicKey: 'BPnrpMARmK6Yp3ShMM1ub1KLlBZWRAt3pWhFxO0_BlmdoaO2WdQz0ztmlFjM5_VfxmWDkK4MyAAOj5nHN4oJQ44',
    privateKey: 'mSARREvEm--zNBCuy8hIMEz3kH-oh3LGtO-TICfTWNs' 
  }

push.setVapidDetails('mailto:ktsobgni.megasoft@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')