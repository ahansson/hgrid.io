// Proxy grab latest release number from GitHub API

import fetch from 'node-fetch'

const url = 'https://api.github.com/repos/ahansson/hgrid-css/releases?per_page=1'

const optionsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

const fetchHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  'Host': 'api.github.com',
  'Accept': 'application/vnd.github.v3+json',
  'Accept-Encoding': 'gzip, deflate, br'
}

export const handler = async (event, context) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      'statusCode': 204,
      'headers': optionsHeaders,
    }

  } else {

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: fetchHeaders
      })

      const data = await response.json()
      return {
        statusCode: 200,
        body: JSON.stringify(data[0].name)
      }

    } catch (err) {
      console.log(err)
    }
  }
}