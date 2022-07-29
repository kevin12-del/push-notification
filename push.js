var push = require('web-push');

global.codekey = "codekey";

let vapidKeys = {
    publicKey: 'BPnrpMARmK6Yp3ShMM1ub1KLlBZWRAt3pWhFxO0_BlmdoaO2WdQz0ztmlFjM5_VfxmWDkK4MyAAOj5nHN4oJQ44',
    privateKey: 'mSARREvEm--zNBCuy8hIMEz3kH-oh3LGtO-TICfTWNs' 
  }

push.setVapidDetails('mailto:ktsobgni.megasoft@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {endpoint:"https://wns2-par02p.notify.windows.com/w/?token=BQYAAADWlilZAI9S8wsqYKNNK%2bT4uRVzJ4FscmAwEX3vtWympzI49%2bvbHcd6biH%2bcy5k3Y1yF92r0WINPTUAgO76Pq0dueIUiDJE8iDkn1vrtr1K3gtyCSxAJUEEpPhZMK1Izz7x4yZ7qfY2tcRfpkORdTtmWEtiVRrnz0oZcmF%2biWBXks8Ym6Yl3fGmWbhWAsJ%2fqzVdiSZMdbohpSgDAeWm5pYWKVoFP9TrvGx7Ef%2b5gVSmJMivBROYgbfUVPSdLOlxrAQw3Dm1nKhTGKlQ0RgAPguaozRLeZUg%2b3KtGcdOT%2flEPuUJVs%2fN48dQOjgvd61KfZtODM9c%2fqDttwEz8ztIabqL",
expirationTime:null,
keys:{
   p256dh:"BMWBmSk9Ceu-nTyRzm9Q_QDOsfXiWUSQFUTBJxwK50extjBX8vDfWiU-D_hQN7mrLs6tGyyzukXmPRU5SepUHJw",
   auth:"KtOIWlabyw0mUm7YMJKkuw"
}};

push.sendNotification(sub, 'test message')