var push = require('web-push');

let vapidKeys = {
    publicKey: 'BPnrpMARmK6Yp3ShMM1ub1KLlBZWRAt3pWhFxO0_BlmdoaO2WdQz0ztmlFjM5_VfxmWDkK4MyAAOj5nHN4oJQ44',
    privateKey: 'mSARREvEm--zNBCuy8hIMEz3kH-oh3LGtO-TICfTWNs' 
  }

push.setVapidDetails('mailto:ktsobgni.megasoft@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
   endpoint:
      "https://fcm.googleapis.com/fcm/send/cHR6xwqT4IE:APA91bGQvmw2UPcCFeNbNjxkpMnXvofYJo65eZIB11yJo_s8lZUCzJwGJ1wgbF5mAl0lOUUtf4-xAmELT35otZBJCNCXwyxTwDhhQTjtMWFLKSsNMQeQTWd_4wGXJrwe22DL6ieP_Aoj",
   expirationTime:null,
   keys:{
      p256dh:"BJ19QauRuj8Ed9O4Ug4cVpy87SIrqXhcPpBaW_Zz23cCDRJWIefc0mzfQFtGKO2VDXcViVToclLud4ix6jR7jlg",
      auth:"ThduneS2KidR8LjKXfa5jA"}};

push.sendNotification(sub, 'test message')