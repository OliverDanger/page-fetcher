const fs = require('fs');
const request = require('request');



const content = 'Some content!';
const userInputs = process.argv.slice(2);

const fetcher = (url, destination) => {
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    writeTo(error, response, body, destination);
    console.log('the file size in bytes is: ', body.length);
  });

  const writeTo = (error, response, body, destination) => {
    fs.writeFile(destination, body, err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
      console.log('file written successfully');
    });
  };
};


fetcher(userInputs[0], userInputs[1]);