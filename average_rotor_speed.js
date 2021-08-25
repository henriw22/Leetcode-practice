const request = require('request');

const fetch = async (url) => {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) reject(error)
      else resolve(JSON.parse(body))
    });
  });
}

const averageRotorSpeed = async (pageStatus, parentId) => {
  let response = await fetch(`https://jsonmock.hackerrank.com/api/iot_devices/search?status=${pageStatus}&page=0`);
  if (response.total === 0) return 0;

  let rotorSpeedSum = 0;
  let rotorSpeedCount = 0;
  for (let pageIndex = 1; pageIndex <= response.total_pages; pageIndex++) {
    response = await fetch(`https://jsonmock.hackerrank.com/api/iot_devices/search?status=${pageStatus}&page=${pageIndex}`);
    const data = response.data;
    for (let device of data) {
      if (device.parent && (device.parent.id === parentId)) {
        rotorSpeedSum += device.operatingParams.rotorSpeed;
        rotorSpeedCount += 1;
      }
    }
  }

  if (rotorSpeedCount === 0) return 0;
  return Math.round(rotorSpeedSum/rotorSpeedCount);
}

const main = async () => {
  console.log(await averageRotorSpeed('RUNNING', 2));
  console.log(await averageRotorSpeed('RUNNING', 7));
  console.log(await averageRotorSpeed('STOP', 2));
  console.log(await averageRotorSpeed('STOP', 7));
}

main();