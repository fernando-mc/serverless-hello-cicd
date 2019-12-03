'use strict';

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current branch is feature-one with some comments`,
    }),
  };

  callback(null, response);
};