exports.handler = async function() {
  const { VITE_API_KEY } = process.env
  const URL = `https://random-facts4.p.rapidapi.com/get`

  try {
    const data= await fetch('https://random-facts4.p.rapidapi.com/get', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': VITE_API_KEY,
        'X-RapidAPI-Host': 'random-facts4.p.rapidapi.com'
      }
      })
      .then(response => response.json())
      .then(response => {
        funFact.value = response[0].description
        loadingNewFunFact.value = false
      })
      .catch(error => {
        funFact.value = error
        loadingNewFunFact.value = false
      })

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (error) {
    return {
      statusCode: error,
      body: JSON.stringify({ error })
    }
  }
}
