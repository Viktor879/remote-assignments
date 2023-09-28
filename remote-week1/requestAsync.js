const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
const request = require('request-promise');

function requestCallback(url, callback) {
  const startTime = new Date();
  request(url)
    .then((response) => {
      const endTime = new Date();
      console.log(`Callback Request Time: ${endTime - startTime}ms`);
      callback(response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function requestPromise(url) {
  const startTime = new Date();
  return request(url)
    .then((response) => {
      const endTime = new Date();
      console.log(`Promise Request Time: ${endTime - startTime}ms`);
      return response;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

async function requestAsyncAwait(url) {
  const startTime = new Date();
  try {
    const response = await request(url);
    const endTime = new Date();
    console.log(`Async/Await Request Time: ${endTime - startTime}ms`);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Usage
requestCallback(url, (response) => {
  // Do something with the response
});

requestPromise(url)
  .then((response) => {
    // Do something with the response
  });

requestAsyncAwait(url);

