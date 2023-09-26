
var sync_request = require('sync-request'); //import 'sync-request' module

const url = 'https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock'

function requestSync(url){
    const startTime = process.hrtime() // To get the start time
    var res = sync_request('GET', url); // Function to make synchronous requests
    const endTime = process.hrtime(startTime) // To get the end time
    const durationInMs = endTime[0] * 1000 + endTime[1] / 1e6 // Transform execution time from seconds to milliseconds
    console.log(durationInMs) 
}
requestSync(url)
requestSync(url)
requestSync(url)
