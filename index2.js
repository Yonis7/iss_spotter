const { nextISSTimesForMyLocation } = require('./iss_promised');



nextISSTimesForMyLocation()
  .then((passTimes) => {
    console.log(`It worked! Returned times: ${JSON.stringify(passTimes)}`);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(body => console.log(body));