const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
const request = require('request');

function requestSync(url) {
  const startTime = new Date();
  request(url, (error, response, body) => {
    if (error) {
      console.error("Error:", error);
      return;
    }
    const endTime = new Date();
    console.log(`Sync Request Time: ${endTime - startTime}ms`);
  });
}

requestSync(url);
requestSync(url);
requestSync(url);

