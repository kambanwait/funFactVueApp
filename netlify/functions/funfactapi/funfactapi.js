const axios = require('axios')

exports.handler = async function() {
  const { VITE_API_KEY } = process.env
  const URL = `https://random-facts4.p.rapidapi.com/get`

  try {
    const { data } = await axios.get('https://random-facts4.p.rapidapi.com/gets', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': VITE_API_KEY,
        'X-RapidAPI-Host': 'random-facts4.p.rapidapi.com'
      }
    })
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data })
    }
  }
}
