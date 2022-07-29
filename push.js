var push = require('web-push');

let vapidKeys = {
    publicKey: 'BPnrpMARmK6Yp3ShMM1ub1KLlBZWRAt3pWhFxO0_BlmdoaO2WdQz0ztmlFjM5_VfxmWDkK4MyAAOj5nHN4oJQ44',
    privateKey: 'mSARREvEm--zNBCuy8hIMEz3kH-oh3LGtO-TICfTWNs' 
  }

push.setVapidDetails('mailto:ktsobgni.megasoft@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:
       "https://wns2-par02p.notify.windows.com/w/?token=BQYAAAAxhi9bddgEd%2bWARbXop4Hg2pJ8i9dBIeb6rdanFnD%2bEQBUV9lLbUhUiGQGpuZFPoP8JylZhbPhOfs0hRZQHLg5SgGJ19fF0CutWTtSbD0vZspm6%2bPNR4ismHr70PxYTExmKnrYWfhh%2b6p0662j2N9g1uPtVk0wugfSthko5gEsMozHXlx%2bXcRlk31anbc23dRaxZzvKShUOT91o%2fabpNi4Klq4DyLG5e0wU7FR116xcXW5rX1UvwmGvOzBwODhr2sFhqW9hXLstRu%2fhb2ZphdB4u7SRKUyJfzksgTBwk2UE4eXPK3%2fjncZfGNMiLdq1wYrgC%2f92NZLMag94L2BjpSCidT2LsB94N0UqXsCy7PQkA%3d%3d",
    expirationTime:null,
    keys: {
        p256dh:
           "BG3WK4Iu7uxcw05VW1UPSttfbOhipWLZ5YueQFrkDedEDHZ17z6x5UOkyBm2uGpk5XFvKttcXfLs5BmxqzXlPEE",
        auth:"8w-6B1O8Wgddb0RK1LjcCw"
}};

push.sendNotification(sub, 'test message')