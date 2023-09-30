const axios = require("axios");

const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

async function requestSync(url) {
  const startTime = new Date().getTime(); // Record start time
  await axios.get(url);
  const endTime = new Date().getTime(); // Record end time after the request completes
  return endTime - startTime; // Return the execution time
}

async function runRequests() {
  for (let i = 0; i < 3; i++) {
    const executionTime = await requestSync(url);
    console.log(`Execution time ${i + 1} (ms): ${executionTime}`);
  }

}

runRequests();

