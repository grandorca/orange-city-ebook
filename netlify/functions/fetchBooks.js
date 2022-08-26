const axios = require(`axios`);

exports.handler = async function (event) {
  try {
    const query = event.queryStringParameters.query;

    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
    };
  }
};
