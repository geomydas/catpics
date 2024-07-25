// functions/getCat.js

exports.handler = async (event, context) => {
  const fetch = (await import("node-fetch")).default; // Dynamically import node-fetch
  const API_KEY = process.env.CAT_API_KEY;

  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=100&has_breeds=true",
      {
        method: "GET",
        headers: {
          "x-api-key": API_KEY,
          "Content-Type": "application/json",
        },
      }
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
