'use strict';

module.exports.hello = (event, context, callback) => {
  if (event ) var result = event.split("").reverse().join("");

  console.log("Original string: " + event);
  console.log("Flipped string: " + result);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      result: "Flipped string: " + result,
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.flip = (str) => {
  return str.split("").reverse().join("");
};
