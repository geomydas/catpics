const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const API_KEY = process.env.CAT_API_KEY;
  const headers = new Headers({
    "x-api-key": API_KEY,
    "Content-Type": "application/json",
  });
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=100&has_breeds=true",
      requestOptions
    );
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error fetching data" }),
    };
  }
};