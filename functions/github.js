// Proxy grab latest release number from GitHub API

const fetch = require("node-fetch")
const url = "https://api.github.com/repos/ahansson/hgrid-css/releases";

const optionsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
}

const fetchHeaders = {
  "Content-Type": "application/json",
  Host: "api.github.com",
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br"
}

exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: optionsHeaders,
    }
  }

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: fetchHeaders,
    })

    const data = await response.json()
    console.log(data)
    console.log(data[0].name)

    return {
      statusCode: 200,
      body: data,
    }
  } catch (err) {
    console.log(err)
  }
}

